"use client";
import { useContext } from "react";

import EmptyBasketModal from "./EmptyBasketModal";

import { Separator } from "ui/Separator";
import { Button } from "ui/Button";

import { ProductsContext } from "@/components/contexts/ProductsProvider";
import type { ProductsContextType, Product } from "u/types";

import { toPersianNumber } from "u/helpers";

type OrderInfoParams = {
	totalPrice: number,
	totalOffPrice: number
}


export default function OrderInfo({ totalPrice, totalOffPrice }: OrderInfoParams) {
	
	const { cartLength } = useContext(ProductsContext) as ProductsContextType;
	
	
	return (
		<div
			className="border rounded-lg p-4 mb-8 md:mb-0"
		>
			<div className="flex justify-between items-center">
				<h5 className="text-sm sm:text-base">
					سبد خرید
					<span className="text-xs sm:text-sm">({toPersianNumber(cartLength)})</span>
				</h5>
				
				<EmptyBasketModal />
			</div>
			
			<Separator className="bg-[#cbcbcb] my-3" />
			
			<div className="flex justify-between items-center">
				<h5 className="text-sm sm:text-base">
					تخفیف محصولات
				</h5>
				
				<p className="text-[#717171] text-xs sm:text-sm">
					{toPersianNumber(totalOffPrice.toLocaleString())}
					{" "}
					تومان
				</p>
			</div>
			
			<Separator className="bg-[#cbcbcb] my-3" />
			
			<div className="flex justify-between items-center">
				<h5 className="text-sm sm:text-base">
					هزینه ارسال
				</h5>
				
				<p className="text-[#717171] text-xs sm:text-sm">
					۲۰٬۰۰۰
					تومان
				</p>
			</div>
			
			<Separator className="bg-[#cbcbcb] my-3" />
			
			<div className="flex justify-between items-center mb-3">
				<h5 className="text-sm sm:text-base">
					مبلغ قابل پرداخت
				</h5>
				
				<p className="text-primary text-xs sm:text-sm">
					{toPersianNumber((totalPrice + 20_000).toLocaleString())}
					{" "}
					تومان
				</p>
			</div>
			
			<form className="w-full flex justify-end">
				
				<Button
					type="submit"
					className="w-[240px] md:w-full text-sm sm:text-base submit-order-btn"
				>
					<svg className="ml-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12.5 22.75C6.57 22.75 1.75 17.93 1.75 12C1.75 6.07 6.57 1.25 12.5 1.25C18.43 1.25 23.25 6.07 23.25 12C23.25 17.93 18.43 22.75 12.5 22.75ZM12.5 2.75C7.4 2.75 3.25 6.9 3.25 12C3.25 17.1 7.4 21.25 12.5 21.25C17.6 21.25 21.75 17.1 21.75 12C21.75 6.9 17.6 2.75 12.5 2.75Z" fill="white"/>
						<path d="M11.08 15.58C10.88 15.58 10.69 15.5 10.55 15.36L7.72 12.53C7.43 12.24 7.43 11.76 7.72 11.47C8.01 11.18 8.49 11.18 8.78 11.47L11.08 13.77L16.22 8.62998C16.51 8.33998 16.99 8.33998 17.28 8.62998C17.57 8.91998 17.57 9.39998 17.28 9.68998L11.61 15.36C11.47 15.5 11.28 15.58 11.08 15.58Z" fill="white"/>
					</svg>
					ثبت سفارش
				</Button>
				
			</form>
			
		</div>
	)
}