import Menu from "./Menu";
import AboutUs from "./AboutUs";
import Branches from "./Branches";
import SearchInput from "m/SearchInput";

import { EstedadBold } from "@/app/Fonts";


const Main = () => {
	
	return (
		
		<main>
			
			<SearchInput />
			
			<h3
				className={`text-center text-2xl mt-4 mb-36 ${EstedadBold}
				text-text`}
			>
				منوی رستوران
			</h3>
			<Menu />
			<AboutUs />
			
			<h3
				className={`text-center text-2xl mt-16 ${EstedadBold}
				text-text`}
			>
				ترخینه گردی
			</h3>
			<Branches />
			
		</main>
	)
}

export default Main;