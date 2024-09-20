import Image from "next/image";

import { toPersianNumber } from "u/helpers";

import { Button } from "ui/Button";

import { EstedadSemiBold, EstedadMedium } from "@/app/Fonts";

type ProductParams = {
	src: string,
	alt: string,
	name: string,
	price: number,
	rate: number
}


export default function Product({ src, alt, name, price, rate }: ProductParams) {
	
	
	return (
		<div
			className={`w-[310px] sm:w-[235px] md:w-full md--lg:w-[260px] lg:w-[300px] lg--xl:w-[250px] xl--2xl:w-[277px]
			h-fit rounded-lg border rtl mb-5 mx-auto sm:mx-[unset]`}
		>
			<Image
				width="277"
				height="140"
				src={src}
				alt={alt}
				className={`rounded-t-lg select-none w-full lg--xl:w-[250px] xl--2xl:w-[277px]
				lg:h-[155px] lg--xl:h-[115px] xl--2xl:h-[140px]`}
			/>
			
			<div
				className="px-2 sm:px-4 py-2 md:py-0 flex flex-col justify-around h-fit md:h-[165px]"
			>
				<div className="flex justify-between items-center">
					<h4 className={`text-xs xs--sm:text-xl ${EstedadSemiBold}`}>{name}</h4>
					
					<svg className="w-4 h-4 xs--sm:w-6 xs--sm:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z" fill="#C30000"/>
					</svg>
				</div>
				
				<div className="flex justify-between items-center my-3 md:my-0">
					<Image
						width="115"
						height="24"
						src={`/svgs/stars/grouped/Rate-${rate}-desktop.png`}
						alt={`${rate}-star-rate`}
						className="hidden md:block select-none w-[115px] lg--xl:w-[100px] xl--2xl:w-[115px]"
					/>
					
					<div className="flex items-center md:hidden">
						<Image
							width="16"
							height="16"
							src={`/svgs/stars/Rate-${rate}.svg`}
							alt={`${rate}-star-rate`}
							className="select-none"
						/>
						{toPersianNumber(rate)}
					</div>
					
					<p className="text-xs xs--sm:text-base">
						{toPersianNumber(price.toLocaleString())}
						{" "}
						تومان
					</p>
				</div>
				
				<Button
					className={`w-full sm:mb-1 h-8 md:h-10 text-center 
					${EstedadMedium} text-xs md:text-base`}
				>
					افزودن به سبد خرید
				</Button>
			</div>
			
		</div>
	)
}