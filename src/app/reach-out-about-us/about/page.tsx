import Image from "next/image";

import AboutUs from "./components/AboutUs";
import Features from "./components/Features";

import Footer from "m/footer/Footer";
import Nav from "m/nav/Nav";

import { EstedadBold } from "@/app/Fonts";


export default function Page() {
	
	
	return (
		<>
			<header className="rtl">
				<Nav />
				
				<div
					id="about-us-header"
					className={`h-[336px] text-xl sm:text-2xl lg:text-3xl text-[#e5f2e9]
					text-center ${EstedadBold} flex justify-items`}
				>
					<h1>
						درباره ترخینه بیشتر بدانید!
					</h1>
				</div>
			</header>
			
			<main className="rtl">
				
				<AboutUs />
				
				<Features />
				
			</main>
			
			<Footer isForUserP={false} />
		</>
	)
}