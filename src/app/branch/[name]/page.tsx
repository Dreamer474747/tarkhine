import Header from "m/header/Header";
import Main from "./comps/Main";
import Footer from "m/footer/Footer";

type PageParamsType = {
	params: { name: string }
}


export default function Page({ params }: PageParamsType) {
	
	
	return (
		<>
			<Header />
			
			<Main />
			
			<Footer hiddenInLowerWidth={false} />
		</>
	)
}