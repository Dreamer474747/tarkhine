"use client";
import { createContext, useState, useEffect } from "react";

import type { Product } from "u/types";

import type { ProductsContextType } from "u/types";


export const ProductsContext = createContext<ProductsContextType | null>(null)

export default function ProductsProvider({ children }: { children: React.ReactNode }) {
	
	const [products, setProducts] = useState([]);
	const [nonIranianProducts, setNonIranianProducts] = useState([]);
	const [iranianProducts, setIranianProducts] = useState([]);
	
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
	}, [])
	
	
	return (
		<ProductsContext.Provider value={{ products, nonIranianProducts }}>
			{children}
		</ProductsContext.Provider>
	)
}