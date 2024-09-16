import Image from "next/image";
import { EstedadSemiBold } from "@/app/Fonts";

import { Button } from "ui/Button";

type BranchParams = {
	src: string,
	alt: string,
	name: string,
	address: string,
	phone: string,
}

export default function Branch({ src, alt, name, address, phone }: BranchParams) {
	
	return (
		<div
			className={`w-full md:w-4/5 lg:w-full h-fit lg:h-[284px] flex
			flex-col lg:flex-row branch lg:hover:shadow-lg`}
		>
			
			<div
				className={`w-full lg:w-[450px] xl:w-[600px]
				rounded-r-lg relative`}
			>
				
				<Image
					width="320"
					height="112"
					src={src}
					alt={alt}
					className={`rounded-t-lg lg:rounded-tl-none lg:rounded-r-lg
					w-full h-full object-cover branch-image transition`}
				/>
				
				<div
					className={`absolute left-1/2 top-1/2 transform -translate-x-1/2
					-translate-y-1/2 opacity-0 branch-image-svg`}
				>
					<svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g opacity="0.2">
						<rect x="0.5" y="0.5" width="91" height="91" rx="45.5" fill="white"/>
						<rect x="0.5" y="0.5" width="91" height="91" rx="45.5" stroke="white"/>
						</g>
						<g opacity="0.3">
						<rect x="9.5" y="9.5" width="73" height="73" rx="36.5" fill="white"/>
						<rect x="9.5" y="9.5" width="73" height="73" rx="36.5" stroke="white"/>
						</g>
						<path d="M52.75 70.1875H39.25C27.0325 70.1875 21.8125 64.9675 21.8125 52.75V39.25C21.8125 27.0325 27.0325 21.8125 39.25 21.8125H52.75C64.9675 21.8125 70.1875 27.0325 70.1875 39.25V52.75C70.1875 64.9675 64.9675 70.1875 52.75 70.1875ZM39.25 25.1875C28.8775 25.1875 25.1875 28.8775 25.1875 39.25V52.75C25.1875 63.1225 28.8775 66.8125 39.25 66.8125H52.75C63.1225 66.8125 66.8125 63.1225 66.8125 52.75V39.25C66.8125 28.8775 63.1225 25.1875 52.75 25.1875H39.25Z" fill="#F9F9F9"/>
						<path d="M39.25 43.1875C35.83 43.1875 33.0625 40.42 33.0625 37C33.0625 33.58 35.83 30.8125 39.25 30.8125C42.67 30.8125 45.4375 33.58 45.4375 37C45.4375 40.42 42.67 43.1875 39.25 43.1875ZM39.25 34.1875C37.6975 34.1875 36.4375 35.4475 36.4375 37C36.4375 38.5525 37.6975 39.8125 39.25 39.8125C40.8025 39.8125 42.0625 38.5525 42.0625 37C42.0625 35.4475 40.8025 34.1875 39.25 34.1875Z" fill="#F9F9F9"/>
						<path d="M25.0067 63.325C24.4667 63.325 23.9267 63.055 23.6117 62.5825C23.0942 61.8175 23.2967 60.76 24.0842 60.2425L35.1767 52.795C37.6067 51.1525 40.9592 51.355 43.1642 53.2225L43.9067 53.875C45.0317 54.8425 46.9442 54.8425 48.0467 53.875L57.4067 45.8425C59.7917 43.795 63.5492 43.795 65.9567 45.8425L69.6242 48.9925C70.3217 49.6 70.4117 50.6575 69.8042 51.3775C69.1967 52.075 68.1392 52.165 67.4192 51.5575L63.7517 48.4075C62.6267 47.44 60.7142 47.44 59.5892 48.4075L50.2292 56.44C47.8442 58.4875 44.0867 58.4875 41.6792 56.44L40.9367 55.7875C39.9017 54.91 38.1917 54.82 37.0442 55.6075L25.9517 63.055C25.6592 63.235 25.3217 63.325 25.0067 63.325Z" fill="#F9F9F9"/>
					</svg>
				</div>
				
				
			</div>
			
			<div
				className={`flex flex-col justify-around items-center grow
				rounded-b-lg lg:rounded-br-none lg:rounded-l-lg lg:rounded-bl-lg
				lg:mx-auto pt-2 lg:pt-0 border`}
			>
				
				<h3
					className={`text-sm sm:text-xl leading-[180%]
					${EstedadSemiBold}`}
				>
					شعبه {name}
				</h3>
				
				<div
					className={`text-[#717171] text-center space-y-1
					text-xs sm:text-lg my-5 lg:my-0 px-2 max-w-md`}
				>
					<h4>آدرس: {address}</h4>
					
					<h4>شماره تماس: {phone}</h4>
					
					<h4>بجز روز‌های تعطیل ۱۲ تا ۲۳ ساعت کاری: همه‌روزه از ساعت</h4>
				</div>
				
				<div
					className={`branch-actions lg:opacity-0 transition
					mb-4 lg:mb-0 w-full sm:w-[unset] flex justify-items
					[&>*]:w-[33%] [&>*]:sm:w-[unset]`}
				>
					<Button
						className={`bg-white text-primary border border-primary
						ml-2 sm:ml-4 hover:bg-primary hover:text-white
						h-6 sm:h-10 text-[10px] leading-[180%] sm:text-sm`}
					>
						صفحه شعبه
					</Button>
					
					<Button
						className={`hover:text-white
						h-6 sm:h-10 text-[10px] leading-[180%] sm:text-sm`}
					>
						دیدن در نقشه
					</Button>
				</div>
				
			</div>
			
		</div>
	)
}