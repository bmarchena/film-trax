import type { Film } from "../types";

interface FilmCardProps {
	film: Film;
	addFilm: (film: Film) => void;
}

const FilmCard = ({ film, addFilm }: FilmCardProps) => {
	return (
		<div className="border-2 mb-10 p-5 rounded-4xl xs:w-xs md:w-xl flex flex-col">
			<a
				href={`https://imdb.com/title/${film.imdbId}`}
				target="_blank"
				className="text-2xl hover:text-blue-500"
			>
				{film.title}
			</a>
			<span>{film.year}</span>

			<div className="flex text-left p-5">
				<img
					src={film.posterURL}
					className="max-w-30 self-center justify-self-start"
				/>
				<div className="pl-10 text-justify">
					<div className="mb-5">
						Director: <span className="italic">{film.director}</span>
					</div>
					<div className="mb-5">
						Starring: <span className="italic">{film.actors}</span>
					</div>
					<div className="hidden sm:block">{film.plot}</div>
				</div>
			</div>
			<img
				src="/src/assets/add.svg"
				className="m-2 p-3 max-w-15 hover:cursor-pointer hover:text-blue-300 self-end"
				onClick={() => addFilm(film)}
				alt="Image"
			/>
		</div>
	);
};

export default FilmCard;
