import { useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import SearchBar from "./components/SearchBar";
import FilmCard from "./components/FilmCard";

function App() {
	interface film {
		Title: string;
		Poster: string;
		Type: string;
		Year: string;
		imdbID: string;
	}
	const [queriedFilms, setQueriedFilms] = useState<film[]>([]);
	function fetchFilm(term: string) {
		fetch(`http://www.omdbapi.com/?apikey=a3d6dd5a&s=${term}&type=movie`)
			.then((res) => res.json())
			.then((data) => {
				console.log(data.Search);
				setQueriedFilms(data.Search);
			});
	}
	function generateFilmCards() {
		const cards = queriedFilms.map((film) => (
			<FilmCard
				title={film.Title}
				poster={film.Poster}
				year={film.Year}
				imdbID={film.imdbID}
				key={`imdb-${film.imdbID}`}
			/>
		));
		return cards;
	}
	return (
		<div>
			<Calendar />
			<SearchBar fetchFilm={fetchFilm} />
			<div className="flex flex-col items-center mt-10">
				{generateFilmCards()}
			</div>
		</div>
	);
}

export default App;
