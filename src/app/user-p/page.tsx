"use client";
import { EstedadMedium } from "@/app/Fonts";

import { Input } from "ui/Input";
import { Button } from "ui/Button";
import BirthDateInput from "./components/BirthDateInput";


export default function Page() {
	
	
	return (
		<form
			className="flex flex-col justify-items pt-8 *:flex-wrap"
		>
			<div
				className="flex *:w-full lg:*:w-[310px] xl:*:w-[350px] *:mb-3 lg:*:mb-6 *:border-text"
			>
                <Input placeholder="نام" className="lg:ml-4" />
                <Input placeholder="نام خانوادگی" />
            </div>
            
			<div
				className="flex *:w-full lg:*:w-[310px] xl:*:w-[350px] *:mb-3 lg:*:mb-6 *:border-text"
			>
                <Input placeholder="ادرس ایمیل" className="lg:ml-4 ltr" />
                <Input placeholder="user number" className="ltr" />
            </div>
            
			<div
				className="flex justify-items *:w-full lg:*:w-[310px] xl:*:w-[350px] *:mb-3 lg:*:mb-6"
			>
                <BirthDateInput />
				<Input className="lg:mr-4 border-text" placeholder="نام نمایشی" />
            </div>
			
			<Button
				type="submit"
				variant="outline"
				className={`flex justify-items rounded text-primary w-[155px] sm:w-[274px]
				h-8 sm:h-10 border border-primary leading-[180%] ${EstedadMedium}
				-m-2 mb-7 text-xs sm:text-base mt-2 lg:mt-0 hover:bg-white hover:text-primary`}
			>
				<svg className="ml-2" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.03999 19.52C5.42999 19.52 4.85999 19.31 4.44999 18.92C3.92999 18.43 3.67999 17.69 3.76999 16.89L4.13999 13.65C4.20999 13.04 4.57999 12.23 5.00999 11.79L13.22 3.09999C15.27 0.929988 17.41 0.869988 19.58 2.91999C21.75 4.96999 21.81 7.10999 19.76 9.27999L11.55 17.97C11.13 18.42 10.35 18.84 9.73999 18.94L6.51999 19.49C6.34999 19.5 6.19999 19.52 6.03999 19.52ZM16.43 2.90999C15.66 2.90999 14.99 3.38999 14.31 4.10999L6.09999 12.81C5.89999 13.02 5.66999 13.52 5.62999 13.81L5.25999 17.05C5.21999 17.38 5.29999 17.65 5.47999 17.82C5.65999 17.99 5.92999 18.05 6.25999 18L9.47999 17.45C9.76999 17.4 10.25 17.14 10.45 16.93L18.66 8.23999C19.9 6.91999 20.35 5.69999 18.54 3.99999C17.74 3.22999 17.05 2.90999 16.43 2.90999Z" fill="#417F56"/>
					<path d="M17.8404 10.95C17.8204 10.95 17.7904 10.95 17.7704 10.95C14.6504 10.64 12.1404 8.26997 11.6604 5.16997C11.6004 4.75997 11.8804 4.37997 12.2904 4.30997C12.7004 4.24997 13.0804 4.52997 13.1504 4.93997C13.5304 7.35997 15.4904 9.21997 17.9304 9.45997C18.3404 9.49997 18.6404 9.86997 18.6004 10.28C18.5504 10.66 18.2204 10.95 17.8404 10.95Z" fill="#417F56"/>
					<path d="M21.5 22.75H3.5C3.09 22.75 2.75 22.41 2.75 22C2.75 21.59 3.09 21.25 3.5 21.25H21.5C21.91 21.25 22.25 21.59 22.25 22C22.25 22.41 21.91 22.75 21.5 22.75Z" fill="#417F56"/>
				</svg>
				ویرایش اطلاعات شخصی
			</Button>
			
		</form>
	)
}