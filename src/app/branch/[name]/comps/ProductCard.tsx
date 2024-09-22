import Image from "next/image";

import { toPersianNumber } from "u/helpers";

import { Badge } from "ui/Badge";
import { Button } from "ui/Button";

import { EstedadSemiBold, EstedadMedium } from "@/app/Fonts";

type ProductCardParams = {
	src: string,
	alt: string,
	name: string,
	price: number,
	discount: number,
	rate: number,
	totalRate: number,
	specialProduct: boolean
}


export default function ProductCard({ src, alt, name, price, discount, rate, totalRate, specialProduct
}: ProductCardParams) {
	
	
	return (
		<div
			className={`w-48 md:w-60 lg:w-72 h-[320px] md:h-[380px] lg:h-[433px]
			rounded-lg flex flex-col ${ !specialProduct ? "border border-2" : "" }`}
		>
			<Image
				width="288"
				height="256"
				src={src}
				alt={alt}
				className="rounded-t-lg select-none"
			/>
			
			<div className="px-3 flex flex-col justify-around grow">
				<h5
					className={`text-center ${EstedadSemiBold} text-sm sm:text-base md:text-lg
					lg:text-xl`}
				>
					{name}
				</h5>
				
				<div>
					<div className="flex justify-between items-center">
						<div className="flex product-card-wishlist">
							<svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path className="transition" d="M8.00016 14.4333C7.7935 14.4333 7.5935 14.4066 7.42683 14.3467C4.88016 13.4733 0.833496 10.3733 0.833496 5.79332C0.833496 3.45998 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00665 8.00016 2.79332C8.78016 2.00665 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46665 15.1668 5.79332C15.1668 10.38 11.1202 13.4733 8.5735 14.3467C8.40683 14.4066 8.20683 14.4333 8.00016 14.4333ZM5.04016 2.56665C3.2735 2.56665 1.8335 4.01332 1.8335 5.79332C1.8335 10.3466 6.2135 12.88 7.7535 13.4066C7.8735 13.4466 8.1335 13.4466 8.2535 13.4066C9.78683 12.88 14.1735 10.3533 14.1735 5.79332C14.1735 4.01332 12.7335 2.56665 10.9668 2.56665C9.9535 2.56665 9.0135 3.03998 8.40683 3.85998C8.22016 4.11332 7.7935 4.11332 7.60683 3.85998C6.98683 3.03332 6.0535 2.56665 5.04016 2.56665Z" fill="#ADADAD"/>
							</svg>
							<p
								className={`text-[#adadad] leading-[180%] text-[10px] flex items-center
								cursor-pointer hidden md:block`}
							>
								افزودن به علاقمندی‌ها
							</p>
						</div>
						
						<div className="text-[10px] leading-[180%] flex">
							<p
								className="line-through text-[#adadad] ml-2"
							>
								{toPersianNumber(price.toLocaleString())}
							</p>
							
							<Badge
								className={`bg-[#fff2f2] text-[#c30000] w-8 h-4 flex justify-items
								text-[10px] leading-[180%] pt-1 hover:bg-[#fff2f2]`}
							>
								٪{toPersianNumber(discount)}
							</Badge>
						</div>
					</div>
					
					<div className="flex justify-between items-center">
						
						<div className="flex items-center">
							<Image
								width="16"
								height="16"
								src={`/svgs/stars/rate-${rate}.svg`}
								alt={`${rate}-star-rate`}
							/>
							
							<p
								className={`${EstedadMedium} text-[14px] leading-[24px]
								mr-1`}
							>۵</p>
							
							<p
								className={`text-[10px] leading-[180%] mr-1 text-[#adadad] hidden md:block`}
							>
								({toPersianNumber(totalRate)} امتیاز)
							</p>
						</div>
						
						<p
							className={`text-[10px] sm:text-sm md:text-base leading-[180%] ${EstedadMedium}`}
						>
							{toPersianNumber((price * ((100 - discount) / 100)).toLocaleString())}
							{" "}
							تومان
						</p>
						
					</div>
				</div>
				
				<Button
					className={`w-full sm:mb-1 h-8 md:h-10 leading-[180%]
					${EstedadMedium} text-xs md:text-base`}
				>
					افزودن به سبد خرید
				</Button>
			</div>
			
		</div>
	)
}