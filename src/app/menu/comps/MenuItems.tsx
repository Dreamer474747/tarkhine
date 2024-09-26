import Link from "next/link";

import MenuProductCard from "m/productCards/MenuProductCard";

import { EstedadBold } from "@/app/Fonts";

import { Product } from "u/types";

type MenuItemsParams = {
	title: string,
	products: Product[]
}


export default function MenuItems({ title, products }: MenuItemsParams) {
	
	
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
					products?.map((product, index) => (
						<MenuProductCard
							key={index}
							src={product.photo}
							alt={product.title}
							name={product.title}
							ingredients={product.description}
							price={+product.price}
							discount={product.discount}
							rate={product.rate}
						/>
					))
				}
			</div>
			
		</section>
	)
}