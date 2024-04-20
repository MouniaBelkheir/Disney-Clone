import { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Sliders() {
	const [movieList, setMovieList] = useState([]);
	console.log(movieList);
	const sliderRef = useRef(null);

	useEffect(() => {
		getTrendingMovies();
		// Add event listeners for keyboard navigation
		window.addEventListener("keydown", handleKeyDown);
		return () => {
			// Cleanup: Remove event listeners
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	const getTrendingMovies = () => {
		GlobalApi.getTrendingVideos.then((resp) => {
			setMovieList(resp.data.results);
		});
	};

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
		arrows: false, // Hide arrows
		fade: true, // Enable fade effect for better full-screen experience
		cssEase: "linear", // Smoother fade transition
		autoplay: true, // Enable autoplay
		autoplaySpeed: 3000, // Set the autoplay speed in milliseconds
	};

	const nextSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickNext();
		}
	};

	const prevSlide = () => {
		if (sliderRef.current) {
			sliderRef.current.slickPrev();
		}
	};

	const handleKeyDown = (event) => {
		// Check if left arrow key is pressed
		if (event.keyCode === 37) {
			prevSlide();
		}
		// Check if right arrow key is pressed
		else if (event.keyCode === 39) {
			nextSlide();
		}
	};

	return (
		<div className="h-screen w-full relative ">
			<HiChevronLeft
				className="text-white text-3xl absolute my-auto h-full  z-50 cursor-pointer"
				onClick={prevSlide}
			/>
			<HiChevronRight
				className="text-white text-3xl absolute my-auto h-full  z-50 right-0 cursor-pointer"
				onClick={nextSlide}
			/>
			<Slider {...settings} ref={sliderRef}>
				{movieList.map((item, index) => (
					<div key={index} className="h-screen w-screen relative">
						<img
							src={IMAGE_BASE_URL + item.backdrop_path}
							alt={item.name || item.title}
							className="w-full h-screen object-cover object-center absolute"
						/>
						<div className="absolute flex flex-col bg-black/55 h-screen w-full">
							<h1 className="text-gray-200 text-2xl md:text-3xl lg:text-5xl font-bold mt-40 mx-16 sm:w-3/5  md:w-2/5">
								{item.name || item.title}
							</h1>
							<h2 className="text-gray-200 text-lg md:text-xl lg:text-2xl font-bold mt-6 mx-20">
								{item.release_date}
							</h2>
							<p className="text-gray-200 mx-16 mt-4  w-2/3 md:w-2/5 ">
								{item.overview}
							</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}

export default Sliders;
