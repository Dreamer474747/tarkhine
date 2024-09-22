"use client";
import { Dispatch, SetStateAction } from "react";
import { Button } from "ui/Button";

type FilterBadgeParams = {
	text: string,
	state: boolean,
	setState: Dispatch<SetStateAction<boolean>>
}


export default function FilterOption({ text, state, setState }: FilterBadgeParams) {
	
	
	return (
		<Button
			onClick={() => setState(!state)}
			className={`text-text cursor-pointer mr-1.5 first:mr-0 h-6 sm:h-8 w-fit
			font-bold select-none rounded-lg md:rounded-full 
			text-[10px] leading-[180%] sm:text-sm lg:text-base 
			${state ? "bg-[#e5f2e9] text-primary hover:bg-[#e5f2e9]" :
			"bg-[#ededed] text-text hover:bg-[#ededed]"}`}
		>
			{
				state ? (
					<>
						<svg className="-mr-2 sm:-ml-1 w-4 h-4 sm:w-6 sm:h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5799 15.5801C10.3799 15.5801 10.1899 15.5001 10.0499 15.3601L7.21994 12.5301C6.92994 12.2401 6.92994 11.7601 7.21994 11.4701C7.50994 11.1801 7.98994 11.1801 8.27994 11.4701L10.5799 13.7701L15.7199 8.6301C16.0099 8.3401 16.4899 8.3401 16.7799 8.6301C17.0699 8.9201 17.0699 9.4001 16.7799 9.6901L11.1099 15.3601C10.9699 15.5001 10.7799 15.5801 10.5799 15.5801Z" fill="#417F56"/>
						</svg>
						{text}
					</>
				) : (
					<>
						{text}
						<svg className="-ml-2 mr-1 w-3 h-3 sm:w-4 sm:h-4" width="16" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M10.5 13.78C10.3734 13.78 10.2467 13.7333 10.1467 13.6333L5.80002 9.28668C5.09335 8.58001 5.09335 7.42001 5.80002 6.71335L10.1467 2.36668C10.34 2.17335 10.66 2.17335 10.8534 2.36668C11.0467 2.56001 11.0467 2.88001 10.8534 3.07335L6.50669 7.42001C6.18669 7.74001 6.18669 8.26001 6.50669 8.58001L10.8534 12.9267C11.0467 13.12 11.0467 13.44 10.8534 13.6333C10.7534 13.7267 10.6267 13.78 10.5 13.78Z" fill="#353535"/>
						</svg>
					</>
				)
			}
		</Button>
	)
}