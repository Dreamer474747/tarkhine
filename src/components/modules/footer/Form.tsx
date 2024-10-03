"use client";
import { useState, useContext } from "react";

import { toPersianNumber, showSwal } from "u/helpers";
import { emailRegex } from "u/constants";

import { Button } from "ui/Button";

import { ServicesContext } from "@/components/contexts/ServicesProvider";
import type { ServicesContextType } from "u/types";


const Form = () => {
	
	const { isPending, setIsPending } = useContext(ServicesContext) as ServicesContextType;
	
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	
	
	const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		if (!name.trim() || !phone.trim() || !message.trim()) {
			return showSwal("حداقل یکی از فیلدهای اجباری خالی است", "error", "باشه");
			
		} else if (phone.toString().length < 11) {
			return showSwal("شماره موبایل نمی‌تواند کمتر از ۱۱ عدد باشد", "error", "باشه");
			
		} else if (message.length < 10) {
			return showSwal("پیام ارسالی نمی‌تواند کمتر از ۱۰ کارکتر باشد", "error", "باشه");
		}
		
		if (email) {
			const isEmailValid = email.match(emailRegex);
			if (!isEmailValid) {
				return showSwal("ایمیل وارد شده معتبر نیست", "error", "باشه");
			}
		}
		
		let messageObj: {
			name: string,
			phone_number: number | string,
			message: string,
			email?: string
		} = { name, phone_number: phone, message }
		
		if (email) {
			messageObj.email = email
		}
		
		setIsPending(true);
		
		const res = await fetch(`${process.env.BASE_URL}/contact-us/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(messageObj)
		});
		
		if (res.status === 201) {
			setName("");
			setPhone("");
			setEmail("");
			setMessage("");
			
			showSwal("پیام شما با موفقیت ارسال شد", "success", "عالی");
			
		} else {
			showSwal("مشکلی پیش امد، دوباره تلاش کنید", "error", "باشه");
		}
		setIsPending(false);
	}
	
	
	return (
		
		<div className="hidden lg:flex flex-col justify-between h-48">
			<h4 className=" text-white text-xl leading-[140%]">پیام به ترخینه</h4>
	
			<form
				onSubmit={sendMessage}
				className="flex flex-col justify-start text-white relative"
			>
				<div className="flex relative">
					<div
						className={`flex flex-col space-y-3 [&>*]:rounded [&>*]:bg-transparent
						[&>*]:border [&>*]:border-[#717171] [&>*]:p-2 [&>*]:w-[275px] [&>*]:h-10`}
					>
						<input
							placeholder="نام و نام خانوادگی"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="custom-placeholder"
						/>
						
						<input
							placeholder="شماره تماس"
							type="number"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							className="custom-placeholder"
						/>
						
						<input
							placeholder="ادرس ایمیل(اختیاری)"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="custom-placeholder focus:ltr"
						/>
					</div>
	
					<textarea
						placeholder="پیام شما"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						cols={30}
						rows={2}
						maxLength={200}
						className="mr-6 p-2 bg-transparent rounded border border-[#717171] custom-placeholder"
					></textarea>
	
					<p className="absolute bottom-[-17px] left-0 text-xs">
						{toPersianNumber(message.length)}/۲۰۰
					</p>
				</div>
				<Button
					type="submit"
					disabled={isPending}
					className={`text-white w-[163px] h-10 border border-[#717171] rounded
					absolute -bottom-16 left-0 p-0 m-0 bg-transparent hover:bg-transparent`}
				>
					ارسال پیام
				</Button>
			</form>
		</div>
	)
}

export default Form;