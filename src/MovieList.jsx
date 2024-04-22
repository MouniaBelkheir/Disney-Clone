import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import GlobalApi from "./services/GlobalApi";
import MovieCard from "./components/MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const MovieList = ({ genreId }) => {
	const [movieList, setMovieList] = useState([]);
	const elementRef = useRef(null);
	useEffect(() => {
		getMovieByGenreId();
	}, []);
	const getMovieByGenreId = () => {
		GlobalApi.getMovieByGenreId(genreId).then((res) => {
			setMovieList(res.data.results);
		});
	};
	const slideRight = (element) => {
		element.scrollLeft += 500;
	};
	const slideLeft = (element) => {
		element.scrollLeft -= 500;
	};

	return (
		<div className="relative">
			<IoChevronBackOutline
				onClick={() => slideLeft(elementRef.current)}
				className="text-white text-3xl font-bold cursor-pointer z-10 absolute hidden md:block -left-2 top-[45%] ml-0"
			/>
			<div
				ref={elementRef}
				className="flex gap-2 overflow-x-auto no-scrollbar mx-4">
				{movieList.map((item, index) => (
					<MovieCard key={index} movie={item} />
				))}
			</div>
			<IoChevronForwardOutline
				onClick={() => slideRight(elementRef.current)}
				className="text-white text-3xl font-bold cursor-pointer z-10 absolute hidden md:block -right-2 top-[45%] ml-4"
			/>
		</div>
	);
};
{
	MovieList.propTypes = {
		genreId: PropTypes.number,
	};
}

export default MovieList;
