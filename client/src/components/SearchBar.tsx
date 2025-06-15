import { useState } from "react";

interface SearchBarProps {
	fetchFilmsData: (query: string) => void;
}

const SearchBar = ({ fetchFilmsData }: SearchBarProps) => {
	const [query, setQuery] = useState("");

	return (
		<form action={() => fetchFilmsData(query)}>
			<input
				className="border-2 rounded-2xl mt-5 p-2"
				type="text"
				name="search"
				placeholder="Enter a film..."
				autoComplete="off"
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button
				type="submit"
				className="border-2 rounded-2xl ml-1 p-2 hover:cursor-pointer"
			>
				Submit
			</button>
		</form>
	);
};

export default SearchBar;
