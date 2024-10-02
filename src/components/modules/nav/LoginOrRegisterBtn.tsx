"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { setCookie } from "cookies-next";

import { EstedadSemiBold } from "@/app/Fonts";
import { emailRegex, passwordRegex } from "u/constants";

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

import toast, { Toaster } from "react-hot-toast";


export default function LoginOrRegisterBtn() {
	
	// setCookie('key', 'value', options);
	// getCookie('key', options); // => 'value'
	
	const [isEmailEntered, setIsEmailEntered] = useState(false);
	const [isPasswordEntered, setIsPasswordEntered] = useState(false);
	const [open, setOpen] = useState(false);
	
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	
	
	const signInOrRegister = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		const isEmailValid = email.match(emailRegex);
		const isPasswordValid = password.match(passwordRegex);
		
		if (!isEmailValid) {
			return toast.error((t) => (
				<span className="text-center">
					ایمیل وارد شده معتبر نیست
				</span>
			));
		}
		
		if (!isPasswordValid) {
			return toast.error((t) => (
				<span className="text-center">
					رمز عبور وارد شده باید شامل حداقل یک حرف بزرگ، یک حرف کوچک، بین ۸ تا ۱۵ کاراکتر و یک حرف خاص باشد
				</span>
			));
		}
		
		const res = await fetch(`${process.env.BASE_URL}/auth/login/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ email, password })
		});
		
		if (res.status === 200) {
			const data = await res.json();
			
			setCookie("token", data.token, { maxAge: 60 });
			setCookie("refresh", data.refresh, { maxAge: 60 * 60 * 24 * 15 });
			location.reload();
			
			setOpen(false);
			
		} else if (res.status === 400) {
			return toast.error((t) => (
				<span className="text-center">
					رمز عبور و ایمیل وارد شده صحیح نیستند
				</span>
			));
		}
		
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
							ورود / ثبت ‌نام
						</span>
						
						<span className="text-[#717171] text-xs block">
							با وارد کردن ایمیل کد تاییدی برای شما ارسال خواهد شد.
						</span>
					</DialogDescription>
					
				</DialogHeader>
				
				<DialogFooter className="mt-2 flex mx-auto">
					
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
									onChange={(e) => setEmail(e.target.value)}
								/>
								
								<span
									className="absolute text-xs -top-[10.5px] right-4 bg-white px-0.5"
								>
									ایمیل
								</span>
							</div>
							
							<div className="relative mt-4 mb-2">
								<Input
									placeholder="رمز عبور"
									type="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
								
								<span
									className="absolute text-xs -top-[10.5px] right-4 bg-white px-0.5"
								>
									رمز عبور
								</span>
							</div>
							
							<Button className="w-full mt-3">
								ورود / ثبت ‌نام
							</Button>
							
						</form>
						<p className="text-[10px] leading-[180%] rtl mt-0.5">
							ورود و عضویت در ترخینه به منزله قبول
							{" "}
							<Link className="text-primary" href="/rules">قوانین و مقررات</Link>
							{" "}
							است.
						</p>
						<Toaster />
					</div>
					
				</DialogFooter>
				
			</DialogContent>
			
		</Dialog>
	)
}