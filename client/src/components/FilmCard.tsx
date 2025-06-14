import { useEffect, useState } from "react";

interface FilmCardProps {
	title: string;
	year: string;
	poster: string;
	imdbID: string;
}

interface Film {
	Director: string;
	Plot: string;
	Actors: string;
}

const FilmCard = ({ title, year, poster, imdbID }: FilmCardProps) => {
	const [film, setFilm] = useState<Film>();
	function fetchMoreInfo() {
		fetch(`http://www.omdbapi.com/?apikey=a3d6dd5a&i=${imdbID}`)
			.then((res) => res.json())
			.then((data) => {
				setFilm(data);
				console.log("card data", data);
			});
	}
	useEffect(() => {
		fetchMoreInfo();
	}, []);
	return (
		<div className="border-2 mb-10 p-5 rounded-4xl min-w-sm max-w-xl flex flex-col">
			<a
				href={`https://imdb.com/title/${imdbID}`}
				target="_blank"
				className="text-2xl hover:text-blue-500"
			>
				{title}
			</a>
			<span>{year}</span>

			<div className="flex text-left p-5">
				<img src={poster} className="max-w-30 self-center justify-self-start" />
				<div className="pl-10 text-justify">
					<div className="mb-5">
						Director: <span className="italic">{film?.Director}</span>
					</div>
					<div className="mb-5">
						Starring: <span className="italic">{film?.Actors}</span>
					</div>
					<div className="">{film?.Plot}</div>
				</div>
			</div>
			<img
				src="/src/assets/add.svg"
				className="m-2 p-3 max-w-15 hover:cursor-pointer hover:text-blue-300 self-end"
				alt="Image"
			/>
		</div>
	);
};

export default FilmCard;
