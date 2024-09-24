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
}

type ProductsContextType = {
	products: Product[],
	nonIranianProducts: Product[]
}

export type { Product, ProductsContextType }