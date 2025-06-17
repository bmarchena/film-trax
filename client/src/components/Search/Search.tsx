import type { Film } from "../../types";
import FilmCard from "./FilmCard";
import SearchBar from "./SearchBar";

interface SearchBarProps {
	addFilmToDate: (film: Film) => void;
	fetchCardsData: (query: string) => void;
	searchResults: Film[];
	loading: boolean;
}

const Search = ({
	addFilmToDate,
	fetchCardsData,
	searchResults,
	loading,
}: SearchBarProps) => {
	const filmCards = loading ? (
		<div>Loading...</div>
	) : (
		searchResults?.map((film) => (
			<FilmCard
				addFilmToDate={addFilmToDate}
				film={film}
				key={`imdb-${film.imdbId}`}
			/>
		))
	);

	return (
		<div className="flex flex-col items-center">
			<SearchBar fetchCardsData={fetchCardsData} />
			<div className="mt-10">{filmCards}</div>
		</div>
	);
};

export default Search;
