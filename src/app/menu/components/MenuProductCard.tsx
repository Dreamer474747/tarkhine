import Image from "next/image";

import { toPersianNumber } from "u/helpers";
import { EstedadMedium, EstedadSemiBold } from "@/app/Fonts";

import { Badge } from "ui/Badge";
import { Button } from "ui/Button";

type MenuProductCardParams = {
	src: string,
	alt: string,
	name: string,
	ingredients: string,
	price: number,
	discount: number,
	rate: number,
}


export default function MenuProductCard({ src, alt, name, ingredients, price, discount, rate
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
					
					<svg className="hidden md:block opacity-0 cursor-pointer transition menu-card-heart-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="transition" d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.68998C1.25 5.18998 4.08 2.34998 7.56 2.34998C9.25 2.34998 10.83 3.00998 12 4.18998C13.17 3.00998 14.75 2.34998 16.44 2.34998C19.92 2.34998 22.75 5.19998 22.75 8.68998C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.84998C4.91 3.84998 2.75 6.01998 2.75 8.68998C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.68998C21.26 6.01998 19.1 3.84998 16.45 3.84998C14.93 3.84998 13.52 4.55998 12.61 5.78998C12.33 6.16998 11.69 6.16998 11.41 5.78998C10.48 4.54998 9.08 3.84998 7.56 3.84998Z" fill="#717171"/>
					</svg>
					
					{ discount > 0 && (
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
						)
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
							discount > 0 && (
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
							)
						}
						
						<p
							className={`text-xs sm:text-sm md:text-lg xl:text-base xl--2xl:text-lg
							leading-[180%] ${EstedadMedium}`}
						>
							{toPersianNumber((price * ((100 - discount) / 100)).toLocaleString())}
							{" "}
							تومان
						</p>
					</div>
				</div>
				
				<div>
					<svg className="w-4 h-4 md:w-6 md:h-6 md:hidden cursor-pointer transition menu-card-heart-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path className="transition" d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.68998C1.25 5.18998 4.08 2.34998 7.56 2.34998C9.25 2.34998 10.83 3.00998 12 4.18998C13.17 3.00998 14.75 2.34998 16.44 2.34998C19.92 2.34998 22.75 5.19998 22.75 8.68998C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.84998C4.91 3.84998 2.75 6.01998 2.75 8.68998C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.68998C21.26 6.01998 19.1 3.84998 16.45 3.84998C14.93 3.84998 13.52 4.55998 12.61 5.78998C12.33 6.16998 11.69 6.16998 11.41 5.78998C10.48 4.54998 9.08 3.84998 7.56 3.84998Z" fill="#717171"/>
					</svg>
					
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
					
					<Button
						className={`w-[100px] sm:w-[140px] md:w-[244px] xl:w-[170px] xl--2xl:w-[244px]
						leading-[180%] ${EstedadMedium} text-[10px] sm:text-xs md:text-sm xl--2xl:text-base
						h-8 md:h-10 add-to-basket-btn`}
					>
						افزودن به سبد خرید
					</Button>
				</div>
			</div>
			
		</div>
	)
}