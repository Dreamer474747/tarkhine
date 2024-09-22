import ProductCard from "./ProductCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext2,
  CarouselPrevious
} from "ui/Carousel";


export default function FoodCarousel({ isSpecial }: { isSpecial: boolean }) {
	
	
	
	const products = [
		{
			src: "/images/dolme-barg-kalam.jpg",
			alt: "dolme-barg-kalam",
			name: "دلمه برگ کلم",
			price: 220_000,
			discount: 8,
			rate: 5,
			totalRate: 52
		},
		{
			src: "/images/dolme-barg-kalam.jpg",
			alt: "dolme-barg-kalam",
			name: "دلمه برگ کلم",
			price: 220_000,
			discount: 8,
			rate: 5,
			totalRate: 52
		},
		{
			src: "/images/dolme-barg-kalam.jpg",
			alt: "dolme-barg-kalam",
			name: "دلمه برگ کلم",
			price: 220_000,
			discount: 8,
			rate: 5,
			totalRate: 52
		},
		{
			src: "/images/dolme-barg-kalam.jpg",
			alt: "dolme-barg-kalam",
			name: "دلمه برگ کلم",
			price: 220_000,
			discount: 8,
			rate: 5,
			totalRate: 52
		},
		{
			src: "/images/dolme-barg-kalam.jpg",
			alt: "dolme-barg-kalam",
			name: "دلمه برگ کلم",
			price: 220_000,
			discount: 8,
			rate: 5,
			totalRate: 52
		},
	]
	
	
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
					products.map((product, index) => (
						<CarouselItem
							key={index}
							className="basis-[unset] pl-5 [&>div]:bg-white"
						>
							<ProductCard
								src={product.src}
								alt={product.alt}
								name={product.name}
								price={product.price}
								discount={product.discount}
								rate={product.rate}
								totalRate={product.totalRate}
								specialProduct={isSpecial}
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