import logo from "../assets/images/disney-logo.svg";
import HeaderItem from "./HeaderItem";
import {
	HiHome,
	HiMagnifyingGlass,
	HiStar,
	HiPlayCircle,
	HiTv,
} from "react-icons/hi2";

import { HiPlus, HiDotsVertical } from "react-icons/hi";
const Header = () => {
	const menu = [
		{
			id: 1,
			name: "HOME",
			icon: HiHome,
		},
		{
			id: 2,
			name: "SEARCH",
			icon: HiMagnifyingGlass,
		},
		{
			id: 3,
			name: "WATCHLIST",
			icon: HiPlus,
		},
		{
			id: 4,
			name: "ORIGINALS",
			icon: HiStar,
		},
		{
			id: 5,
			name: "MOVIES",
			icon: HiPlayCircle,
		},
		{
			id: 6,
			name: "SERIES",
			icon: HiTv,
		},
	];
	return (
		<div className="flex items-center justify-between px-5 py-1">
			<div className="flex gap-10 items-center">

			<img
				src={logo}
				alt="Disney Logo"
				className="w-[80px] md:w-[115Px] object-cover"
				/>
			{menu.map((item) => (
				<HeaderItem
				key={item.id}
				name={item.name}
				Icon={item.icon}
				/>
			))}
			</div>
			<img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" alt="user" className="w-[40px] rounded-full" />
		</div>
	);
};

export default Header;
