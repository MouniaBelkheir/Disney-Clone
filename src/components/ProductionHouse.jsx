import marvel from "/marvel.png";
import national from "/national.png";
import pixar from "/pixar.png";
import starwars from "/starwars.png";
import marvelV from "/marvel.mp4";
import nationalV from "/national.mp4";
import pixarV from "/pixar.mp4";
import starwarsV from "/starwars.mp4";
const ProductionHouse = () => {
	const productionHouseList = [
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
		<div className="flex flex-col md:flex-row gap-8 p-8  ">
			{productionHouseList.map((item) => (
				<div key={item.id}
					className="border-[2px] border-gray-600
            rounded-lg hover:scale-110 transition-all duration-300
            ease-in-out relative shadow-xl 
            shadow-gray-800
            ">
					<video
						src={item.video}
						autoPlay
						loop
						playsInline
						muted
						width={"100%"}
						className="absolute z-0  top-0 rounded-md 
            opacity-0 hover:opacity-50 "
					/>
					<img src={item.image} className="w-full z-[1] opacity-100" />
				</div>
			))}
		</div>
	);
};

export default ProductionHouse;
