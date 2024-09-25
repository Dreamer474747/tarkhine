import { Header, Main } from "./comps";
import Footer from "m/footer/Footer";


export default function Page() {
	
	
	return (
		<>
			<Header />
			
			<Main />
			
			<Footer hiddenInLowerWidth={false} />
		</>
	)
}