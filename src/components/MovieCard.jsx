
import PropTypes from "prop-types";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function MovieCard({ movie}) {
	return (
		<div>
			<img src={IMAGE_BASE_URL+ movie.
poster_path} alt="" />
		</div>
	);
}
MovieCard.propTypes = {
	movie: PropTypes.any,
};
export default MovieCard;
