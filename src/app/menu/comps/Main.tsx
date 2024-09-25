"use client";
import Link from "next/link";

import { useContext, useState, useMemo, useEffect } from "react";

import { ProductsContext } from "@/components/contexts/ProductsProvider";
import type { ProductsContextType, Product } from "u/types";

import {
MenuLinkItems,
FilterOptions,
SearchInput,
MenuProductCard,
MenuItems
} from ".";

import { EstedadBold, EstedadMedium } from "@/app/Fonts";


export default function Main() {
	
	const { products, iranianProducts, nonIranianProducts } = useContext(ProductsContext) as ProductsContextType;
	
	const pizzas = useMemo(() => products?.filter((food) => food.food_subcategory.title === "پیتزا ها"), [products]);
	const sandwiches = useMemo(() => products?.filter((food) => food.food_subcategory.title === "ساندویچ ها"), [products]);
	
	const bestSellers = useMemo(() => products?.filter((food: Product) => food.discount), [products]);
	const mostEconomical = useMemo(() => products?.sort((a: Product, b: Product) => +a.price - +b.price), [products]);
	
	
	const [isIranianFood, setIsIranianFood] = useState(false);
	const [isNonIranianFood, setIsNonIranianFood] = useState(false);
	const [isPizza, setIsPizza] = useState(false);
	const [isSandwich, setIsSandwich] = useState(false);
	const [isBestSeller, setIsBestSeller] = useState(false);
	const [isMostEconomical, setIsMostEconomical] = useState(false);
	
	const [isAFilterSelected, setIsAFilterSelected] = useState(false);
	
	useEffect(() => {
		
		if (isIranianFood || isNonIranianFood || isPizza || isSandwich || isBestSeller || isMostEconomical) {
			setIsAFilterSelected(true);
		} else {
			setIsAFilterSelected(false);
		}
		
	}, [isIranianFood, isNonIranianFood, isPizza, isSandwich, isBestSeller, isMostEconomical])
	
	
	const findSelectedFilterTitle = () => {
		
		if (isIranianFood) {
			return "غذاهای ایرانی";
			
		} else if(isNonIranianFood) {
			return "غذا های غیر ایرانی";
			
		} else if(isPizza) {
			return "پیتزاها";
			
		} else if(isSandwich) {
			return "ساندویچ‌ها";
			
		} else if(isBestSeller) {
			return "پرفروش‌ترین";
			
		} else if(isMostEconomical) {
			return "اقتصادی‌ترین";
		}
	}
	
	
	let firstSectionArray: Product[] = [];
	
	if (isIranianFood) {
		firstSectionArray = iranianProducts;
		
	} else if(isNonIranianFood) {
		firstSectionArray = nonIranianProducts;
		
	} else if(isPizza) {
		firstSectionArray = pizzas;
		
	} else if(isSandwich) {
		firstSectionArray = sandwiches;
		
	} else if(isBestSeller) {
		firstSectionArray = bestSellers;
		
	} else if(isMostEconomical) {
		firstSectionArray = mostEconomical;
	}
	
	
	
	return (
		<main className="rtl">
			
			<MenuLinkItems />
			
			<div className="mt-2 flex flex-col md:flex-row justify-between items-center mb-2">
				
				<FilterOptions
					isIranianFood={isIranianFood}
					setIsIranianFood={setIsIranianFood}
					isNonIranianFood={isNonIranianFood}
					setIsNonIranianFood={setIsNonIranianFood}
					isPizza={isPizza}
					setIsPizza={setIsPizza}
					isSandwich={isSandwich}
					setIsSandwich={setIsSandwich}
					isBestSeller={isBestSeller}
					setIsBestSeller={setIsBestSeller}
					isMostEconomical={isMostEconomical}
					setIsMostEconomical={setIsMostEconomical}
				/>
				
				<SearchInput />
				
			</div>
			
			<section className="mt-12 container">
				
				<div className="flex justify-between items-center mb-5">
					<h4
						className={`text-base sm:text-xl lg:text-2xl leading-[140%] ${EstedadBold}`}
					>
						{
							isAFilterSelected ? findSelectedFilterTitle() : "غذاهای ایرانی"
						}
					</h4>
					
					<Link
						href="/basket"
						className={`flex justify-items rounded text-primary w-[95px] sm:w-[184px]
						h-8 sm:h-10 border border-primary leading-[180%] ${EstedadMedium}
						text-xs sm:text-base`}
					>
						<svg className="ml-1 w-4 sm:w-6 h-4 sm:h-6" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M18.69 17.75H8.03999C7.04999 17.75 6.09999 17.33 5.42999 16.6C4.75999 15.87 4.42 14.89 4.5 13.9L5.33 3.94C5.36 3.63 5.24999 3.33001 5.03999 3.10001C4.82999 2.87001 4.54 2.75 4.23 2.75H2.5C2.09 2.75 1.75 2.41 1.75 2C1.75 1.59 2.09 1.25 2.5 1.25H4.24001C4.97001 1.25 5.65999 1.56 6.14999 2.09C6.41999 2.39 6.62 2.74 6.73 3.13H19.22C20.23 3.13 21.16 3.53 21.84 4.25C22.51 4.98 22.85 5.93 22.77 6.94L22.23 14.44C22.12 16.27 20.52 17.75 18.69 17.75ZM6.78 4.62L6 14.02C5.95 14.6 6.14 15.15 6.53 15.58C6.92 16.01 7.45999 16.24 8.03999 16.24H18.69C19.73 16.24 20.67 15.36 20.75 14.32L21.29 6.82001C21.33 6.23001 21.14 5.67001 20.75 5.26001C20.36 4.84001 19.82 4.60999 19.23 4.60999H6.78V4.62Z" fill="#417F56"/>
							<path d="M16.75 22.75C15.65 22.75 14.75 21.85 14.75 20.75C14.75 19.65 15.65 18.75 16.75 18.75C17.85 18.75 18.75 19.65 18.75 20.75C18.75 21.85 17.85 22.75 16.75 22.75ZM16.75 20.25C16.47 20.25 16.25 20.47 16.25 20.75C16.25 21.03 16.47 21.25 16.75 21.25C17.03 21.25 17.25 21.03 17.25 20.75C17.25 20.47 17.03 20.25 16.75 20.25Z" fill="#417F56"/>
							<path d="M8.75 22.75C7.65 22.75 6.75 21.85 6.75 20.75C6.75 19.65 7.65 18.75 8.75 18.75C9.85 18.75 10.75 19.65 10.75 20.75C10.75 21.85 9.85 22.75 8.75 22.75ZM8.75 20.25C8.47 20.25 8.25 20.47 8.25 20.75C8.25 21.03 8.47 21.25 8.75 21.25C9.03 21.25 9.25 21.03 9.25 20.75C9.25 20.47 9.03 20.25 8.75 20.25Z" fill="#417F56"/>
							<path d="M21.5 8.75H9.5C9.09 8.75 8.75 8.41 8.75 8C8.75 7.59 9.09 7.25 9.5 7.25H21.5C21.91 7.25 22.25 7.59 22.25 8C22.25 8.41 21.91 8.75 21.5 8.75Z" fill="#417F56"/>
						</svg>
						تکمیل خرید
					</Link>
				</div>
				
				<div
					className="flex justify-between flex-wrap menu-cards"
				>
					{
						isAFilterSelected ? (
							firstSectionArray?.map((product, index) => (
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
							
						) : (
							iranianProducts.map((product, index) => (
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
						)
						
					}
				</div>
				
			</section>
			
			{
				isAFilterSelected ? isNonIranianFood && firstSectionArray !== nonIranianProducts && (
					<MenuItems
						title="غذا های غیر ایرانی"
						products={nonIranianProducts}
					/>
				) : (
					<MenuItems
						title="غذا های غیر ایرانی"
						products={nonIranianProducts}
					/>
				)
			}
			
			{
				isAFilterSelected ? isPizza && firstSectionArray !== pizzas && (
					<MenuItems
						title="پیتزاها"
						products={pizzas}
					/>
				) : (
					<MenuItems
						title="پیتزاها"
						products={pizzas}
					/>
				)
			}
			
			{
				isAFilterSelected ? isSandwich && firstSectionArray !== sandwiches && (
					<MenuItems
						title="ساندویچ‌ها"
						products={sandwiches}
					/>
				) : (
					<MenuItems
						title="ساندویچ‌ها"
						products={sandwiches}
					/>
				)
			}
			
			{
				isAFilterSelected ? isBestSeller && firstSectionArray !== bestSellers && (
					<MenuItems
						title="پرفروش‌ترین"
						products={bestSellers}
					/>
				) : (
					<MenuItems
						title="پرفروش‌ترین"
						products={bestSellers}
					/>
				)
			}
			
			{
				isAFilterSelected ? isMostEconomical && firstSectionArray !== mostEconomical && (
					<MenuItems
						title="اقتصادی‌ترین"
						products={mostEconomical.slice(0, 8)}
					/>
				) : (
					<MenuItems
						title="اقتصادی‌ترین"
						products={mostEconomical.slice(0, 8)}
					/>
				)
			}
			
		</main>
	)
}