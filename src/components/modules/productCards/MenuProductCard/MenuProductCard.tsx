import Image from "next/image";

import { priceCalculator, toPersianNumber } from "u/helpers";
import { EstedadMedium, EstedadSemiBold } from "@/app/Fonts";

import AddToBasketBtn from "./AddToBasketBtn";
import WishlistBtn from "./WishlistBtn";
import MobileWishlistBtn from "./MobileWishlistBtn";

import { Badge } from "ui/Badge";

import type { Product } from "u/types";

type MenuProductCardParams = {
	src: string,
	alt: string,
	name: string,
	ingredients: string,
	price: number,
	discount: number,
	rate: number,
	productCode: string
}


export default function MenuProductCard({ src, alt, name, ingredients, price, discount, rate, productCode
}: MenuProductCardParams) {
	
	
	return (
		<div
			className={`rounded-lg border w-full xl:w-[540px] xl--2xl:w-[600px]
			flex justify-between mb-5 hover:shadow-md transition menu-card`}
		>
			
			<Image
				width="169"
				height="158"
				src={src}
				alt={alt}
				className="rounded-r w-[92px] h-[100px] sm:w-[169px] sm:h-[158px]"
			/>
			
			<div
				className={`[&>*]:flex [&>*]:justify-between [&>*]:items-center grow
				pr-2 md:pr-5 xl--2xl:pr-8 pl-2 sm:pl-4 flex flex-col justify-between pt-1.5 pb-2`}
			>
				<div>
					<h5
						className={`text-xs sm:text-lg md:text-xl leading-[180%] ${EstedadSemiBold}
						line-clamp-1 product-name`}
					>
						{name}
					</h5>
					
					<WishlistBtn productCode={productCode} />
					
					{ discount ? (
							<div
								className={`md:hidden flex items-center justify-end
								leading-[180%]`}
							>
								<p
									className="line-through text-[#adadad] ml-1 sm:ml-2 text-xs sm:text-base"
								>
									{toPersianNumber(price.toLocaleString())}
								</p>
								
								<Badge
									className={`bg-[#fff2f2] text-[#c30000] w-8 h-5 flex justify-items
									pt-1 hover:bg-[#fff2f2] text-[10px] sm:text-xs`}
								>
									٪{toPersianNumber(discount)}
								</Badge>
							</div>
						) : ""
					}
					
				</div>
				
				<div>
					<p
						className={`w-[68%] text-[10px] sm:text-sm xl:text-xs xl--2xl:text-sm ingredients
						line-clamp-1 sm:line-clamp-2 xl:line-clamp-1 xl--2xl:line-clamp-2`}
					>
						{ingredients}
					</p>
					
					<div className="price">
						{
							discount ? (
								<div className=" hidden md:flex items-center justify-end">
									<p
										className="line-through text-[#adadad] ml-2"
									>
										{toPersianNumber(price.toLocaleString())}
									</p>
									
									<Badge
										className={`bg-[#fff2f2] text-[#c30000] w-8 h-5 flex justify-items
										text-xs leading-[180%] pt-1 hover:bg-[#fff2f2]`}
									>
										٪{toPersianNumber(discount)}
									</Badge>
								</div>
							) : ""
						}
						
						<p
							className={`text-xs sm:text-sm md:text-lg xl:text-base xl--2xl:text-lg
							leading-[180%] ${EstedadMedium}`}
						>
							{
								priceCalculator(price, discount)
							}
							{" "}
							تومان
						</p>
					</div>
				</div>
				
				<div>
					<MobileWishlistBtn productCode={productCode} />
					
					<Image
						width="115"
						height="24"
						src={`/svgs/stars/grouped/Rate-${rate}-desktop.png`}
						alt={`${rate}-star-rate`}
						className="hidden sm:block w-[90px] h-[20px] md:w-[115px] md:h-[24px]"
					/>
					
					<Image
						width="80"
						height="16"
						src={`/svgs/stars/grouped/Rate-${rate}-mobile.png`}
						alt={`${rate}-star-rate`}
						className="sm:hidden stars"
					/>
					
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
			
		</div>
	)
}