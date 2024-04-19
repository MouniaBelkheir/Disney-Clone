import { useEffect, useState } from "react";
import GlobalApi from "../services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function Slider() {
	const [movieList, setMovieList] = useState([]);
	useEffect(() => {
		getTrendingMovies();
	}, []);
	const getTrendingMovies = () => {
		GlobalApi.getTrendingVideos.then((resp) => {
			// console.log(resp.data.results);
			setMovieList(resp.data.results);
		});
	};
	return (
		<div className="flex h-full ">
			{movieList.map((item, index) => (
				<img
					src={IMAGE_BASE_URL + item.backdrop_path}
					key={index}
					className="min-w-full object-cover  "
					alt={item.original_title || item.name}
				/>
			))}
		</div>
	);
}
export default Slider;
