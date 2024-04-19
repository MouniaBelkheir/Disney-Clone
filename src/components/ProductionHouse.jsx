import disney from "/disney.png";
import marvel from "/marvel.png";
import national from "/national.png";
import pixar from "/pixar.png";
import starwars from "/starwars.png";
import disneyV from "/disney.mp4";
import marvelV from "/marvel.mp4";
import nationalV from "/national.mp4";
import pixarV from "/pixar.mp4";
import starwarsV from "/starwars.mp4";
const ProductionHouse = () => {
	const productionHouseList = [
		{
			id: 1,
			image: disney,
			video: disneyV,
			name: "disney",
		},
		{
			id: 2,
			image: pixar,
			video: pixarV,
			name: "pixar",
		},
		{
			id: 3,
			image: marvel,
			video: marvelV,
			name: "marvel",
		},
		{
			id: 4,
			image: starwars,
			video: starwarsV,
			name: "starwars",
		},
		{
			id: 5,

			image: national,
			video: nationalV,
			name: "national geographic",
		},
	];
	return (
		<div className="flex flex-col gap-8 p-6 md:flex-row">
			{productionHouseList.map((item, id) => (
				<div
					key={id}
					className="border-2 border-gray-600 rounded-lg hover:scale-110 duration-300 cursor-pointer  shadow-xl shadow-black
                ">
					<video
						src={item.video}
						autoPlay
						loop
						playsInline
						muted
						className="absolute z-0  top-0 rounded-lg
            opacity-0 hover:opacity-50"
					/>
					<img src={item.image} className="w-full z-[1] opacity-100" />
				</div>
			))}
		</div>
	);
};

export default ProductionHouse;
