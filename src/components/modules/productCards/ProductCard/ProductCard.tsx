import Image from "next/image";

import { toPersianNumber } from "u/helpers";

import { Badge } from "ui/Badge";

import { EstedadSemiBold, EstedadMedium } from "@/app/Fonts";
import WishlistBtn from "./WishlistBtn";
import AddToBasketBtn from "./AddToBasketBtn";

type ProductCardParams = {
	src: string,
	alt: string,
	name: string,
	price: number,
	discount: number,
	rate: number,
	totalRate: number,
	specialProduct: boolean,
	productCode: string,
	ingredients: string
}


export default function ProductCard({ src, alt, name, price, discount, rate, totalRate, specialProduct, productCode, ingredients
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
						
						<WishlistBtn productCode={productCode} />
						
						{
							discount ? (
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
							) : null
						}
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
							>
								{toPersianNumber(rate)}
							</p>
							
							<p
								className={`text-[10px] leading-[180%] mr-1 text-[#adadad] hidden md:block`}
							>
								({toPersianNumber(totalRate)} امتیاز)
							</p>
						</div>
						
						<p
							className={`text-[10px] sm:text-sm md:text-base leading-[180%] ${EstedadMedium}`}
						>
							{discount ? toPersianNumber((price * ((100 - discount) / 100)).toLocaleString())
							: toPersianNumber(price.toLocaleString())}
							{" "}
							تومان
						</p>
						
					</div>
				</div>
				
				<AddToBasketBtn
					src={src}
					alt={alt}
					name={name}
					ingredients={ingredients}
					price={price}
					discount={discount}
					rate={rate}
					productCode={productCode}
				/>
			</div>
			
		</div>
	)
}