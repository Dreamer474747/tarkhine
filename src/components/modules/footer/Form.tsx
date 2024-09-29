"use client";
import { useState } from "react";

import { toPersianNumber, showSwal } from "u/helpers";


const Form = () => {
	
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	
	
	const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
	
	const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		if (!name.trim() || !phone.trim() || !message.trim()) {
			return showSwal("حداقل یکی از فیلدهای اجباری خالی است", "error", "باشه");
		}
		
		const isEmailValid = email.match(emailRegex);
		if (!isEmailValid) {
			return showSwal("ایمیل وارد شده معتبر نیست", "error", "باشه");
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
		
		const res = await fetch(`${process.env.BASE_URL}/contact-us/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(messageObj)
		});
		
		if (res.ok) {
			setName("");
			setPhone("");
			setEmail("");
			setMessage("");
			
			return showSwal("پیام شما با موفقیت ارسال شد", "success", "عالی");
		}
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
							className="custom-placeholder ltr"
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
				<button
					type="submit"
					className={`text-white w-[163px] h-10 border border-[#717171] rounded
					absolute -bottom-16 left-0`}
				>
					ارسال پیام
				</button>
			</form>
		</div>
	)
}

export default Form;