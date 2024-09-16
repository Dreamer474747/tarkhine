import Image from "next/image";
import Link from "next/link";

import Header from "../components/Header";
import MenuItems from "../components/MenuItems";
import MenuLinkItems from "../components/MenuLinkItems";

import Footer from "m/footer/Footer";

import { EstedadBold, EstedadMedium } from "@/app/Fonts";

type PageParamsType = {
	params: { name: string }
}


export default function Page({ params }: PageParamsType) {
	
	
	return (
		<>
			<Header />
			
			<main className="rtl">
				
				<MenuLinkItems />
				
				<MenuItems
					title="پیتزاها"
				/>
				
			</main>
			
			<Footer isForUserP={false} />
		</>
	)
}