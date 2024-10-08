"use client";
import { useState } from "react";

import { Button } from "ui/Button";
import { priceCalculator, toPersianNumber } from "u/helpers";

import type { Product } from "u/types";

type SmallOrderParams = {
	name: string,
	price: number,
	discount: number,
	numberOfOrders: number,
	calcTotalPrice: (param: Product[]) => number,
	calcTotalOffPrice: (param: Product[]) => void,
	deleteOrder: (name: string) => void,
}



export default function SmallOrder({ name, price, discount, numberOfOrders, calcTotalPrice,
calcTotalOffPrice, deleteOrder}: SmallOrderParams) {
	
	const [localCount, setLocalCount] = useState(numberOfOrders);
	
	const addProductCount = () => {
		let cart = JSON.parse(localStorage.getItem("cart") || "[]");
		
		cart.forEach((item: any) => {
			if (item.name === name) {
				item.count = item.count + 1
			}
		})
		
		localStorage.setItem("cart", JSON.stringify(cart) || "[]");
		
		setLocalCount(localCount + 1);
		
		const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
		calcTotalPrice(currentCart);
		calcTotalOffPrice(currentCart);
	}
	
	const subtractProductCount = () => {
		let cart = JSON.parse(localStorage.getItem("cart") || "[]");
		
		let isProductDeleted = false;
		
		cart.forEach((item: any) => {
			if (item.name === name) {
				if (item.count === 1) {
					
					deleteOrder(name);
					isProductDeleted = true;
					
				} else {
					item.count = item.count - 1
				}
			}
		})
		
		if (isProductDeleted) {
			return;
			
		} else {
			localStorage.setItem("cart", JSON.stringify(cart));
			
			setLocalCount(localCount - 1);
			
			const currentCart = JSON.parse(localStorage.getItem("cart") || "[]");
			calcTotalPrice(currentCart);
			calcTotalOffPrice(currentCart);
		}
	}
	
	
	return (
		<div
			className="w-full flex justify-between items-center p-4 rtl even:bg-[#ededed] odd:bg-[#f9f9f9]"
		>
			<div>
				<h6>
					{name}
				</h6>
				
				<p className="text-[#717171] ">
					{priceCalculator(price, discount)}
					{" "}
					تومان
				</p>
			</div>
			
			<div
				className="bg-[#E5F2E9] w-[55px] h-8 rounded flex justify-around items-center text-primary"
			>
				<Button
					className="text-xl text-primary bg-transparent hover:bg-transparent p-0 m-0"
					onClick={addProductCount}
				>+</Button>
				
				<span className="text-sm">
					{toPersianNumber(localCount)}
				</span>
				
				<Button
					className="text-xl text-primary bg-transparent hover:bg-transparent p-0 m-0"
					onClick={subtractProductCount}
				>
					{
						localCount === 1 ? (
							<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13.9999 4.98669C13.9866 4.98669 13.9666 4.98669 13.9466 4.98669C10.4199 4.63336 6.89994 4.50002 3.41328 4.85336L2.05328 4.98669C1.77328 5.01336 1.52661 4.81336 1.49994 4.53336C1.47328 4.25336 1.67328 4.01336 1.94661 3.98669L3.30661 3.85336C6.85328 3.49336 10.4466 3.63336 14.0466 3.98669C14.3199 4.01336 14.5199 4.26002 14.4933 4.53336C14.4733 4.79336 14.2533 4.98669 13.9999 4.98669Z" fill="#417F56"/>
								<path d="M5.66663 4.31337C5.63997 4.31337 5.6133 4.31337 5.57997 4.30671C5.3133 4.26004 5.12663 4.00004 5.1733 3.73337L5.31997 2.86004C5.42663 2.22004 5.5733 1.33337 7.12663 1.33337H8.8733C10.4333 1.33337 10.58 2.25337 10.68 2.86671L10.8266 3.73337C10.8733 4.00671 10.6866 4.26671 10.42 4.30671C10.1466 4.35337 9.88663 4.16671 9.84663 3.90004L9.69997 3.03337C9.60663 2.45337 9.58663 2.34004 8.87997 2.34004H7.1333C6.42663 2.34004 6.4133 2.43337 6.3133 3.02671L6.15997 3.89337C6.11997 4.14004 5.90663 4.31337 5.66663 4.31337Z" fill="#417F56"/>
								<path d="M10.14 15.6667H5.85997C3.53331 15.6667 3.43997 14.3801 3.36664 13.3401L2.93331 6.62672C2.91331 6.35338 3.12664 6.11338 3.39997 6.09338C3.67997 6.08005 3.91331 6.28672 3.93331 6.56005L4.36664 13.2734C4.43997 14.2867 4.46664 14.6667 5.85997 14.6667H10.14C11.54 14.6667 11.5666 14.2867 11.6333 13.2734L12.0666 6.56005C12.0866 6.28672 12.3266 6.08005 12.6 6.09338C12.8733 6.11338 13.0866 6.34672 13.0666 6.62672L12.6333 13.3401C12.56 14.3801 12.4666 15.6667 10.14 15.6667Z" fill="#417F56"/>
								<path d="M9.10672 12H6.88672C6.61339 12 6.38672 11.7733 6.38672 11.5C6.38672 11.2267 6.61339 11 6.88672 11H9.10672C9.38005 11 9.60672 11.2267 9.60672 11.5C9.60672 11.7733 9.38005 12 9.10672 12Z" fill="#417F56"/>
								<path d="M9.66671 9.33337H6.33337C6.06004 9.33337 5.83337 9.10671 5.83337 8.83337C5.83337 8.56004 6.06004 8.33337 6.33337 8.33337H9.66671C9.94004 8.33337 10.1667 8.56004 10.1667 8.83337C10.1667 9.10671 9.94004 9.33337 9.66671 9.33337Z" fill="#417F56"/>
							</svg>
						) : "-"
					}
				</Button>
			</div>
		</div>
	)
}