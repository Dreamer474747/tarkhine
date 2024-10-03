"use client";
import { useRouter } from "next/navigation";
import { useState, Dispatch, SetStateAction } from "react";

import { EstedadSemiBold } from "@/app/Fonts";

import { showSwal } from "u/helpers";
import { getCookie } from "cookies-next";

import { refreshMyAccessToken } from "m/helpers";
import { Product } from "u/types";

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

type UnwishlistProductParams = {
	name: string,
	productCode: string,
	wishlists: Product[],
	setWishlists: Dispatch<SetStateAction<Product[]>>
}


export default function UnwishlistProduct({ name, productCode, wishlists, setWishlists }: UnwishlistProductParams) {
	
	const router = useRouter();
	
	const [open, setOpen] = useState(false);
	const [isPending, setIsPending] = useState(false);
	
	const Unwishlist = async () => {
		
		setIsPending(true);
		const token = getCookie("token");
		
		if (token) {
			const res = await fetch(`${process.env.BASE_URL}/favorite-products/remove/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify({ product_code: productCode })
			});
			
			if (res.status !== 202) {
				return showSwal("مشکلی پیش امد، دوباره تلاش کنید", "error", "باشه");
			}
			
			const newWishlist = wishlists.filter((product: Product) => product.title !== name);
			setWishlists(newWishlist);
			setIsPending(false);
			setOpen(false);
			
		} else {
			
			await refreshMyAccessToken(router);
			Unwishlist();
			setIsPending(false);
		}
	}
	
	
	
	return (
		<Dialog open={open} onOpenChange={setOpen}>
		
			<DialogTrigger asChild>
				<Button
					className="bg-white hover:bg-white p-0 m-0"
				>
					<svg className="w-5 h-5 xs--sm:w-6 xs--sm:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.44 3.1001C14.63 3.1001 13.01 3.9801 12 5.3301C10.99 3.9801 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.6001 2 8.6901C2 9.8801 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.8801 22 8.6901C22 5.6001 19.51 3.1001 16.44 3.1001Z" fill="#C30000"/>
					</svg>
				</Button>
			</DialogTrigger>
			
			<DialogContent>
			
				<DialogHeader>
					
					<DialogTitle
						className={`text-center ${EstedadSemiBold} text-xl mb-6`}
					>
						حذف از لیست علاقمندیها
					</DialogTitle>
					
					<DialogDescription className="text-center text-text">
						ایا واقعا میخواهید
						<strong> {name} </strong>
						را از لیست محصولات مورد علاقه‌تان حذف کنید؟
					</DialogDescription>
					
				</DialogHeader>
				
				<DialogFooter className="mt-4">
					<div className="mx-auto *:w-[117px]">
						<Button
							onClick={Unwishlist}
							disabled={isPending}
							className="mr-3 bg-[#FFF2F2] hover:bg-[#FFF2F2] text-[#C30000]"
						>
							حذف
						</Button>
						
						<Button onClick={() => setOpen(false)} >بازگشت</Button>
					</div>
				</DialogFooter>
				
			</DialogContent>
			
		</Dialog>
	)
}