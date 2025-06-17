import type { DayObj, Film } from "../types";

export const addFilmToDB = (film: Film) =>
	fetch("http://localhost:8080/films/add", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(film),
	}).catch((err) => console.error("Error:", err));

export const addDateToDB = (date: DayObj, film: Film) =>
	fetch("http://localhost:8080/dates/add", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			date: `${date.year}-${date.month}-${date.day}`,
			imdbId: film.imdbId,
		}),
	}).catch((err) => console.error("Error:", err));

export const getFilmsDB = () =>
	fetch("http://localhost:8080/films", {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((res) => res.json())
		.catch((err) => console.error("Error:", err));
