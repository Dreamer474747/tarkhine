"use client"
import { usePathname } from 'next/navigation';
import Link from "next/link";

import { EstedadBold } from "@/app/Fonts";


export default function GuidelinesAndProtectionsLinks() {
	const pathname = usePathname();
	
	
	return (
		<div className="h-16 bg-[#ededed] rtl">
			
			<div className="container h-full">
				
				<ul
					className={`flex justify-between items-center h-full
					w-[14.9rem] md:w-[22rem] lg:w-[26rem] text-xs md:text-base lg:text-xl`}
				>
					
					<li
						className={pathname === "/faq" ? `
						active-sub-link ${EstedadBold}`
						: ""}
					>
						<Link
							href="/faq"
						>
							سوالات متداول
						</Link>
					</li>
					
					<li
						className={pathname === "/rules" ? `
						active-sub-link ${EstedadBold}`
						: ""}
					>
						<Link
							href="/rules"
						>
							قوانین ترخینه
						</Link>
					</li>
					
					<li
						className={pathname === "/privacy" ? `
						active-sub-link ${EstedadBold}`
						: ""}
					>
						<Link
							href="/privacy"
						>
							حریم خصوصی
						</Link>
					</li>
				</ul>
				
			</div>
			
		</div>
	)
}