import Link from "next/link";

import MenuProductCard from "./MenuProductCard";

import { EstedadBold } from "@/app/Fonts";


export default function MenuItems({ title }: { title: string }) {
	
	
	return (
		<section className="mt-12 container">
			
			
			<h4
				className={`text-base sm:text-xl lg:text-2xl leading-[140%] ${EstedadBold} mb-5`}
			>
				{title}
			</h4>
			
			<div
				className="flex justify-between flex-wrap menu-cards"
			>
				{
					Array.from({ length: 4 }).map((product, index) => (
						<MenuProductCard
							key={index}
							src="/images/kashk.jpg"
							alt="kashk-e-baademjaan"
							name="کشک بادمجان"
							ingredients="برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز"
							price={180_000}
							discount={35}
							rate={5}
						/>
					))
				}
			</div>
			
		</section>
	)
}