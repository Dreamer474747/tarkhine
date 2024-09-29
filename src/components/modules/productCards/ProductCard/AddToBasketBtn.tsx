"use client";
import { useState } from "react";

import { Button } from "ui/Button";

import { EstedadMedium } from "@/app/Fonts";

type Product = {
	src: string,
	alt: string,
	name: string,
	ingredients: string,
	price: number,
	discount: number,
	rate: number,
}


export default function AddToBasketBtn({ src, alt, name, ingredients, price, discount, rate }: Product) {
	
	const [isButtonPressed, setIsButtonPressed] = useState(false);
	
	
	const addProductToLocalStorage = () => {
		
		let cart = JSON.parse(localStorage.getItem("cart") || "[]");
		
		cart.push({ src, alt, name, price, discount, rate, count: 1 });
		
		localStorage.setItem("cart", JSON.stringify(cart));
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
			className={`w-full sm:mb-1 h-8 md:h-10 leading-[180%]
			${EstedadMedium} text-xs md:text-base`}
			disabled={isButtonPressed}
			onClick={addToBasket}
		>
			{ isButtonPressed ? "افزوده شد!" : "افزودن به سبد خرید" }
		</Button>
	)
}