"use client";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

import { showSwal } from "u/helpers";
import { getCookie, hasCookie } from "cookies-next";
import { refreshMyAccessToken, addToWishlist } from "m/helpers";

import { Button } from "ui/Button";

import { ServicesContext } from "@/components/contexts/ServicesProvider";
import type { ServicesContextType } from "u/types";


export default function MobileWishlistBtn({ productCode }: { productCode: string }) {
	
	const router = useRouter();
	const { isPending, setIsPending } = useContext(ServicesContext) as ServicesContextType;
	
	
	return (
		<Button
			onClick={() => addToWishlist(setIsPending, productCode, router)}
			disabled={isPending}
			className="md:hidden p-0 m-0 bg-white hover:bg-white"
		>
			<svg className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer transition menu-card-heart-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path className="transition" d="M12 21.65C11.69 21.65 11.39 21.61 11.14 21.52C7.32 20.21 1.25 15.56 1.25 8.68998C1.25 5.18998 4.08 2.34998 7.56 2.34998C9.25 2.34998 10.83 3.00998 12 4.18998C13.17 3.00998 14.75 2.34998 16.44 2.34998C19.92 2.34998 22.75 5.19998 22.75 8.68998C22.75 15.57 16.68 20.21 12.86 21.52C12.61 21.61 12.31 21.65 12 21.65ZM7.56 3.84998C4.91 3.84998 2.75 6.01998 2.75 8.68998C2.75 15.52 9.32 19.32 11.63 20.11C11.81 20.17 12.2 20.17 12.38 20.11C14.68 19.32 21.26 15.53 21.26 8.68998C21.26 6.01998 19.1 3.84998 16.45 3.84998C14.93 3.84998 13.52 4.55998 12.61 5.78998C12.33 6.16998 11.69 6.16998 11.41 5.78998C10.48 4.54998 9.08 3.84998 7.56 3.84998Z" fill="#717171"/>
			</svg>
		</Button>
	)
}