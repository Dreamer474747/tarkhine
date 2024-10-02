"use client";
import { useState, useContext } from "react";

import { Button } from "ui/Button";

import { EstedadMedium } from "@/app/Fonts";

import { ProductsContext } from "@/components/contexts/ProductsProvider";
import type { ProductsContextType } from "u/types";

type Product = {
	src: string,
	alt: string,
	name: string,
	ingredients: string,
	price: number,
	discount: number,
	rate: number,
	productCode: string
}


export default function AddToBasketBtn({ src, alt, name, ingredients, price, discount, rate, productCode }: Product) {
	
	const [isButtonPressed, setIsButtonPressed] = useState(false);
	
	const { setCartLength } = useContext(ProductsContext) as ProductsContextType;
	
	const addProductToLocalStorage = () => {
		
		let cart = JSON.parse(localStorage.getItem("cart") || "[]");
		
		cart.push({ src, alt, name, ingredients, price, discount, rate, productCode, count: 1 });
		
		localStorage.setItem("cart", JSON.stringify(cart));
		
		setCartLength((prev: number) => prev + 1);
	}
	
	
	
	const addToBasket = () => {
		
		setIsButtonPressed(true);
		setTimeout(() => {
			
			setIsButtonPressed(false);
			
		}, 2000)
		
		let cart = JSON.parse(localStorage.getItem("cart") || "[]");
		
		if (cart.length > 0) {
			
			const isInCart = cart.some((product: Product) => product.name === name);
			
			if (isInCart) {
				cart.forEach((item: any) => {
					if (item.name === name) {
						item.count = item.count + 1
					}
				})
				
				localStorage.setItem("cart", JSON.stringify(cart));
				
			} else {
				
				addProductToLocalStorage();
			}
			
		} else {
			addProductToLocalStorage();
		}
	}
	
	
	
	return (
		
		<Button
			className={`w-[100px] sm:w-[140px] md:w-[244px] xl:w-[170px] xl--2xl:w-[244px]
			leading-[180%] ${EstedadMedium} text-[10px] sm:text-xs md:text-sm xl--2xl:text-base
			h-8 md:h-10 add-to-basket-btn`}
			disabled={isButtonPressed}
			onClick={addToBasket}
		>
			{ isButtonPressed ? "افزوده شد!" : "افزودن به سبد خرید" }
		</Button>
	)
}