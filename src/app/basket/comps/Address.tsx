import { Dispatch, SetStateAction, useState } from "react";

import { Button } from "ui/Button";
import { Separator } from "ui/Separator";

import { toPersianNumber } from "u/helpers";

import AddNewAddress from "./AddNewAddress";


type AddressParams = {
	recipientName: string,
	setRecipientName: Dispatch<SetStateAction<string>>,
	phone: string | number,
	setPhone: Dispatch<SetStateAction<string | number>>,
	address: string,
	setAddress: Dispatch<SetStateAction<string>>,
	branchCode: string,
	setBranchCode: Dispatch<SetStateAction<string>>,
	showAddressInfo: boolean,
	setShowAddressInfo: Dispatch<SetStateAction<boolean>>,
}


export default function Address({ recipientName, setRecipientName, phone, setPhone, address, setAddress,
branchCode, setBranchCode, showAddressInfo, setShowAddressInfo }: AddressParams) {
	
	// تهران: اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰
	// سردار وظیفه
	// ۰۹۱۴ ۸۶۴ ۳۳۵۰
	
	return (
		
		<div
			className="border w-full h-[205px] mb-4 rounded-lg p-3 pt-0 sm:px-6 sm:py-4 flex flex-col"
		>
			<div className="flex justify-between items-center">
				<h5 className="flex justify-between items-center">
					<svg className="ml-1" width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 14.6699C9.87 14.6699 8.13 12.9399 8.13 10.7999C8.13 8.65994 9.87 6.93994 12 6.93994C14.13 6.93994 15.87 8.66994 15.87 10.8099C15.87 12.9499 14.13 14.6699 12 14.6699ZM12 8.43994C10.7 8.43994 9.63 9.49994 9.63 10.8099C9.63 12.1199 10.69 13.1799 12 13.1799C13.31 13.1799 14.37 12.1199 14.37 10.8099C14.37 9.49994 13.3 8.43994 12 8.43994Z" fill="#353535"/>
						<path d="M12 23.26C10.52 23.26 9.02999 22.7 7.86999 21.59C4.91999 18.75 1.65999 14.22 2.88999 8.83C3.99999 3.94 8.26999 1.75 12 1.75C12 1.75 12 1.75 12.01 1.75C15.74 1.75 20.01 3.94 21.12 8.84C22.34 14.23 19.08 18.75 16.13 21.59C14.97 22.7 13.48 23.26 12 23.26ZM12 3.25C9.08999 3.25 5.34999 4.8 4.35999 9.16C3.27999 13.87 6.23999 17.93 8.91999 20.5C10.65 22.17 13.36 22.17 15.09 20.5C17.76 17.93 20.72 13.87 19.66 9.16C18.66 4.8 14.91 3.25 12 3.25Z" fill="#353535"/>
					</svg>
					آدرس‌ها
				</h5>
				
				<AddNewAddress
					recipientName={recipientName}
					setRecipientName={setRecipientName}
					phone={phone}
					setPhone={setPhone}
					address={address}
					setAddress={setAddress}
					branchCode={branchCode}
					setBranchCode={setBranchCode}
					setShowAddressInfo={setShowAddressInfo}
				/>
			</div>
			
			<Separator className="bg-[#cbcbcb] my-3" />
			
			{
				showAddressInfo ? (
					
					<div className="rounded-lg border bg-[#f9f9f9] px-2 py-4 sm:p-4 text-center">
						
						<p className="text-xs sm:text-sm lg:text-base">
							{address}
						</p>
						
						<div
							className={`flex justify-between items-center text-[10px] leading-[180%] xs--sm:text-xs
							text-[#717171] mt-4`}
						>
							
							<p className="">
								{recipientName}
							</p>
							
							<p className="ltr">
								{toPersianNumber(+phone)}
							</p>
							
						</div>
						
					</div>
					
				) : (
					<p className="text-center h-full flex justify-items">
						ادرس خود را وارد کنید.
					</p>
				)
			}
			
		</div>
	)
}