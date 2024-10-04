import Image from "next/image";

import { Dispatch, SetStateAction } from "react";

import { toPersianNumber } from "u/helpers";
import { Product } from "u/types";

import AddToBasketBtn from "./AddToBasketBtn";
import UnwishlistProduct from "./UnwishlistProduct";

import { EstedadSemiBold, EstedadMedium } from "@/app/Fonts";

type ProductParams = {
	src: string,
	alt: string,
	name: string,
	price: number,
	rate: number,
	ingredients: string,
	discount: number,
	productCode: string,
	wishlists: Product[],
	setWishlists: Dispatch<SetStateAction<Product[]>>
}


export default function WishlistProduct({ src, alt, name, price, rate, ingredients, discount, productCode,
wishlists, setWishlists}: ProductParams) {
	
	
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
				className={`rounded-t-lg select-none w-full lg--xl:w-[250px] xl--2xl:w-[277px]`}
			/>
			
			<div
				className="px-2 sm:px-4 py-2 md:py-0 flex flex-col justify-around h-fit md:h-[165px]"
			>
				<div className="flex justify-between items-center">
					<h4 className={`text-xs xs--sm:text-xl ${EstedadSemiBold}`}>{name}</h4>
					
					<UnwishlistProduct
						name={name}
						productCode={productCode}
						wishlists={wishlists}
						setWishlists={setWishlists}
					/>
				</div>
				
				<div className="flex justify-between items-center my-3 md:my-0">
					<Image
						width="115"
						height="24"
						src={`/svgs/stars/grouped/rate-${rate}-desktop.png`}
						alt={`${rate}-star-rate`}
						className="hidden md:block select-none w-[115px] lg--xl:w-[100px] xl--2xl:w-[115px]"
					/>
					
					<div className="flex items-center md:hidden">
						<Image
							width="16"
							height="16"
							src={`/svgs/stars/rate-${rate}.svg`}
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