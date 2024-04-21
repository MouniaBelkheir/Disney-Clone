import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import GlobalApi from "./services/GlobalApi";
import MovieCard from "./components/MovieCard";

const MovieList = ({ genreId }) => {
	const [movieList, setMovieList] = useState([]);
	useEffect(() => {
		getMovieByGenreId();
	}, []);
	const getMovieByGenreId = () => {
		GlobalApi.getMovieByGenreId(genreId).then((res) => {
			setMovieList(res.data.results);
		});
	};

	return (
		<div>
			{movieList.map((item, index) => (
				<div key={index}>
					<MovieCard movie={item} />
				</div>
			))}
		</div>
	);
};
{
	MovieList.propTypes = {
		genreId: PropTypes.number,
	};
}

export default MovieList;
