import MovieList from "../MovieList";
import { genre } from "./constant/GenresList";

const GenreMovieList = () => {
	// console.log(genre);
	return (
		<div>
			{genre.map((item, index) => index<=4 && (
				<div key={index} className="m-4 mx-2 md:mx-2">
					<h2 className="text-white font-bold text-xl p-2">{item.name}</h2>
					<MovieList genreId={item.id} />
				</div>
			))}
		</div>
	);
};

export default GenreMovieList;
