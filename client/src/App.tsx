import "./App.css";
import { useEffect, useState } from "react";
import { Calendar } from "./components/Calendar";
import { Search } from "./components/Search";
import * as api from "./api";
import type { DayObj, Film } from "./types";

function App() {
	// TODO: ADD SOME KIND OF UI RESPONSE ON SUCCESSFUL AND ERRORED API CALLS
	const [selectedDate, setSelectedDate] = useState<DayObj>({
		month: 0,
		day: 0,
		year: 0,
	});
	const [queriedFilms, setQueriedFilms] = useState<Film[]>([]);
	const [loading, setLoading] = useState(false);
	const [filmIdsDB, setFilmIdsDB] = useState<string[]>([]);

	useEffect(() => {
		api
			.getFilmsDB()
			.then((data) => data.films.map((obj: Film) => obj.imdbId))
			.then((filmArray) => setFilmIdsDB(filmArray));
		api.getDatesDB().then((data) => console.table(data.dates));
	}, []);

	function fetchCardsData(term: string) {
		if (!term) {
			setQueriedFilms([]);
			return;
		}
		setLoading(true);
		api
			.searchOMDB(term)
			.then(async (films) => {
				return await Promise.all(
					films.map((film: Film) => {
						return api.fetchFilmOMDB(film);
					}),
				);
			})
			.then((data) => setQueriedFilms(data))
			.finally(() => setLoading(false));
	}

	function addFilmToDate(film: Film) {
		if (filmIdsDB.includes(film.imdbId)) {
			api.addDateToDB(selectedDate, film);
			return;
		}
		api.addFilmToDB(film).then(() => {
			setFilmIdsDB((prev) => [...prev, film.imdbId]);
			api.addDateToDB(selectedDate, film);
		});
	}

	return (
		<div>
			<Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
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
