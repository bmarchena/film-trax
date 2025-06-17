import "./App.css";
import { useEffect, useState } from "react";
import { Calendar } from "./components/Calendar/";
import FilmCard from "./components/Search/FilmCard";
import type { DayObj, Film } from "./types";
import { getTodayObj } from "./utils";
import { addDateToDB, addFilmToDB, fetchFilmOMDB, searchOMDB } from "./api";
import { getFilmsDB } from "./api/server";
import { Search } from "./components/Search";

function App() {
	const today = getTodayObj();
	const [selectedDate, setSelectedDate] = useState<DayObj>({
		month: today.month,
		day: today.day,
		year: today.year,
	});
	const [queriedFilms, setQueriedFilms] = useState<Film[]>([]);
	const [loading, setLoading] = useState(false);
	const [watchedFilmIds, setWatchedFilmIds] = useState<Film[]>([]);

	useEffect(() => {
		getFilmsDB()
			.then((data) => data.films.map((obj: Film) => obj.imdbId))
			.then((filmArray) => setWatchedFilmIds(filmArray));
	}, []);

	function fetchCardsData(term: string) {
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

	function addFilmToDate(film: Film) {
		addFilmToDB(film).then(() => addDateToDB(selectedDate, film));
	}

	return (
		<div>
			<Calendar
				today={today}
				selectedDate={selectedDate}
				setSelectedDate={setSelectedDate}
			/>
			<Search
				addFilmToDate={addFilmToDate}
				fetchCardsData={fetchCardsData}
				searchResults={queriedFilms}
				loading={loading}
			/>
		</div>
	);
}

export default App;
