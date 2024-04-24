import PropTypes from "prop-types";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const LargeMovieCard = ({ movie }) => {
	return (
		<section className="hover:scale-110 duration-300 cursor-pointer w-60 md:w-72 m-3">
			<img
				src={IMAGE_BASE_URL + movie.backdrop_path}
				alt={movie.name || movie.title}
				className=" rounded-lg hover:border-2 border-gray-400"
			/>
			<h2 className=" w-60 md:w-72 font-semibold text-gray-200">{movie.name || movie.title}</h2>
		</section>
	);
};
LargeMovieCard.propTypes = {
	movie: PropTypes.any,
};

export default LargeMovieCard;
