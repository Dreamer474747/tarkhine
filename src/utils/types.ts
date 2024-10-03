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
	name?: string,
	count?: number
}

type ProductsContextType = {
	products: Product[],
	nonIranianProducts: Product[],
	iranianProducts: Product[],
	cartLength: number,
	setCartLength: Dispatch<SetStateAction<number>>
}


type OrderItem = {
	count: number,
	product: {
		price: number,
		title: string
	}
}

type Order = {
	branch: {
		title: string,
		address: string
	},
	date: string,
	deliver_type: string,
	delivery_time: string,
	items: OrderItem[],
	order_code: string,
	order_description: string,
	payment_status: string,
	payment_type: string,
	status: string,
	time: string,
	total_discount: number,
	total_price: number,
}

type ServicesContextType = {
	isPending: boolean,
	setIsPending: Dispatch<SetStateAction<boolean>>
}

export type { Product, ProductsContextType, Order, OrderItem, ServicesContextType }