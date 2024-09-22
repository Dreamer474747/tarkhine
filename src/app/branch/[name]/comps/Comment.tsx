"use client";
import { usePathname } from "next/navigation";
import { getCurrentBranchName } from "u/helpers";
import Image from "next/image";


export default function Comment() {
	
	const pathname = usePathname();
	
	
	return (
		
		<div
			className={`w-[250px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[142px] sm:h-[172px] lg:h-[202px]
			border rounded-lg flex justify-items relative select-none`}
		>
			
			<div
				className={`flex flex-col items-center text-[#717171] text-[10px] sm:text-xs lg:text-sm
				leading-[180%]`}
			>
				
				<Image
					width="96"
					height="96"
					src="/images/user-img.jpg"
					alt="user-img"
					className="w-14 h-14 sm:w-16 sm:h-16 lg:w-24 lg:h-24"
				/>
				
				<p className="mt-2">سردار وظیفه</p>
				<p>۲۳ اسفند ۱۴۰۱</p>
				
			</div>
			
			<p
				className={`w-[70%] mr-1 sm:mr-4 text-[10px] sm:text-sm lg:text-base !leading-[180%]
				text-justify ml-1`}
			>
				از با صفا بودن شعبه
				{" "} {getCurrentBranchName(pathname)} {" "}
				هر چی بگم کم گفتم. بهترین غذاهای گیاهی عمرمو اینجا خوردم. از مدیریت شعبه
				{" "} {getCurrentBranchName(pathname)} {" "}
				رستوران‌های ترخینه واقعا تشکر میکنم.
			</p>
			
			<div
				className={`flex justify-items absolute bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6
				left-3 sm:left-6 md:left-9 lg:left-12 text-xs sm:text-base`}
			>
				<Image
					width="16"
					height="16"
					src="/svgs/stars/Rate-4.svg"
					alt="rate-4"
					className="ml-1 w-3 h-3 sm:w-4 sm:h-4"
				/>
				۴
			</div>
			
		</div>
	)
}