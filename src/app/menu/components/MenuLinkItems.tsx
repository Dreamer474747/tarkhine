"use client"
import { usePathname } from 'next/navigation';
import Link from "next/link";

import { EstedadBold } from "@/app/Fonts";


export default function MenuLinkItems() {
	const pathname = usePathname();
	
	
	return (
		<div className="h-16 bg-[#ededed] rtl">
			
			<div className="container h-full">
				
				<ul
					className={`flex justify-between items-center h-full
					w-[14.9rem] md:w-[22rem] lg:w-[26rem] text-xs md:text-base lg:text-xl`}
				>
					
					<li
						className={pathname === "/menu/main-dish" ? `
						active-sub-link ${EstedadBold}`
						: ""}
					>
						<Link
							href="/menu/main-dish"
						>
							غذای اصلی
						</Link>
					</li>
					
					<li
						className={pathname === "/menu/appetizer" ? `
						active-sub-link ${EstedadBold}`
						: ""}
					>
						<Link
							href="/menu/appetizer"
						>
							پیش غذا
						</Link>
					</li>
					
					<li
						className={pathname === "/menu/dessert" ? `
						active-sub-link ${EstedadBold}`
						: ""}
					>
						<Link
							href="/menu/dessert"
						>
							دسر
						</Link>
					</li>
					
					<li
						className={pathname === "/menu/drink" ? `
						active-sub-link ${EstedadBold}`
						: ""}
					>
						<Link
							href="/menu/drink"
						>
							نوشیدنی
						</Link>
					</li>
				</ul>
				
			</div>
			
		</div>
	)
}