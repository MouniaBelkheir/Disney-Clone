import { useEffect, useState, useRef } from "react";
import GlobalApi from "../services/GlobalApi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Sliders() {
  const [movieList, setMovieList] = useState([]);
  // console.log(movieList)
    const sliderRef = useRef(null);

    useEffect(() => {
        getTrendingMovies();
        // Add event listeners for keyboard navigation
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            // Cleanup: Remove event listeners
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, );

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
        <div>
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
                            className="w-screen h-screen object-cover absolute"
                        />
                        <div className="absolute flex flex-col bg-black/55 h-screen">
                            <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold my-16 mx-16 w-2/5">
                                {item.name || item.title}
                            </h1>
                            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold my-16 mx-20">
                                {item.release_date}
                            </h2>
                            <p className="text-white text-xl md:text-2xl lg:text-3xl mx-20 w-1/3 text-justify">
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
