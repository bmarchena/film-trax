const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY;

export const searchOMDB = (term: string) =>
	fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${term}&type=movie`)
		.then((res) => res.json())
		.then((data) => {
			return data.Search;
		});

export const fetchFilmOMDB = (queriedFilm: any) =>
	fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${queriedFilm.imdbID}`)
		.then((res) => res.json())
		.then((data) => ({
			title: data.Title,
			director: data.Director,
			year: data.Year,
			actors: data.Actors,
			plot: data.Plot,
			posterURL: data.Poster,
			type: data.Type,
			imdbId: data.imdbID,
			genre: data.Genre,
		}));
