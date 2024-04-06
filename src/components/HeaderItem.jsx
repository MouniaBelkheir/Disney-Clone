import PropTypes from "prop-types";
const HeaderItem = ({ name, Icon }) => {
	return (
		<div className="text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-4 ml-5">
			<Icon />
			<h2>{name}</h2>
		</div>
	);
};
HeaderItem.propTypes = {
	name: PropTypes.string,
	Icon: PropTypes.elementType,
};
export default HeaderItem;
