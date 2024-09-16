"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { getCurrentBranchName } from "u/helpers";

import {
Accordion,
AccordionItem,
AccordionTrigger,
AccordionContent
} from "ui/Accordion";



const BranchAccordion = () => {
	
	const pathname = usePathname();
	
	
	return (
		<Accordion
			type="single"
			collapsible
			className="w-full border-b border-[#cbcbcb]"
		>
			<AccordionItem value="item-1">
				
				<AccordionTrigger>
						
						<div className="flex items-center justify-end">
							<span
								className="mr-1"
							>
								شعبه {getCurrentBranchName(pathname)}
							</span>
							
							<svg width="18" height="18" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.895 11.3701H3.105C1.735 11.3701 0.625 10.2551 0.625 8.8851V5.1801C0.625 4.5001 1.045 3.6451 1.585 3.2251L4.28 1.1251C5.09 0.495104 6.385 0.465104 7.225 1.0551L10.315 3.2201C10.91 3.6351 11.375 4.5251 11.375 5.2501V8.8901C11.375 10.2551 10.265 11.3701 8.895 11.3701ZM4.74 1.7151L2.045 3.8151C1.69 4.0951 1.375 4.7301 1.375 5.1801V8.8851C1.375 9.8401 2.15 10.6201 3.105 10.6201H8.895C9.85 10.6201 10.625 9.8451 10.625 8.8901V5.2501C10.625 4.7701 10.28 4.1051 9.885 3.8351L6.795 1.6701C6.225 1.2701 5.285 1.2901 4.74 1.7151Z" fill="#353535"/>
								<path d="M6.75 9.375H5.25C4.215 9.375 3.375 8.535 3.375 7.5V6C3.375 4.965 4.215 4.125 5.25 4.125H6.75C7.785 4.125 8.625 4.965 8.625 6V7.5C8.625 8.535 7.785 9.375 6.75 9.375ZM5.25 4.875C4.63 4.875 4.125 5.38 4.125 6V7.5C4.125 8.12 4.63 8.625 5.25 8.625H6.75C7.37 8.625 7.875 8.12 7.875 7.5V6C7.875 5.38 7.37 4.875 6.75 4.875H5.25Z" fill="#353535"/>
								<path d="M6 9.375C5.795 9.375 5.625 9.205 5.625 9V4.5C5.625 4.295 5.795 4.125 6 4.125C6.205 4.125 6.375 4.295 6.375 4.5V9C6.375 9.205 6.205 9.375 6 9.375Z" fill="#353535"/>
								<path d="M8.25 7.125H3.75C3.545 7.125 3.375 6.955 3.375 6.75C3.375 6.545 3.545 6.375 3.75 6.375H8.25C8.455 6.375 8.625 6.545 8.625 6.75C8.625 6.955 8.455 7.125 8.25 7.125Z" fill="#353535"/>
							</svg>
						</div>
				</AccordionTrigger>
				
				<AccordionContent>
					<ul className="flex flex-col justify-start items-end mr-5 [&>*]:mt-3">
						<li className="!mt-0">
							<Link
								href="/branch/okbaataan"
							>
								اکباتان
							</Link>
						</li>
						<li>
							<Link
								href="/branch/chaaloos"
							>
								چالوس
							</Link>
						</li>
						<li>
							<Link
								href="/branch/aqdasie"
							>
								اقدسیه
							</Link>
						</li>
						<li>
							<Link
								href="/branch/vanak"
							>
								ونک
							</Link>
						</li>
					</ul>
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	)
}


export default BranchAccordion;