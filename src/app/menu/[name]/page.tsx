"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useContext } from "react";

import { ServicesContext } from "@/components/contexts/ServicesProvider";
import type { ServicesContextType } from "u/types";

import { ProductsContext } from "@/components/contexts/ProductsProvider";
import type { ProductsContextType, Product } from "u/types";

import Header from "../comps/Header";
import MenuItems from "../comps/MenuItems";
import MenuLinkItems from "../comps/MenuLinkItems";

import Footer from "m/footer/Footer";

import { EstedadBold, EstedadMedium } from "@/app/Fonts";

type PageParamsType = {
	params: { name: string }
}


export default function Page({ params }: PageParamsType) {
	
	const pathname = usePathname();
	const { products } = useContext(ProductsContext) as ProductsContextType;
	
	const { isPending } = useContext(ServicesContext) as ServicesContextType;
	
	let menuTitle = "";
	let allProducts: Product[] = [];
	
	if (pathname === "/menu/main-dish") {
		allProducts = products.filter((product: Product) => product.food_category.title === "غذای اصلی")
		menuTitle = "غذاهای اصلی"
		
	} else if (pathname === "/menu/appetizer") {
		allProducts = products.filter((product: Product) => product.food_category.title === "پیش غذا")
		menuTitle = "پیش غذاها"
	} else if (pathname === "/menu/dessert") {
		allProducts = products.filter((product: Product) => product.food_category.title === "دسر")
		menuTitle = "دسرها"
	} else if (pathname === "/menu/drink") {
		allProducts = products.filter((product: Product) => product.food_category.title === "نوشیدنی")
		menuTitle = "نوشیدنیها"
	}
	
	
	
	return (
		<>
			<Header />
			
			<main className="rtl">
				
				<MenuLinkItems />
				
				{
					isPending ? (
						<div className={`text-center ${EstedadBold} my-10`} >
							در حال دریافت اطلاعات...
						</div>
					) : (
						<MenuItems
							title={menuTitle}
							products={allProducts}
						/>
					)
				}
				
			</main>
			
			<Footer hiddenInLowerWidth={false} />
		</>
	)
}