"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { EstedadSemiBold } from "@/app/Fonts";

import { Button } from "ui/Button";
import { Input } from "ui/Input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "ui/Dialog";


export default function SearchBtn() {
	
	const router = useRouter();
	
	const [searchValue, setSearchValue] = useState("");
	
	const search = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		router.replace(`/${searchValue}`);
	}
	
	
	return (
		<Dialog>
		
			<DialogTrigger asChild>
				<li id="search" className="hidden lg:block">
					<Button
						className={`bg-[#E5F2E9] hover:bg-[#E5F2E9] w-10 h-10
						flex justify-center rounded p-0`}
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#417F56"/>
							<path d="M22.0004 22.7504C21.8104 22.7504 21.6204 22.6804 21.4704 22.5304L19.4704 20.5304C19.1804 20.2404 19.1804 19.7604 19.4704 19.4704C19.7604 19.1804 20.2404 19.1804 20.5304 19.4704L22.5304 21.4704C22.8204 21.7604 22.8204 22.2404 22.5304 22.5304C22.3804 22.6804 22.1904 22.7504 22.0004 22.7504Z" fill="#417F56"/>
						</svg>
					</Button>
				</li>
			</DialogTrigger>
			
			<DialogContent>
			
				<DialogHeader>
					
					<DialogTitle
						className={`text-center ${EstedadSemiBold} text-xl mb-6`}
					>
						جستجو
					</DialogTitle>
					
					<DialogDescription className="text-center text-text rtl">
						اسم محصول مورد نظرتان را وارد کنید.
					</DialogDescription>
					
				</DialogHeader>
				
				<DialogFooter className="mt-4">
					<form
						className="max-w-md container relative rtl"
						onSubmit={search}
					>
						
						<Input
							value={searchValue}
							onChange={(e) => setSearchValue(e.target.value)}
							placeholder="جستجو"
							className="pl-11"
						/>
						
						<Button
							className={`absolute left-7 top-0 flex justify-items bg-transparent
							hover:bg-transparent`}
						>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.66634 14.5C3.89967 14.5 0.833008 11.4333 0.833008 7.66665C0.833008 3.89998 3.89967 0.833313 7.66634 0.833313C11.433 0.833313 14.4997 3.89998 14.4997 7.66665C14.4997 11.4333 11.433 14.5 7.66634 14.5ZM7.66634 1.83331C4.44634 1.83331 1.83301 4.45331 1.83301 7.66665C1.83301 10.88 4.44634 13.5 7.66634 13.5C10.8863 13.5 13.4997 10.88 13.4997 7.66665C13.4997 4.45331 10.8863 1.83331 7.66634 1.83331Z" fill="#353535"/>
								<path d="M14.6666 15.1667C14.54 15.1667 14.4133 15.12 14.3133 15.02L12.98 13.6867C12.7866 13.4934 12.7866 13.1734 12.98 12.98C13.1733 12.7867 13.4933 12.7867 13.6866 12.98L15.02 14.3134C15.2133 14.5067 15.2133 14.8267 15.02 15.02C14.92 15.12 14.7933 15.1667 14.6666 15.1667Z" fill="#353535"/>
							</svg>
						</Button>
						
					</form>
				</DialogFooter>
				
			</DialogContent>
			
		</Dialog>
	)
}