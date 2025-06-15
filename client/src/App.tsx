import { useState } from "react";
import Calendar from "./components/Calendar";
import SearchBar from "./components/SearchBar";
import FilmCard from "./components/FilmCard";
import type { DayObj, Film } from "./types";
import { getTodayObj } from "./utils";
import "./App.css";

function App() {
	const today = getTodayObj();
	const [selectedDate, setSelectedDate] = useState<DayObj>({
		month: today.month,
		day: today.day,
		year: today.year,
	});
	const [queriedFilms, setQueriedFilms] = useState<Film[]>([]);

	function fetchFilmsData(term: string) {
		if (!term) return;
		fetch(`http://www.omdbapi.com/?apikey=a3d6dd5a&s=${term}&type=movie`)
			.then((res) => res.json())
			.then((data) => {
				return data.Search;
			})
			.then(async (films) => {
				return await Promise.all(
					films.map((film: Film) => {
						return fetch(
							`http://www.omdbapi.com/?apikey=a3d6dd5a&i=${film.imdbID}`
						)
							.then((res) => res.json())
							.then((data) => ({
								Title: data.Title,
								Director: data.Director,
								Year: data.Year,
								Actors: data.Actors,
								Plot: data.Plot,
								Poster: data.Poster,
								Type: data.Type,
								imdbID: data.imdbID,
							}));
					})
				);
			})
			.then((data) => setQueriedFilms(data));
	}

	function generateFilmCards() {
		const cards = queriedFilms.map((film) => (
			<FilmCard film={film} key={`imdb-${film.imdbID}`} />
		));
		return cards;
	}

	const filmCards = generateFilmCards();

	return (
		<div>
			<Calendar
				today={today}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
			/>
			<SearchBar fetchFilmsData={fetchFilmsData} />
			<div className="flex flex-col items-center mt-10">{filmCards}</div>
		</div>
	);
}

export default App;
