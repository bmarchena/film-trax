import { useState } from "react";
import Calendar from "./components/Calendar";
import SearchBar from "./components/SearchBar";
import FilmCard from "./components/FilmCard";
import type { DayObj, Film } from "./types";
import { getTodayObj } from "./utils";
import "./App.css";
import { addDateToDB, addFilmToDB, fetchFilmOMDB, searchOMDB } from "./api";

function App() {
	const today = getTodayObj();
	const [selectedDate, setSelectedDate] = useState<DayObj>({
		month: today.month,
		day: today.day,
		year: today.year,
	});
	const [queriedFilms, setQueriedFilms] = useState<Film[]>([]);
	const [loading, setLoading] = useState(false);

	function fetchFilmsData(term: string) {
		if (!term) {
			setQueriedFilms([]);
			return;
		}
		setLoading(true);
		searchOMDB(term)
			.then(async (films) => {
				return await Promise.all(
					films.map((film: Film) => {
						return fetchFilmOMDB(film);
					})
				);
			})
			.then((data) => setQueriedFilms(data))
			.finally(() => setLoading(false));
	}

	function generateFilmCards() {
		const cards = queriedFilms.map((film) => (
			<FilmCard film={film} addFilm={addFilm} key={`imdb-${film.imdbId}`} />
		));
		return cards;
	}

	function addFilm(film: Film) {
		addFilmToDB(film).then(() => addDateToDB(selectedDate, film));
	}

	const filmCards = loading ? <div>Loading...</div> : generateFilmCards();

	return (
		<div>
			<Calendar
				today={today}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
			/>
			<SearchBar fetchFilmsData={fetchFilmsData} />
			{loading ? (
				<div>Loading...</div>
			) : (
				<div className="flex flex-col items-center mt-10">{filmCards}</div>
			)}
		</div>
	);
}

export default App;
