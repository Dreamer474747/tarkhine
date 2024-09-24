"use client";
import { usePathname } from "next/navigation";

import { useState, useEffect, useContext } from "react";

import FoodCarousel from "./FoodCarousel";
import { EstedadBold } from "@/app/Fonts";

import { ProductsContext } from "@/components/contexts/ProductsProvider";
import type { ProductsContextType } from "u/types";


export default function FoodSections() {
	
	const { products, nonIranianProducts } = useContext(ProductsContext) as ProductsContextType;
	
	const pathname = usePathname();
	
	const getBranchNumber = () => {
		switch(pathname) {
			case "/branch/okbaataan":
				return 1;
				break;
			case "/branch/chaaloos":
				return 5;
				break;
			case "/branch/aqdasie":
				return 10;
				break;
			default:
				return 15;
		}
	}
	
	
	return (
		<>
			<section className="pb-8 lg:py-12">
				<h4
					className={`text-base sm:text-xl lg:text-2xl leading-[140%] ${EstedadBold}
					mb-5 container`}
				>
					پیشنهاد ویژه
				</h4>
				
				<FoodCarousel products={products.slice(getBranchNumber(), getBranchNumber() + 5)} isSpecial={false} />
				
			</section>
			
			<section className="pt-6 pb-6 lg:pb-10 bg-[#315F41]">
				<h4
					className={`text-base sm:text-xl lg:text-2xl leading-[140%] ${EstedadBold}
					mb-5 container text-white`}
				>
					غذاهای محبوب
				</h4>
				
				<FoodCarousel products={products.slice(5, 10)} isSpecial={true} />
				
			</section>
			
			<section className="py-8 lg:py-12">
				<h4
					className={`text-base sm:text-xl lg:text-2xl leading-[140%] ${EstedadBold}
					mb-5 container`}
				>
					غذاهای غیر ایرانی
				</h4>
				
				<FoodCarousel products={nonIranianProducts.slice(0, 5)} isSpecial={false} />
				
			</section>
		</>
	)
}