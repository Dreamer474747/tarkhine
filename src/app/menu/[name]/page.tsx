import Image from "next/image";
import Link from "next/link";

import Header from "../comps/Header";
import MenuItems from "../comps/MenuItems";
import MenuLinkItems from "../comps/MenuLinkItems";

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
			
			<Footer hiddenInLowerWidth={false} />
		</>
	)
}