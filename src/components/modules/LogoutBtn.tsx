"use client";
import { useState } from "react";

import { deleteCookie } from "cookies-next";

import { EstedadSemiBold } from "@/app/Fonts";

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


export default function LogoutBtn({ text } : { text: string }) {
	
	const [open, setOpen] = useState(false);
	
	
	const logout = () => {
		deleteCookie("token");
		deleteCookie("refresh");
		setOpen(false);
		location.reload();
	}
	
	
	return (
		<Dialog open={open} onOpenChange={setOpen} >
		
			<DialogTrigger asChild>
				<Button
					className={`!text-[#c30000] text-sm flex justify-start whitespace-nowrap transition px-0
					mr-[0.8px] ${text === "خروج" ? "bg-white hover:bg-white !mt-2" :
					"bg-[#f9f9f9] hover:bg-[#f9f9f9]"}`}
				>
					<svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.1597 14.8467H10.073C7.11302 14.8467 5.68635 13.68 5.43968 11.0667C5.41302 10.7933 5.61302 10.5467 5.89302 10.52C6.15968 10.4933 6.41302 10.7 6.43968 10.9733C6.63302 13.0667 7.61968 13.8467 10.0797 13.8467H10.1664C12.8797 13.8467 13.8397 12.8867 13.8397 10.1733V5.82665C13.8397 3.11332 12.8797 2.15332 10.1664 2.15332H10.0797C7.60635 2.15332 6.61968 2.94665 6.43968 5.07999C6.40635 5.35332 6.17302 5.55999 5.89302 5.53332C5.61302 5.51332 5.41302 5.26665 5.43302 4.99332C5.65968 2.33999 7.09302 1.15332 10.073 1.15332H10.1597C13.433 1.15332 14.833 2.55332 14.833 5.82665V10.1733C14.833 13.4467 13.433 14.8467 10.1597 14.8467Z" fill="currentColor"/>
						<path d="M9.99975 8.5H2.41309C2.13975 8.5 1.91309 8.27333 1.91309 8C1.91309 7.72667 2.13975 7.5 2.41309 7.5H9.99975C10.2731 7.5 10.4998 7.72667 10.4998 8C10.4998 8.27333 10.2731 8.5 9.99975 8.5Z" fill="currentColor"/>
						<path d="M3.89964 10.7336C3.77297 10.7336 3.6463 10.6869 3.5463 10.5869L1.31297 8.35356C1.11964 8.16022 1.11964 7.84022 1.31297 7.64689L3.5463 5.41355C3.73964 5.22022 4.05964 5.22022 4.25297 5.41355C4.4463 5.60689 4.4463 5.92689 4.25297 6.12022L2.37297 8.00022L4.25297 9.88022C4.4463 10.0736 4.4463 10.3936 4.25297 10.5869C4.15964 10.6869 4.0263 10.7336 3.89964 10.7336Z" fill="currentColor"/>
					</svg>
					{text}
				</Button>
			</DialogTrigger>
			
			<DialogContent>
			
				<DialogHeader>
					
					<DialogTitle
						className={`text-center ${EstedadSemiBold} text-xl mb-6`}
					>
						خروج
					</DialogTitle>
					
					<DialogDescription className="text-center text-text">
						آیا مایل به خروج از حساب کاربری خود هستید؟
					</DialogDescription>
					
				</DialogHeader>
				
				<DialogFooter className="mt-4">
					<div className="mx-auto *:w-[117px]">
						<Button
							onClick={logout}
							className="mr-3 bg-[#FFF2F2] hover:bg-[#FFF2F2] text-[#C30000]"
						>
							خروج
						</Button>
						
						<Button onClick={() => setOpen(false)} >بازگشت</Button>
					</div>
				</DialogFooter>
				
			</DialogContent>
			
		</Dialog>
	)
}