import MovieList from "../MovieList";
import { genre } from "./constant/GenresList";

const GenreMovieList = () => {
	// console.log(genre);
	return (
		<div>
			{genre.map((item, index) => index<=4 && (
				<div key={index} className="p-8 px-8 md:px-16">
					<h2 className="text-white font-bold text-xl">{item.name}</h2>
					<MovieList genreId={item.id} />
				</div>
			))}
		</div>
	);
};

export default GenreMovieList;
