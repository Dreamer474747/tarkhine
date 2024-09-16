"use client";
import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots
} from "ui/Carousel";

import Nav from "m/nav/Nav";

import { EstedadBold, EstedadMedium } from "@/app/Fonts";


export default function Header() {
	
	
	const titles = [
		"تجربه غذای سالم و گیاهی به سبک ترخینه",
		"یک ماجراجویی آشپزی برای تمام حواس",
		"هر روز، یک تجربه مزه جدید",
		"تجربه‌ای که فراموش نخواهید کرد",
		"!طعم بی‌نظیر طبیعت",
		"یک وعده غذایی ساده با هم",
		"طعمی که به یاد خواهید آورد",
	]
	
	
	return (
		<header>
			<Nav />
			
			<div
				id="menu-slider"
				className="h-[336px] pt-[74px] sm:pt-[150px] lg:pt-[140px]"
			>
				
				<Carousel opts={{ loop: true }}>
					<CarouselContent className="select-none">
						
						{
							titles.map((title, index) => (
								<CarouselItem key={index}>
									<div>
										<h3
											className={`text-white text-center lg:leading-[140%]
											text-lg sm:text-2xl md:text-3xl lg:text-[40px]
											${EstedadBold} header-title`}
										>
											{title}
										</h3>
									</div>
								</CarouselItem>
							))
						}
						
					</CarouselContent>
					
					<CarouselPrevious
						className="left-1 xs--sm:left-3 w-6 h-6 xs--sm:w-8 xs--sm:h-8 prev-btn"
					/>
					<CarouselNext
						className="right-1 xs--sm:right-3 w-6 h-6 xs--sm:w-8 xs--sm:h-8 next-btn"
					/>
					
					<div
						className={`carousel-dots-container absolute -bottom-[84px] sm:-bottom-[172px]
						md:-bottom-[168px] lg:-bottom-[158px] left-1/2 transform -translate-x-1/2
						-translate-y-1/2`}
					>
						<CarouselDots
							className="absolute left-1/2 transform -translate-x-1/2 top-2 sm:top-3.5"
						/>
						
						<svg className="sm:hidden" width="82" height="19" viewBox="0 0 82 19" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M81.1819 18.9086C71.5188 15.7635 70.945 0 60.783 0H20.1709C9.93327 0 10.3917 19 0.153999 19C-4.24391 19 87.0571 19 81.7796 19C81.5654 19 81.3665 18.9687 81.1819 18.9086Z" fill="white"/>
						</svg>
						
						<svg className="hidden sm:block w-[82px] h-[19px] sm:w-[154px] sm:h-[33px]" width="154" height="33" viewBox="0 0 154 33" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M13.1492 12.9957C15.3255 5.56588 21.9046 0 29.6466 0H125.118C132.571 0 138.998 5.16164 141.261 12.2634C144.25 21.6506 148.867 33 153.711 33C161.97 33 -9.49755 33 0.41389 33C6.07606 33 10.4444 22.2302 13.1492 12.9957Z" fill="white"/>
						</svg>
					</div>
				</Carousel>
				
				
				
			</div>
		</header>
	)
}