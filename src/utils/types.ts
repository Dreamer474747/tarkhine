import { Dispatch, SetStateAction } from "react";

type Product = {
	description: string,
	discount: number | null,
	food_category: {
		title: string
	},
	food_subcategory: {
		title: string
	},
	photo: string,
	price: string,
	product_code: string,
	title: string,
	rate: number,
	count?: number
}

type ProductsContextType = {
	products: Product[],
	nonIranianProducts: Product[],
	iranianProducts: Product[],
	cartLength: number,
	setCartLength: Dispatch<SetStateAction<number>>
}

export type { Product, ProductsContextType }