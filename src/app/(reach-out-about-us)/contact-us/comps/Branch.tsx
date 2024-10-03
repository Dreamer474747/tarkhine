import Image from "next/image";
import Link from "next/link";
import { EstedadSemiBold } from "@/app/Fonts";

import { Button } from "ui/Button";

type BranchParams = {
	src: string,
	alt: string,
	name: string,
	address: string,
	phone: string,
	link: string
}

export default function Branch({ src, alt, name, address, phone, link }: BranchParams) {
	
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
					<Link
						href={link}
						className="rounded bg-white text-primary h-10 border border-primary flex justify-items px-4 text-base"
					>
						صفحه شعبه
					</Link>
				</div>
				
			</div>
			
		</div>
	)
}