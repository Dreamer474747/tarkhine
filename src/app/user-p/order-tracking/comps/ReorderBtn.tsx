"use client";
import { useState, useContext } from "react";
import { EstedadSemiBold } from "@/app/Fonts";

import { ProductsContext } from "@/components/contexts/ProductsProvider";
import type { ProductsContextType, Product, OrderItem } from "u/types";

import { showSwal } from "u/helpers";

import { Button } from "ui/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "ui/Dialog";



export default function ReorderBtn({ orderedItems }: { orderedItems: OrderItem[] }) {
	
	const { products, setCartLength } = useContext(ProductsContext) as ProductsContextType;
	const [open, setOpen] = useState(false);
	
	const reorder = () => {
		
		const orderProducts = [];
		
		for (let i = 0; orderedItems.length > i; i++) {
			
			const product = products.find((product: Product) => product.title === orderedItems[i].product.title) as Product;
			
			const obj = {
				src: product.photo,
				alt: product.title,
				name: product.title,
				ingredients: product.description,
				price: product.price,
				discount: product.discount,
				rate: product.rate,
				productCode: product.product_code,
				count: orderedItems[i].count,
			}
			
			orderProducts.push(obj);
		}
		
		localStorage.setItem("cart", JSON.stringify(orderProducts));
		setCartLength(orderProducts.length);
		
		showSwal("سفارش با موفقیت به سبد خریدتان اضافه شد، لطفا سبد خریدتان را مشاهده کنید", "success", "باشه");
		setOpen(false);
	}
	
	
	return (
		<Dialog open={open} onOpenChange={setOpen}>
		
			<DialogTrigger asChild>
				<Button
					variant="outline"
					className="border-primary text-primary w-[123px] h-8 text-xs hover:bg-[] hover:text-[] mt-4"
				>
					سفارش مجدد
				</Button>
			</DialogTrigger>
			
			<DialogContent>
			
				<DialogHeader>
					
					<DialogTitle className="text-center mb-2">
						سفارش مجدد
					</DialogTitle>
					
					<DialogDescription className="text-center text-text rtl">
						ایا می‌خواهید این محصولات را دوباره سفارش دهید؟ درصورت ادامه دادن، سبد انتخابیتان جایگزین سبد فعلیتان خواهد شد.
					</DialogDescription>
					
				</DialogHeader>
				
				<DialogFooter className="mt-2 flex mx-auto">
					
					<div className="mx-auto *:w-[117px]">
						<Button
							onClick={reorder}
							className="mr-3 bg-[#FFF2F2] hover:bg-[#FFF2F2] text-[#C30000]"
						>
							سفارش
						</Button>
						
						<Button onClick={() => setOpen(false)} >بازگشت</Button>
					</div>
					
				</DialogFooter>
				
			</DialogContent>
			
		</Dialog>
	)
}