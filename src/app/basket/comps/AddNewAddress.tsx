"use client";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

import { deleteCookie } from "cookies-next";

import toast, { Toaster } from "react-hot-toast";
import { EstedadSemiBold } from "@/app/Fonts";

import { Button } from "ui/Button";
import { Input } from "ui/Input";
import { Textarea } from "ui/Textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "ui/Dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "ui/Select"


type AddNewAddressParams = {
	recipientName: string,
	setRecipientName: Dispatch<SetStateAction<string>>,
	phone: string | number,
	setPhone: Dispatch<SetStateAction<string | number>>,
	address: string,
	setAddress: Dispatch<SetStateAction<string>>,
	branchCode: string,
	setBranchCode: Dispatch<SetStateAction<string>>,
	setShowAddressInfo: Dispatch<SetStateAction<boolean>>,
}


export default function AddNewAddress({ recipientName, setRecipientName, phone, setPhone, address, setAddress,
branchCode, setBranchCode, setShowAddressInfo }: AddNewAddressParams) {
	
	const router = useRouter();
	const [open, setOpen] = useState(false);
	
	const submitChanges = () => {
		
		if (!recipientName.trim() || (`${phone}`).length === 0 || !address.trim() || !branchCode) {
			return toast.error((t) => (
				<span className="text-center">
					یکی از فیلدها خالی است
				</span>
			));
			
		} else if ((`${phone}`).length < 11) {
			return toast.error((t) => (
				<span className="text-center">
					شماره موبایل نمی‌تواند کمتر از ۱۱ عدد باشد
				</span>
			));
		} else if (address.length < 10) {
			return toast.error((t) => (
				<span className="text-center">
					ادرس خانه نمی‌تواند کمتر از ۱۰ حرف باشد
				</span>
			));
		}
		
		setShowAddressInfo(true);
		setOpen(false);
	}
	
	return (
		<Dialog open={open} onOpenChange={setOpen} >
		
			<DialogTrigger asChild>
				<Button className="text-primary text-xs bg-white hover:bg-white p-0 m-0">
					
					<svg className="ml-0.5" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.24611 16.3813C3.45068 13.5858 3.45068 9.04149 6.24611 6.24607C9.04154 3.45064 13.5859 3.45064 16.3813 6.24607C19.1767 9.04149 19.1767 13.5858 16.3813 16.3813C13.5859 19.1767 9.04154 19.1767 6.24611 16.3813ZM15.6742 6.95317C13.27 4.54901 9.35738 4.54901 6.95321 6.95317C4.54905 9.35734 4.54905 13.27 6.95321 15.6742C9.35738 18.0783 13.27 18.0783 15.6742 15.6742C18.0784 13.27 18.0784 9.35734 15.6742 6.95317Z" fill="#417F56"/>
						<path d="M8.292 11.6674C8.20244 11.5778 8.14587 11.4552 8.14587 11.3138C8.14587 11.0404 8.37214 10.8141 8.64556 10.8141H13.9819C14.2553 10.8141 14.4815 11.0404 14.4815 11.3138C14.4815 11.5872 14.2553 11.8135 13.9819 11.8135H8.64556C8.50885 11.8182 8.38157 11.7569 8.292 11.6674Z" fill="#417F56"/>
						<path d="M10.9602 14.3355C10.8706 14.246 10.814 14.1234 10.814 13.982L10.814 8.64567C10.814 8.37225 11.0403 8.14598 11.3137 8.14598C11.5871 8.14598 11.8134 8.37225 11.8134 8.64567L11.8134 13.982C11.8134 14.2554 11.5871 14.4817 11.3137 14.4817C11.1723 14.4817 11.0497 14.4251 10.9602 14.3355Z" fill="#417F56"/>
					</svg>
					افزودن یا تغییر آدرس
					
				</Button>
			</DialogTrigger>
			
			<DialogContent>
			
				<DialogHeader>
					
					<DialogTitle
						className={`text-center ${EstedadSemiBold} text-xl mb-6`}
					>
						ثبت آدرس
					</DialogTitle>
					
				</DialogHeader>
				
				<div className="rtl *:mb-6">
					<div className="relative">
						<Input
							placeholder="نام گیرنده"
							value={recipientName}
							onChange={(e) => setRecipientName(e.target.value)}
						/>
						
						<span
							className="absolute text-xs -top-[10.5px] right-4 bg-white px-0.5"
						>
							نام گیرنده
						</span>
					</div>
					
					<div className="relative">
						<Input
							placeholder="۰۹۱۱ ۱۲۳ ۱۲۳۴"
							type="number"
							value={phone}
							className="ltr"
							onChange={(e) => setPhone(e.target.value)}
						/>
						
						<span
							className="absolute text-xs -top-[10.5px] right-4 bg-white px-0.5"
						>
							شماره همراه
						</span>
					</div>
					
					<div className="relative">
						<Textarea
							placeholder="آدرس دقیق شما"
							value={address}
							onChange={(e) => setAddress(e.target.value)}
							className="resize-none"
						/>
						
						<span
							className="absolute text-xs -top-[11px] right-4 bg-white px-0.5"
						>
							آدرس دقیق شما
						</span>
					</div>
					
					<Select
						value={branchCode}
						onValueChange={(value) => setBranchCode(value)}
					>
						<SelectTrigger>
							<SelectValue placeholder="شعبه" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="c502523b-8dfc-450f-985b-0244780e23dc">شعبه اقدسیه</SelectItem>
							<SelectItem value="56ef841e-9f3b-4370-82ab-af93b91150dd">شعبه ونک</SelectItem>
							<SelectItem value="14c45ea1-99ef-4163-b8a1-fb334f73a4cd">شعبه چالوس</SelectItem>
							<SelectItem value="afe9e98d-4aaa-476e-befa-d7676e76f90d">شعبه اکباتان</SelectItem>
						</SelectContent>
					</Select>
				</div>
				
				<DialogFooter className="mt-4">
					
					<div className="mx-auto *:w-[117px]">
						<Button
							onClick={submitChanges}
							className="mr-3"
						>
							ثبت آدرس
						</Button>
						
						<Button onClick={() => setOpen(false)} >بازگشت</Button>
					</div>
					<Toaster />
				</DialogFooter>
				
			</DialogContent>
			
		</Dialog>
	)
}