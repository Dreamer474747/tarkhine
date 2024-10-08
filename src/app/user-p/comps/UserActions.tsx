"use client";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { getCookie } from "cookies-next";

import { refreshMyAccessToken } from "m/helpers";

import LogoutBtn from "m/LogoutBtn";

import { Separator } from "ui/Separator";

type UserActionsParams = {
	setShowContent?: Dispatch<SetStateAction<boolean>>,
	formControl?: boolean,
}


export default function UserActions({ setShowContent, formControl }: UserActionsParams) {
	
	const router = useRouter();
	
	const pathname = usePathname();
	
	const [nickName, setNickName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	
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
				
				const { nick_name, phone_number } = await res.json();
				
				if (nick_name) {
					setNickName(nick_name);
				}
				
				if (phone_number) {
					setPhoneNumber(phone_number);
				}
				
			} else {
				await refreshMyAccessToken(router);
				getUserData();
			}
		}
		
		getUserData()
		
	}, [formControl])
	
	
	return (
		<div
			className={`w-full sm:w-96 md:w-72 h-[324px] lg:h-[342px] rounded-lg
			sm:border sm:border-[#cbcbcb] py-4 sm:px-2 md:ml-6`}
		>
			<div className="flex items-center">
				
				<Image
					width="88"
					height="88"
					src="/images/default-user-img.jpg"
					alt="default-user-img"
					className="w-[70px] h-[70px] lg:w-[88px] lg:h-[88px]"
				/>
				
				<div className="mr-4 lg--xl:mr-6 mt-5">
					<h4 className="leading-[180%]">
						{ nickName ? nickName : "کاربر ترخینه" }
					</h4>
					<p className="text-[#717171] text-xs ltr">
						{ phoneNumber ? phoneNumber : null }
					</p>
				</div>
			</div>
			
			<Separator className="bg-[#757575] my-2" />
			
			<div
				className={`[&>*]:flex [&>*]:items-center [&>*]:w-fit [&>*]:pr-1 pt-2
				space-y-6 text-sm relative`}
			>
				
				<Link
					href="/user-p"
					className={`user-action transition
					${pathname === "/user-p" ? "current-user-action" : ""}`}
					onClick={() => setShowContent && pathname === "/user-p" && setShowContent(true)}
				>
					<svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.00033 8.49967C5.88699 8.49967 4.16699 6.77967 4.16699 4.66634C4.16699 2.55301 5.88699 0.833008 8.00033 0.833008C10.1137 0.833008 11.8337 2.55301 11.8337 4.66634C11.8337 6.77967 10.1137 8.49967 8.00033 8.49967ZM8.00033 1.83301C6.44033 1.83301 5.16699 3.10634 5.16699 4.66634C5.16699 6.22634 6.44033 7.49967 8.00033 7.49967C9.56033 7.49967 10.8337 6.22634 10.8337 4.66634C10.8337 3.10634 9.56033 1.83301 8.00033 1.83301Z" fill="currentColor"/>
						<path d="M13.7268 15.1667C13.4534 15.1667 13.2268 14.94 13.2268 14.6667C13.2268 12.3667 10.8801 10.5 8.0001 10.5C5.1201 10.5 2.77344 12.3667 2.77344 14.6667C2.77344 14.94 2.54677 15.1667 2.27344 15.1667C2.0001 15.1667 1.77344 14.94 1.77344 14.6667C1.77344 11.82 4.56677 9.5 8.0001 9.5C11.4334 9.5 14.2268 11.82 14.2268 14.6667C14.2268 14.94 14.0001 15.1667 13.7268 15.1667Z" fill="currentColor"/>
					</svg>
					پروفایل
				</Link>
				
				<Link
					href="/user-p/order-tracking"
					className={`user-action transition
					${pathname === "/user-p/order-tracking" ? "current-user-action" : ""}`}
					onClick={() => setShowContent && pathname === "/user-p/order-tracking" && setShowContent(true)}
				>
					<svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.66699 6.5H4.66699C4.39366 6.5 4.16699 6.27333 4.16699 6C4.16699 5.72667 4.39366 5.5 4.66699 5.5H8.66699C8.94033 5.5 9.16699 5.72667 9.16699 6C9.16699 6.27333 8.94033 6.5 8.66699 6.5Z" fill="currentColor"/>
						<path d="M12.6936 9.86613C11.6869 9.86613 10.8336 9.11946 10.7536 8.15946C10.7003 7.60613 10.9003 7.06614 11.3003 6.67281C11.6336 6.32614 12.1069 6.13281 12.6069 6.13281H14.0003C14.6603 6.15281 15.1669 6.67278 15.1669 7.31279V8.68616C15.1669 9.32616 14.6603 9.84613 14.0203 9.86613H12.6936ZM13.9802 7.13281H12.6136C12.3803 7.13281 12.1669 7.21948 12.0136 7.37948C11.8203 7.56614 11.7269 7.81946 11.7536 8.07279C11.7869 8.51279 12.2136 8.86613 12.6936 8.86613H14.0003C14.0869 8.86613 14.1669 8.78616 14.1669 8.68616V7.31279C14.1669 7.21279 14.0869 7.13948 13.9802 7.13281Z" fill="currentColor"/>
						<path d="M10.6663 14.1663H4.66634C2.37301 14.1663 0.833008 12.6263 0.833008 10.333V5.66634C0.833008 3.61301 2.09966 2.12635 4.06632 1.87968C4.24633 1.85301 4.45301 1.83301 4.66634 1.83301H10.6663C10.8263 1.83301 11.033 1.83967 11.2463 1.87301C13.213 2.09967 14.4997 3.59301 14.4997 5.66634V6.63302C14.4997 6.90635 14.273 7.13302 13.9997 7.13302H12.613C12.3797 7.13302 12.1664 7.21968 12.013 7.37968L12.0063 7.38635C11.8197 7.56635 11.733 7.81299 11.753 8.06633C11.7863 8.50633 12.213 8.85966 12.693 8.85966H13.9997C14.273 8.85966 14.4997 9.08633 14.4997 9.35966V10.3263C14.4997 12.6263 12.9597 14.1663 10.6663 14.1663ZM4.66634 2.83301C4.50634 2.83301 4.353 2.84633 4.19967 2.86633C2.733 3.053 1.83301 4.11967 1.83301 5.66634V10.333C1.83301 12.053 2.94634 13.1663 4.66634 13.1663H10.6663C12.3863 13.1663 13.4997 12.053 13.4997 10.333V9.86633H12.693C11.6863 9.86633 10.833 9.11967 10.753 8.15967C10.6997 7.613 10.8997 7.06635 11.2997 6.67969C11.6463 6.32635 12.113 6.13302 12.613 6.13302H13.4997V5.66634C13.4997 4.10634 12.5863 3.03299 11.1063 2.85966C10.9463 2.83299 10.8063 2.83301 10.6663 2.83301H4.66634Z" fill="currentColor"/>
					</svg>
					پیگیری سفارشات
				</Link>
				
				<Link
					href="/user-p/wishlist"
					className={`user-action transition
					${pathname === "/user-p/wishlist" ? "current-user-action" : ""}`}
					onClick={() => setShowContent && setShowContent(true)}
				>
					<svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M7.99967 14.4331C7.79301 14.4331 7.59301 14.4064 7.42634 14.3464C4.87967 13.4731 0.833008 10.3731 0.833008 5.79307C0.833008 3.45974 2.71967 1.56641 5.03967 1.56641C6.16634 1.56641 7.21967 2.00641 7.99967 2.79307C8.77967 2.00641 9.83301 1.56641 10.9597 1.56641C13.2797 1.56641 15.1663 3.46641 15.1663 5.79307C15.1663 10.3797 11.1197 13.4731 8.57301 14.3464C8.40634 14.4064 8.20634 14.4331 7.99967 14.4331ZM5.03967 2.56641C3.27301 2.56641 1.83301 4.01307 1.83301 5.79307C1.83301 10.3464 6.21301 12.8797 7.75301 13.4064C7.87301 13.4464 8.13301 13.4464 8.25301 13.4064C9.78634 12.8797 14.173 10.3531 14.173 5.79307C14.173 4.01307 12.733 2.56641 10.9663 2.56641C9.95301 2.56641 9.01301 3.03974 8.40634 3.85974C8.21967 4.11307 7.79301 4.11307 7.60634 3.85974C6.98634 3.03307 6.05301 2.56641 5.03967 2.56641Z" fill="currentColor"/>
					</svg>
					علاقه‌مندی‌ها
				</Link>
				
				<LogoutBtn text="خروج" />
			</div>
			
		</div>
	)
}