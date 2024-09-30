"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getCookie, setCookie, hasCookie } from "cookies-next";

import BirthDateInput from "./BirthDateInput";

import { Input } from "ui/Input";
import { Button } from "ui/Button";

import { refreshMyAccessToken, showSwal } from "u/helpers";
import { emailRegex } from "u/constants";

import { EstedadMedium } from "@/app/Fonts";

import type { Value } from "react-multi-date-picker";



export default function PersonalDataForm() {
	
	const router = useRouter();
	
	const [canChangeData, setCanChangeData] = useState(false);
	
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [nickName, setNickName] = useState("");
	
	const [value, setValue] = useState<Value>(new Date());
	// this one is for birthday input. im too lazy rn to change the name in two different files.
	
	
	
	useEffect(() => {
		
		const getUserData = async () => {
			
			const token = getCookie("token");
			if (token) {
				
				const res = await fetch(`${process.env.BASE_URL}/profile/user-detail/`, {
					method: "GET",
					headers: {
						"Authorization": `Bearer ${token}`
					}
				});
				
				const data = await res.json();
				console.log(data)
				
			} else {
				await refreshMyAccessToken(router);
				getUserData();
			}
		}
		getUserData()
		
	}, [])
	
	async function submitNewUserData(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		
		if (!firstName.trim() || !lastName.trim() || !email.trim() || !phoneNumber.trim()) {
			return showSwal("یکی از فیلدهای اجباری خالی است", "error", "باشه");
		}
		
		const isEmailValid = email.match(emailRegex);
		if (!isEmailValid) {
			return showSwal("ایمیل وارد شده معتبر نیست", "error", "باشه");
		}
		
		const token = getCookie("token");
		
		const userData = {
			first_name: firstName,
			last_name: lastName,
			username: email,
			phone_number: phoneNumber,
			nick_name: nickName,
			birth_date: value
		}
		console.log(userData);
		/*
			birth_date: Sun Sep 29 2024 21:07:59 GMT+0330 (Iran Standard Time) {}
			first_name: "۱۱۱۱۱۱۱۱۱"
			last_name: "۲۲۲۲۲۲۲۲۲۲۲۲"
			nick_name: ""
			phone_number: "432432432"
			username: "sjkfhj@fkjsl.com"
		*/
		
		const res = await fetch(`${process.env.BASE_URL}/profile/edit/`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			}
		});
	}
	
	
	
	
	return (
		<form
			className="flex flex-col justify-items pt-4 lg:pt-8 *:flex-wrap"
			onSubmit={submitNewUserData}
		>
			<div
				className={`flex *:w-full lg:*:w-[308px] xl:*:w-[350px] *:mb-3 lg:*:mb-6
				${canChangeData ? "*:border-text" : ""}`}
			>
                <Input
					disabled={!canChangeData}
					placeholder="نام"
					className="lg:ml-4"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<Input
					disabled={!canChangeData}
					placeholder="نام خانوادگی"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
            </div>
            
			<div
				className={`flex *:w-full lg:*:w-[308px] xl:*:w-[350px] *:mb-3 lg:*:mb-6
				${canChangeData ? "*:border-text" : ""}`}
			>
                <Input
					disabled={!canChangeData}
					placeholder="ادرس ایمیل"
					type="email"
					className="lg:ml-4"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
                <Input
					disabled={!canChangeData}
					placeholder="phone number"
					type="number"
					className="ltr"
					value={phoneNumber}
					onChange={(e) => setPhoneNumber(e.target.value)}
				/>
            </div>
            
			<div
				className="flex justify-items *:w-full lg:*:w-[308px] xl:*:w-[350px] *:mb-3 lg:*:mb-6"
			>
                <BirthDateInput
					canChangeData={canChangeData}
					value={value}
					setValue={setValue}
				/>
				<Input
					disabled={!canChangeData}
					className={`lg:mr-4 ${canChangeData ? "border-text" : ""}`}
					placeholder="نام نمایشی"
					value={nickName}
					onChange={(e) => setNickName(e.target.value)}
				/>
            </div>
			
			{
				canChangeData ? (
					<div
						className="flex justify-between md:justify-items w-full mt-2 lg:mt-0"
					>
						<Button
							variant="outline"
							className={`border border-primary text-primary hover:bg-white hover:text-primary
							w-[48%] md:w-[150px] h-8 sm:h-10 rounded text-xs sm:text-sm md:text-base`}
							onClick={() => setCanChangeData(false)}
						>
							انصراف
						</Button>
						<Button
							type="submit"
							className={`border border-primary hover:bg-[] md:mr-4
							w-[48%] md:w-[150px] h-8 sm:h-10 rounded
							text-xs sm:text-sm md:text-base`}
						>
							ذخیره اطلاعات
						</Button>
					</div>
				) : (
					<Button
						variant="outline"
						className={`flex justify-items text-primary w-[170px] sm:w-[220px] md:w-[274px]
						rounded h-8 sm:h-10 border border-primary leading-[180%] ${EstedadMedium} mb-7
						text-xs sm:text-sm md:text-base mt-2 lg:mt-0 hover:bg-white hover:text-primary px-0`}
						onClick={() => setCanChangeData(true)}
					>
						<svg className="hidden sm:block ml-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M6.03999 19.52C5.42999 19.52 4.85999 19.31 4.44999 18.92C3.92999 18.43 3.67999 17.69 3.76999 16.89L4.13999 13.65C4.20999 13.04 4.57999 12.23 5.00999 11.79L13.22 3.09999C15.27 0.929988 17.41 0.869988 19.58 2.91999C21.75 4.96999 21.81 7.10999 19.76 9.27999L11.55 17.97C11.13 18.42 10.35 18.84 9.73999 18.94L6.51999 19.49C6.34999 19.5 6.19999 19.52 6.03999 19.52ZM16.43 2.90999C15.66 2.90999 14.99 3.38999 14.31 4.10999L6.09999 12.81C5.89999 13.02 5.66999 13.52 5.62999 13.81L5.25999 17.05C5.21999 17.38 5.29999 17.65 5.47999 17.82C5.65999 17.99 5.92999 18.05 6.25999 18L9.47999 17.45C9.76999 17.4 10.25 17.14 10.45 16.93L18.66 8.23999C19.9 6.91999 20.35 5.69999 18.54 3.99999C17.74 3.22999 17.05 2.90999 16.43 2.90999Z" fill="#417F56"/>
							<path d="M17.8404 10.95C17.8204 10.95 17.7904 10.95 17.7704 10.95C14.6504 10.64 12.1404 8.26997 11.6604 5.16997C11.6004 4.75997 11.8804 4.37997 12.2904 4.30997C12.7004 4.24997 13.0804 4.52997 13.1504 4.93997C13.5304 7.35997 15.4904 9.21997 17.9304 9.45997C18.3404 9.49997 18.6404 9.86997 18.6004 10.28C18.5504 10.66 18.2204 10.95 17.8404 10.95Z" fill="#417F56"/>
							<path d="M21.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22C2.75 21.59 3.09 21.25 3.5 21.25H21.5C21.91 21.25 22.25 21.59 22.25 22C22.25 22.41 21.91 22.75 21.5 22.75Z" fill="#417F56"/>
						</svg>
						
						<svg className="sm:hidden ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.0007 15.1666H6.00065C2.38065 15.1666 0.833984 13.6199 0.833984 9.99992V5.99992C0.833984 2.37992 2.38065 0.833252 6.00065 0.833252H7.33398C7.60732 0.833252 7.83398 1.05992 7.83398 1.33325C7.83398 1.60659 7.60732 1.83325 7.33398 1.83325H6.00065C2.92732 1.83325 1.83398 2.92659 1.83398 5.99992V9.99992C1.83398 13.0733 2.92732 14.1666 6.00065 14.1666H10.0007C13.074 14.1666 14.1673 13.0733 14.1673 9.99992V8.66659C14.1673 8.39325 14.394 8.16659 14.6673 8.16659C14.9407 8.16659 15.1673 8.39325 15.1673 8.66659V9.99992C15.1673 13.6199 13.6207 15.1666 10.0007 15.1666Z" fill="#417F56"/>
							<path d="M5.66688 11.7934C5.26022 11.7934 4.88688 11.6467 4.61355 11.38C4.28688 11.0534 4.14688 10.58 4.22022 10.08L4.50688 8.07337C4.56022 7.68671 4.81355 7.18671 5.08688 6.91337L10.3402 1.66004C11.6669 0.333372 13.0135 0.333372 14.3402 1.66004C15.0669 2.38671 15.3935 3.12671 15.3269 3.86671C15.2669 4.46671 14.9469 5.05337 14.3402 5.65337L9.08688 10.9067C8.81355 11.18 8.31355 11.4334 7.92688 11.4867L5.92022 11.7734C5.83355 11.7934 5.74688 11.7934 5.66688 11.7934ZM11.0469 2.36671L5.79355 7.62004C5.66688 7.74671 5.52022 8.04004 5.49355 8.21337L5.20688 10.22C5.18022 10.4134 5.22022 10.5734 5.32022 10.6734C5.42022 10.7734 5.58022 10.8134 5.77355 10.7867L7.78022 10.5C7.95355 10.4734 8.25355 10.3267 8.37355 10.2L13.6269 4.94671C14.0602 4.51337 14.2869 4.12671 14.3202 3.76671C14.3602 3.33337 14.1335 2.87337 13.6269 2.36004C12.5602 1.29337 11.8269 1.59337 11.0469 2.36671Z" fill="#417F56"/>
							<path d="M13.233 6.55343C13.1864 6.55343 13.1397 6.54677 13.0997 6.53343C11.3464 6.0401 9.95305 4.64677 9.45971 2.89343C9.38638 2.62677 9.53971 2.35343 9.80638 2.27343C10.073 2.2001 10.3464 2.35343 10.4197 2.6201C10.8197 4.0401 11.9464 5.16677 13.3664 5.56677C13.633 5.6401 13.7864 5.9201 13.713 6.18677C13.653 6.41343 13.453 6.55343 13.233 6.55343Z" fill="#417F56"/>
						</svg>
						
						ویرایش اطلاعات شخصی
					</Button>
				)
			}
			
		</form>
	)
}