interface FilmCardProps {
	title: string;
	year: string;
	poster: string;
	imdbID: string;
}

const FilmCard = ({ title, year, poster, imdbID }: FilmCardProps) => {
	return (
		<div className="border-2 mb-10 rounded-4xl min-w-xl max-w-2xl flex flex-col">
			<a
				href={`https://imdb.com/title/${imdbID}`}
				target="_blank"
				className="text-2xl"
			>
				{title}
			</a>
			<span>{year}</span>

			<img src={poster} className="max-w-30 self-center" />

			<img
				src="/src/assets/add.svg"
				className="m-2 p-3 max-w-15 hover:cursor-pointer hover:text-blue-300 self-end"
				alt="Image"
				// onError={}
			/>
		</div>
	);
};

export default FilmCard;
