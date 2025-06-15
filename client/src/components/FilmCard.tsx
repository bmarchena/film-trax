import type { Film } from "../types";

interface FilmCardProps {
	film: Film;
}

const FilmCard = ({ film }: FilmCardProps) => {
	function handleAdd() {
		console.log(film);
	}

	return (
		<div className="border-2 mb-10 p-5 rounded-4xl w-xl flex flex-col">
			<a
				href={`https://imdb.com/title/${film.imdbID}`}
				target="_blank"
				className="text-2xl hover:text-blue-500"
			>
				{film.Title}
			</a>
			<span>{film.Year}</span>

			<div className="flex text-left p-5">
				<img
					src={film.Poster}
					className="max-w-30 self-center justify-self-start"
				/>
				<div className="pl-10 text-justify">
					<div className="mb-5">
						Director: <span className="italic">{film.Director}</span>
					</div>
					<div className="mb-5">
						Starring: <span className="italic">{film.Actors}</span>
					</div>
					<div className="">{film.Plot}</div>
				</div>
			</div>
			<img
				src="/src/assets/add.svg"
				className="m-2 p-3 max-w-15 hover:cursor-pointer hover:text-blue-300 self-end"
				onClick={handleAdd}
				alt="Image"
			/>
		</div>
	);
};

export default FilmCard;
