"use client";
import { createContext, useState, useEffect } from "react";

import type { Product, ProductsContextType } from "u/types";


export const ProductsContext = createContext<ProductsContextType | null>(null)

export default function ProductsProvider({ children }: { children: React.ReactNode }) {
	
	const [products, setProducts] = useState([]);
	const [nonIranianProducts, setNonIranianProducts] = useState([]);
	const [iranianProducts, setIranianProducts] = useState([]);
	
	const [cartLength, setCartLength] = useState(0);
	
	useEffect(() => {
		
		const getProducts = async () => {
			
			const res = await fetch(`${process.env.BASE_URL}/product/list`)
			const data = await res.json();
			
			setProducts(data)
			
			const nonIranianFoods = data.filter((food: Product) => food.food_subcategory.title === "غذا های غیر ایرانی");
			setNonIranianProducts(nonIranianFoods);
			
			const iranianFoods = data.filter((food: Product) => food.food_subcategory.title === "غذا های ایرانی");
			setIranianProducts(iranianFoods);
			
		}
		
		getProducts();
		
		if (global?.window !== undefined) {
			// Now it's safe to access window and localStorage
			const basket = JSON.parse(localStorage.getItem("cart") || "[]");
			setCartLength(basket.length);
		}
		
	}, [])
	
	
	return (
		<ProductsContext.Provider value={{ products, nonIranianProducts, iranianProducts, cartLength, setCartLength }}>
			{children}
		</ProductsContext.Provider>
	)
}