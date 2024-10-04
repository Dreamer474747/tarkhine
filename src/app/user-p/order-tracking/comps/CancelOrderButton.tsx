"use client";
import { useRouter } from "next/navigation";
import { useState, Dispatch, SetStateAction } from "react";
import { EstedadSemiBold } from "@/app/Fonts";

import { refreshMyAccessToken } from "m/helpers";
import { getCookie, hasCookie } from "cookies-next";

import swal from "sweetalert";
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

type CancelOrderButtonParams = {
	orderCode: string,
	setIsFoodReceived: Dispatch<SetStateAction<boolean | null>>
}


export default function CancelOrderButton({ orderCode, setIsFoodReceived }: CancelOrderButtonParams) {
	
	const router = useRouter();
	const [open, setOpen] = useState(false);
	const [isPending, setIsPending] = useState(false);
	
	const cancelOrder = async () => {
		setIsPending(true);
		const token = getCookie("token");
		
		if (token) {
			const res = await fetch(`${process.env.BASE_URL}/order/cancel/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"Authorization": `Bearer ${token}`
				},
				body: JSON.stringify({ order_code: orderCode })
			});
			const data = await res.json();
			
			if (res.status === 202) {
				setIsFoodReceived(false);
				showSwal("سفارش شما لغو شد", "info", "باشه");
				
			} else {
				setIsPending(false);
				showSwal("مشکلی پیش امد، دوباره تلاش کنید", "error", "باشه");
			}
		
		} else {
			await refreshMyAccessToken(router);
			cancelOrder();
		}
	}
	
	
	return (
		<Dialog open={open} onOpenChange={setOpen}>
		
			<DialogTrigger asChild>
				<Button
					variant="outline"
					className={`border-[#C30000] text-[#C30000] w-[94px] sm:w-[123px] h-8
					hover:bg-[] hover:text-[] mt-4 text-xs`}
				>
					لغو سفارش
				</Button>
			</DialogTrigger>
			
			<DialogContent>
			
				<DialogHeader>
					
					<DialogTitle className="text-center mb-2">
						لغو سفارش
					</DialogTitle>
					
					<DialogDescription className="text-center text-text rtl">
						ایا از لغو کردن این سفارش اطمینان دارید؟
					</DialogDescription>
					
				</DialogHeader>
				
				<DialogFooter className="mt-2 flex mx-auto">
					
					<div className="mx-auto *:w-[117px]">
						<Button
							onClick={cancelOrder}
							disabled={isPending}
							className="mr-3 bg-[#FFF2F2] hover:bg-[#FFF2F2] text-[#C30000]"
						>
							لغو
						</Button>
						
						<Button onClick={() => setOpen(false)} >بازگشت</Button>
					</div>
					
				</DialogFooter>
				
			</DialogContent>
			
		</Dialog>
	)
}