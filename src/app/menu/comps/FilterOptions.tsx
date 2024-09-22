"use client";
import { useState } from "react";

import FilterOption from "./FilterOption";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext2,
  CarouselPrevious
} from "ui/Carousel";


export default function FilterOptions() {
	
	const [isIranianFood, setIsIranianFood] = useState(false);
	const [isNotIranianFood, setIsNotIranianFood] = useState(false);
	const [isPizza, setIsPizza] = useState(false);
	const [isSandwich, setIsSandwich] = useState(false);
	const [bestSeller, setBestSeller] = useState(false);
	const [mostEconomical, setMostEconomical] = useState(false);
	
	
	return (
		<Carousel
			opts={{
				dragFree: true,
				direction: "rtl"
			}}
			className="md:w-[65%] lg--xl:w-full container pl-0 ml-0 "
		>
			<CarouselContent className="flex items-center -ml-5 ml-3">
				
				<FilterOption
					text="غذاهای ایرانی"
					state={isIranianFood}
					setState={setIsIranianFood}
				/>
				<FilterOption
					text="غذاهای غیر ایرانی"
					state={isNotIranianFood}
					setState={setIsNotIranianFood}
				/>
				<FilterOption
					text="پیتزاها"
					state={isPizza}
					setState={setIsPizza}
				/>
				<FilterOption
					text="ساندویچ‌ها"
					state={isSandwich}
					setState={setIsSandwich}
				/>
				<FilterOption
					text="پرفروش‌ترین"
					state={bestSeller}
					setState={setBestSeller}
				/>
				<FilterOption
					text="اقتصادی‌ترین"
					state={mostEconomical}
					setState={setMostEconomical}
				/>
				
			</CarouselContent>
			
		</Carousel>
	)
}