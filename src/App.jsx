import Header from "./components/Header"
import Sliders from "./components/Slider";
function App() {
	return (
		<div className="h-full w-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
			<Header />
			<Sliders />
		</div>
	);
}

export default App
