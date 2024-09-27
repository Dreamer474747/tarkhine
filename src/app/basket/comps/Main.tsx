"use client";
import Image from "next/image";
import Link from "next/link";

import { EstedadMedium } from "@/app/Fonts";

import { EmptyBasket, OrderInfo, LargeOrder, SmallOrder, Address } from ".";

import type { Product } from "u//types";


export default function Main() {
	
	const cart = JSON.parse(localStorage.getItem("cart") || "[]");
	
	
	return (
		
		<main className="container mt-8 flex flex-col md:flex-row justify-between h-[550px] rtl">
			
			{
				cart.length ? (
					
					<>
						<div
							className="w-full md:w-1/2 lg:w-[60%] mb-4 md:mb-0"
						>
							<div
								className={`border rounded-lg h-full p-4 pb-1 overflow-y-auto ltr custom-scrollbar
								hidden lg:block`}
							>
								{
									cart?.map((product: Product) => (
										<LargeOrder
											key={product.name}
											src={product.src}
											alt={product.alt}
											name={product.name}
											ingredients={product.ingredients}
											price={product.price}
											discount={product.discount}
											rate={product.rate}
											numberOfOrders={product.count}
										/>
									))
								}
								
							</div>
							
							<div
								className={`border rounded-lg h-full overflow-y-auto ltr custom-scrollbar
								lg:hidden max-h-[400px] md:max-h-[unset]`}
							>
								{
									cart?.map((product: Product) => (
										<SmallOrder
											key={product.name}
											name={product.name}
											price={product.price}
											discount={product.discount ? product.discount : 0}
											numberOfOrders={product.count}
										/>
									))
								}
								
							</div>
						</div>
						
						<div
							className={`w-full md:w-[48%] lg:w-[38%] h-full flex justify-between
							md:justify-start flex-col`}
						>
							<Address />
							
							<OrderInfo />
						</div>
					</>
					
				) : (
					<EmptyBasket />
				)
			}
			
		</main>
	)
}