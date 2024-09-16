import Image from "next/image";

import Header from "m/header/Header";
import Main from "./components/Main";
import Footer from "m/footer/Footer";

export default function Home() {
	return (
		<>
			<Header />
			<Main />
			<Footer isForUserP={false} />
		</>
	);
}
