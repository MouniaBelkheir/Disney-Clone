import PropTypes from "prop-types";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function MovieCard({ movie }) {
	return (
		<img
			src={IMAGE_BASE_URL + movie.poster_path}
			alt={movie.name || movie.title}
			className=" rounded-lg hover:border-2 border-gray-400 hover:scale-110 duration-300 m-4 cursor-pointer w-28 md:w-52"
		/>
	);
}
MovieCard.propTypes = {
	movie: PropTypes.any,
};
export default MovieCard;
