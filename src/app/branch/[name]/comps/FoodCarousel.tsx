import ProductCard from "m/productCards/ProductCard/ProductCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext2,
  CarouselPrevious
} from "ui/Carousel";

import type { Product } from "u/types";

type FoodCarouselParams = {
	isSpecial: boolean,
	products: Product[]
}


export default function FoodCarousel({ isSpecial, products }: FoodCarouselParams) {
	
	
	
	
	
	return (
		
		<Carousel
			opts={{
				dragFree: true,
				direction: "rtl"
			}}
			className="container pl-0 ml-0"
		>
			<CarouselContent className="-ml-5 ml-3">
				
				{
					products?.map((product, index) => (
						<CarouselItem
							key={index}
							className="basis-[unset] pl-5 [&>div]:bg-white"
						>
							<ProductCard
								src={product.photo}
								alt={product.title}
								name={product.title}
								price={+product.price}
								discount={0}
								rate={4}
								totalRate={3}
								specialProduct={isSpecial}
								productCode={product.product_code}
								ingredients={product.description}
							/>
						</CarouselItem>
					))
				}
				
			</CarouselContent>
			
			<CarouselPrevious
				className="right-1 xs--sm:right-10 w-6 h-6 xs--sm:w-8 xs--sm:h-8 prev-btn rotate-180"
			/>
			<CarouselNext2
				className="left-1 xs--sm:left-10 w-6 h-6 xs--sm:w-8 xs--sm:h-8 next-btn"
			/>
			
		</Carousel>
	)
}