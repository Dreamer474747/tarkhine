import Comment from "./Comment";

import { EstedadBold } from "@/app/Fonts";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext2,
  CarouselPrevious,
  CarouselDots,
} from "ui/Carousel";


export default function Comments() {
	
	
	return (
		<section className="mt-6 -mb-4 md:mt-8 md:-mb-2 lg:mt-12 lg:mb-12">
			
			<h4
				className={`text-base sm:text-xl lg:text-2xl leading-[140%] ${EstedadBold}
				text-center mb-5 container`}
			>
				نظرات کاربران
			</h4>
			
			<Carousel
				opts={{
					dragFree: true,
					direction: "rtl"
				}}
				className="container pl-0 ml-0"
			>
				<CarouselContent className="-ml-5 ml-0">
					
					{
						Array.from({ length: 6 }).map((product, index) => (
							<CarouselItem
								key={index}
								className="basis-[unset] pl-5 [&>div]:bg-white"
							>
								<Comment />
							</CarouselItem>
						))
					}
					
				</CarouselContent>
				
				<CarouselPrevious
					className={`right-1 xs--sm:right-10 w-6 h-6 xs--sm:w-8 xs--sm:h-8 prev-btn rotate-180
					hidden sm:flex`}
				/>
				<CarouselNext2
					className="left-1 xs--sm:left-10 w-6 h-6 xs--sm:w-8 xs--sm:h-8 next-btn hidden sm:flex"
				/>
				
				<CarouselDots className="mt-4 hidden sm:flex" />
				
			</Carousel>
			
		</section>
	)
}