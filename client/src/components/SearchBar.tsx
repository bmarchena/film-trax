import { useState } from "react";

const SearchBar = () => {
	const [query, setQuery] = useState("");

	function fetchFilm(term: string) {
		fetch(`http://www.omdbapi.com/?apikey=a3d6dd5a&t=${term}`)
			.then((res) => res.json())
			.then((data) => console.log(data));
	}

	return (
		<form action={() => fetchFilm(query)}>
			<input
				className="border-2 rounded-2xl mt-5 p-2"
				type="text"
				name="search"
				placeholder="Enter a film..."
				autoComplete="off"
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default SearchBar;
