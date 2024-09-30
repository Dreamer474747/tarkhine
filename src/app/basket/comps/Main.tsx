"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";

import { EstedadMedium } from "@/app/Fonts";

import { EmptyBasket, OrderInfo, LargeOrder, SmallOrder, Address } from ".";

import { ProductsContext } from "@/components/contexts/ProductsProvider";
import type { ProductsContextType, Product } from "u/types";



export default function Main() {
	
	const { setCartLength } = useContext(ProductsContext) as ProductsContextType;
	
	const [cart, setCart] = useState<Product[]>([]);
	
	const [totalPrice, setTotalPrice] = useState(0);
	const [totalOffPrice, setTotalOffPrice] = useState(0);
	
	const calcTotalPrice = (products: Product[]) => {
		
		let helper = 0;
		
		if (products.length) {
			helper = products.reduce((prev: number, current: Product) => {
				
				if (current.discount) {
					return prev + ( +current.price * ((100 - current.discount) / 100) ) * (current.count as number)
				} else {
					return prev + +current.price * (current.count as number)
				}
				
			}, 0);
		}
		setTotalPrice(helper);
		return helper;
	}
	
	const calcTotalOffPrice = (products: Product[]) => {
		
		let noOffPrice = 0;
		
		if (products.length) {
			noOffPrice = products.reduce((prev: number, current: Product) => {
				
				return prev + +current.price * (current.count as number);
			}, 0);
			
			const withOffPrice = calcTotalPrice(products);
			
			setTotalOffPrice(noOffPrice - withOffPrice);
		}
	}
	
	useEffect(() => {
		
		const basket: Product[] = JSON.parse(localStorage.getItem("cart") || "[]");
		
		calcTotalPrice(basket);
		calcTotalOffPrice(basket);
		setCart(basket);
		
	}, [])
	
	const deleteOrder = (name: string) => {
		
		const productName = cart.find((product: Product) => product.name === name)?.name;
		
		const newCart = cart.filter((product: any) => product.name !== productName);
		
		localStorage.setItem("cart", JSON.stringify(newCart));
		setCart(newCart);
		
		setCartLength((prev: number) => prev - 1);
		
		calcTotalPrice(newCart);
		calcTotalOffPrice(newCart);
	}
	
	
	
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
									cart?.map((product: any) => (
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
											calcTotalPrice={calcTotalPrice}
											calcTotalOffPrice={calcTotalOffPrice}
											deleteOrder={deleteOrder}
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
											name={product.name as string}
											price={+product.price}
											discount={product.discount ? product.discount : 0}
											numberOfOrders={+(product.count as number)}
											calcTotalPrice={calcTotalPrice}
											calcTotalOffPrice={calcTotalOffPrice}
											deleteOrder={deleteOrder}
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
							
							<OrderInfo
								totalPrice={totalPrice}
								totalOffPrice={totalOffPrice}
							/>
						</div>
					</>
					
				) : (
					<EmptyBasket />
				)
			}
			
		</main>
	)
}