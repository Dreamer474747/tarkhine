import { Main } from "./comps";

import Nav from "m/nav/Nav";
import Footer from "m/footer/Footer";


export default function Home() {
	
	
	return (
		<>
			<Nav />
			
			<Main />
			
			<Footer hiddenInLowerWidth={true} />
		</>
	);
}
