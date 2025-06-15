import type { Film } from "../types";

export const searchOMDB = (term: string) =>
	fetch(`http://www.omdbapi.com/?apikey=a3d6dd5a&s=${term}&type=movie`)
		.then((res) => res.json())
		.then((data) => {
			return data.Search;
		});

export const fetchFilmOMDB = (film: Film) =>
	fetch(`http://www.omdbapi.com/?apikey=a3d6dd5a&i=${film.imdbID}`)
		.then((res) => res.json())
		.then((data) => ({
			title: data.Title,
			director: data.Director,
			year: data.Year,
			actors: data.Actors,
			plot: data.Plot,
			posterURL: data.Poster,
			type: data.Type,
			imdbID: data.imdbID,
			genre: data.Genre,
		}));
