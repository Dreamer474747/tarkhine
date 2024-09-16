import Image from "next/image";

import Footer from "m/footer/Footer";
import Nav from "m/nav/Nav";
import GuidelinesAndProtectionsLinks
from "m/guidelines-and-protections-links/GuidelinesAndProtectionsLinks";
import QuestionsAndAnswers from "./components/QuestionsAndAnswers";

import { EstedadBold } from "@/app/Fonts";



export default function Page() {
	
	
	
	return (
		<>
			<header className="rtl">
				<Nav />
				
				<div
					id="rules-header"
					className={`h-[336px] text-xl sm:text-2xl lg:text-3xl text-[#e5f2e9]
					text-center ${EstedadBold} flex justify-items`}
				>
					<h1>
						قوانین ترخینه
					</h1>
				</div>
			</header>
			
			<main>
				<GuidelinesAndProtectionsLinks />
				
				<QuestionsAndAnswers />
				
			</main>
			
			<Footer isForUserP={false} />
		</>
	)
}
