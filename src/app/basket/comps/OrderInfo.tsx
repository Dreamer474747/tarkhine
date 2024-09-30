"use client";
import { useContext } from "react";

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
				
				<Button className="p-0 m-0 bg-white hover:bg-white">
					<svg className="w-5 h-5 sm:w-6 sm:h-6" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M20.9999 7.22998C20.9799 7.22998 20.9499 7.22998 20.9199 7.22998C15.6299 6.69998 10.3499 6.49998 5.11992 7.02998L3.07992 7.22998C2.65992 7.26998 2.28992 6.96998 2.24992 6.54998C2.20992 6.12998 2.50992 5.76998 2.91992 5.72998L4.95992 5.52998C10.2799 4.98998 15.6699 5.19998 21.0699 5.72998C21.4799 5.76998 21.7799 6.13998 21.7399 6.54998C21.7099 6.93998 21.3799 7.22998 20.9999 7.22998Z" fill="#353535"/>
						<path d="M8.50001 6.22C8.46001 6.22 8.42001 6.22 8.37001 6.21C7.97001 6.14 7.69001 5.75 7.76001 5.35L7.98001 4.04C8.14001 3.08 8.36001 1.75 10.69 1.75H13.31C15.65 1.75 15.87 3.13 16.02 4.05L16.24 5.35C16.31 5.76 16.03 6.15 15.63 6.21C15.22 6.28 14.83 6 14.77 5.6L14.55 4.3C14.41 3.43 14.38 3.26 13.32 3.26H10.7C9.64001 3.26 9.62001 3.4 9.47001 4.29L9.24001 5.59C9.18001 5.96 8.86001 6.22 8.50001 6.22Z" fill="#353535"/>
						<path d="M15.2099 23.2501H8.7899C5.2999 23.2501 5.1599 21.3201 5.0499 19.7601L4.3999 9.69007C4.3699 9.28007 4.6899 8.92008 5.0999 8.89008C5.5199 8.87008 5.8699 9.18008 5.8999 9.59008L6.5499 19.6601C6.6599 21.1801 6.6999 21.7501 8.7899 21.7501H15.2099C17.3099 21.7501 17.3499 21.1801 17.4499 19.6601L18.0999 9.59008C18.1299 9.18008 18.4899 8.87008 18.8999 8.89008C19.3099 8.92008 19.6299 9.27007 19.5999 9.69007L18.9499 19.7601C18.8399 21.3201 18.6999 23.2501 15.2099 23.2501Z" fill="#353535"/>
						<path d="M13.6601 17.75H10.3301C9.92008 17.75 9.58008 17.41 9.58008 17C9.58008 16.59 9.92008 16.25 10.3301 16.25H13.6601C14.0701 16.25 14.4101 16.59 14.4101 17C14.4101 17.41 14.0701 17.75 13.6601 17.75Z" fill="#353535"/>
						<path d="M14.5 13.75H9.5C9.09 13.75 8.75 13.41 8.75 13C8.75 12.59 9.09 12.25 9.5 12.25H14.5C14.91 12.25 15.25 12.59 15.25 13C15.25 13.41 14.91 13.75 14.5 13.75Z" fill="#353535"/>
					</svg>
				</Button>
			</div>
			
			<Separator className="bg-[#cbcbcb] my-3" />
			
			<div className="flex justify-between items-center">
				<h5 className="text-sm sm:text-base">
					تخفیف محصولات
				</h5>
				
				<p className="text-[#717171] text-xs sm:text-sm">
					{toPersianNumber(totalOffPrice.toLocaleString())}
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