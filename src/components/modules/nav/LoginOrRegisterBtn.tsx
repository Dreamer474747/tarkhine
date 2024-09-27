"use client";
import Link from "next/link";

import { useState, useEffect } from "react";

import Image from "next/image";
import { EstedadSemiBold } from "@/app/Fonts";

import { Button } from "ui/Button";
import { Input } from "ui/Input";

import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from "ui/InputOTP";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "ui/Dialog";



export default function LoginOrRegisterBtn() {
	
	const [isEmailEntered, setIsEmailEntered] = useState(false);
	const [isOtpSent, setIsOtpSent] = useState(false);
	
	const [email, setEmail] = useState("");
	
	const [optCode, setOptCode] = useState("");
	const [open, setOpen] = useState(false);
	
	useEffect(() => {
		
		return () => {
			if (!isEmailEntered) {
				setOptCode("");
			}
		}
	}, []);
	
	
	const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
	
	const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		
		setEmail(event.target.value);
		
		const isEmailValid = event.target.value.match(emailRegex);
		if (isEmailValid) {
			setIsEmailEntered(true);
		} else {
			setIsEmailEntered(false);
		}
	}
	
	const signInOrRegister = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		const res = await fetch(`${process.env.BASE_URL}/auth/login/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email, password: "12345678" })
		})
		
		console.log(res)
		
		const data = await res.json();
		console.log(data)
		
		// setIsOtpSent(true);
	}
	
	
	return (
		<Dialog open={open} onOpenChange={setOpen}>
		
			<DialogTrigger asChild>
				<Button
					className={`bg-[#E5F2E9] hover:bg-[#E5F2E9] w-[30px] h-[30px] sm:w-10 sm:h-10
					flex justify-center rounded p-0 nav-action`}
				>
					<svg className="h-full w-[18px] sm:w-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 12.75C8.83 12.75 6.25 10.17 6.25 7C6.25 3.83 8.83 1.25 12 1.25C15.17 1.25 17.75 3.83 17.75 7C17.75 10.17 15.17 12.75 12 12.75ZM12 2.75C9.66 2.75 7.75 4.66 7.75 7C7.75 9.34 9.66 11.25 12 11.25C14.34 11.25 16.25 9.34 16.25 7C16.25 4.66 14.34 2.75 12 2.75Z" fill="#417F56"/>
						<path d="M20.5901 22.75C20.1801 22.75 19.8401 22.41 19.8401 22C19.8401 18.55 16.3202 15.75 12.0002 15.75C7.68015 15.75 4.16016 18.55 4.16016 22C4.16016 22.41 3.82016 22.75 3.41016 22.75C3.00016 22.75 2.66016 22.41 2.66016 22C2.66016 17.73 6.85015 14.25 12.0002 14.25C17.1502 14.25 21.3401 17.73 21.3401 22C21.3401 22.41 21.0001 22.75 20.5901 22.75Z" fill="#417F56"/>
					</svg>
				</Button>
			</DialogTrigger>
			
			<DialogContent>
			
				<DialogHeader>
					
					<DialogTitle>
						<Image
							width="100"
							height="32"
							src="/images/Logo.png"
							alt="logo"
							className="mx-auto"
						/>
					</DialogTitle>
					
					<DialogDescription className="text-center text-text rtl">
						<span className={`${EstedadSemiBold} mt-3 mb-2 block`}>
							{
								isOtpSent ? "کد تایید" : "ورود / ثبت ‌نام"
							}
						</span>
						
						<span className="text-[#717171] text-xs block">
							{
								isOtpSent ? "کد تایید پنج‌رقمی به ایمیل " + email + " ارسال شد." : "با وارد کردن ایمیل کد تاییدی برای شما ارسال خواهد شد."
							}
						</span>
					</DialogDescription>
					
				</DialogHeader>
				
				<DialogFooter className="mt-2 flex mx-auto">
					{
						isOtpSent ? (
							<div
								className="flex flex-col"
							>
								<InputOTP
									maxLength={5}
									value={optCode}
									onChange={(optCode) => setOptCode(optCode)}
									className="flex justify-center"
								>
									<InputOTPGroup>
										<InputOTPSlot
											className="border-text"
											index={0}
										/>
									</InputOTPGroup>
									<InputOTPGroup>
										<InputOTPSlot
											className="border-text"
											index={1}
										/>
									</InputOTPGroup>
									<InputOTPGroup>
										<InputOTPSlot
											className="border-text"
											index={2}
										/>
									</InputOTPGroup>
									<InputOTPGroup>
										<InputOTPSlot
											className="border-text"
											index={3}
										/>
									</InputOTPGroup>
									<InputOTPGroup>
										<InputOTPSlot
											className="border-text"
											index={4}
										/>
									</InputOTPGroup>
								</InputOTP>
								
								<div className="flex justify-between rtl mt-1.5">
									<p className="text-xs flex">
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M7.99967 15.1666C4.04634 15.1666 0.833008 11.9533 0.833008 7.99992C0.833008 4.04659 4.04634 0.833252 7.99967 0.833252C11.953 0.833252 15.1663 4.04659 15.1663 7.99992C15.1663 11.9533 11.953 15.1666 7.99967 15.1666ZM7.99967 1.83325C4.59967 1.83325 1.83301 4.59992 1.83301 7.99992C1.83301 11.3999 4.59967 14.1666 7.99967 14.1666C11.3997 14.1666 14.1663 11.3999 14.1663 7.99992C14.1663 4.59992 11.3997 1.83325 7.99967 1.83325Z" fill="#717171"/>
											<path d="M10.4731 10.6199C10.3864 10.6199 10.2998 10.5999 10.2198 10.5466L8.1531 9.31326C7.63977 9.00659 7.25977 8.33326 7.25977 7.73992V5.00659C7.25977 4.73326 7.48643 4.50659 7.75977 4.50659C8.0331 4.50659 8.25977 4.73326 8.25977 5.00659V7.73992C8.25977 7.97992 8.45977 8.33326 8.66643 8.45326L10.7331 9.68659C10.9731 9.82659 11.0464 10.1333 10.9064 10.3733C10.8064 10.5333 10.6398 10.6199 10.4731 10.6199Z" fill="#717171"/>
										</svg>
										
										<span className="mx-0.5">
											۱:۵۹
										</span>
										تا دریافت مجدد کد
									</p>
									
									<Button
										className="h-4 bg-white hover:bg-white text-primary text-xs p-0 m-0"
										onClick={() => setIsOtpSent(false)}
									>
										ویرایش ایمیل
									</Button>
								</div>
								
								<form>
									<Button
										className="w-full mt-4"
										disabled={optCode.length !== 5}
									>
										ثبت کد
									</Button>
								</form>
							</div>
						) : (
							<div className="flex flex-col items-center w-full">
								<form
									className="w-full"
									onSubmit={signInOrRegister}
								>
									
									<div className="relative">
										<Input
											placeholder="ایمیل"
											type="email"
											value={email}
											onChange={emailHandler}
										/>
										
										<span
											className="absolute text-xs -top-[10.5px] right-4 bg-white px-0.5"
											>
											ایمیل
										</span>
									</div>
									
									<Button
										className="w-full mt-3"
										disabled={!isEmailEntered}
									>
										ادامه
									</Button>
									
								</form>
								<p className="text-[10px] leading-[180%] rtl mt-3">
									ورود و عضویت در ترخینه به منزله قبول
									{" "}
									<Link className="text-primary" href="/rules">قوانین و مقررات</Link>
									{" "}
									است.
								</p>
							</div>
						)
					}
					
				</DialogFooter>
				
			</DialogContent>
			
		</Dialog>
	)
}