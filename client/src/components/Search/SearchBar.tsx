import { useState } from "react";

interface SearchBarProps {
	fetchCardsData: (query: string) => void;
}

const SearchBar = ({ fetchCardsData }: SearchBarProps) => {
	const [query, setQuery] = useState("");

	return (
		<form className="flex flex-col" action={() => fetchCardsData(query)}>
			<input
				className="border-2 rounded-2xl mt-5 p-2"
				type="text"
				name="search"
				placeholder="Enter a film..."
				autoComplete="off"
				onChange={(e) => setQuery(e.target.value)}
				value={query}
			/>
			<div className="pt-2">
				<button
					type="submit"
					className="border-2 rounded-2xl ml-1 p-2 hover:cursor-pointer max-w-20"
				>
					Submit
				</button>
				<button
					type="submit"
					className="border-2 rounded-2xl ml-1 p-2 hover:cursor-pointer max-w-20"
					onClick={() => setQuery("")}
				>
					Clear
				</button>
			</div>
		</form>
	);
};

export default SearchBar;
