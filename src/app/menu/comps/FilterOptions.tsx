"use client";
import { Dispatch, SetStateAction } from "react";

import FilterOption from "./FilterOption";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext2,
  CarouselPrevious
} from "ui/Carousel";

type FilterOptionsParams = {
	isIranianFood: boolean,
	setIsIranianFood: Dispatch<SetStateAction<boolean>>,
	isNonIranianFood: boolean,
	setIsNonIranianFood: Dispatch<SetStateAction<boolean>>,
	isPizza: boolean,
	setIsPizza: Dispatch<SetStateAction<boolean>>,
	isSandwich: boolean,
	setIsSandwich: Dispatch<SetStateAction<boolean>>,
	isBestSeller: boolean,
	setIsBestSeller: Dispatch<SetStateAction<boolean>>,
	isMostEconomical: boolean,
	setIsMostEconomical: Dispatch<SetStateAction<boolean>>,
}


export default function FilterOptions({ isIranianFood, setIsIranianFood, isNonIranianFood, setIsNonIranianFood, isPizza, setIsPizza,
isSandwich, setIsSandwich, isBestSeller, setIsBestSeller, isMostEconomical, setIsMostEconomical }: FilterOptionsParams) {
	
	
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
					state={isNonIranianFood}
					setState={setIsNonIranianFood}
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
					state={isBestSeller}
					setState={setIsBestSeller}
				/>
				<FilterOption
					text="اقتصادی‌ترین"
					state={isMostEconomical}
					setState={setIsMostEconomical}
				/>
				
			</CarouselContent>
			
		</Carousel>
	)
}