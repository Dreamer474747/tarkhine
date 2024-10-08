"use client";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

import { showSwal } from "u/helpers";
import { getCookie, hasCookie } from "cookies-next";
import { refreshMyAccessToken, addToWishlist } from "m/helpers";

import { Button } from "ui/Button";

import { ServicesContext } from "@/components/contexts/ServicesProvider";
import type { ServicesContextType } from "u/types";


export default function WishlistBtn({ productCode }: { productCode: string }) {
	
	const router = useRouter();
	const { isPending, setIsPending } = useContext(ServicesContext) as ServicesContextType;
	
	
	return (
		<Button
			onClick={() => addToWishlist(setIsPending, productCode, router)}
			disabled={isPending}
			className="flex product-card-wishlist p-0 m-0 bg-white hover:bg-white"
		>
			<svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path className="transition" d="M8.00016 14.4333C7.7935 14.4333 7.5935 14.4066 7.42683 14.3467C4.88016 13.4733 0.833496 10.3733 0.833496 5.79332C0.833496 3.45998 2.72016 1.56665 5.04016 1.56665C6.16683 1.56665 7.22016 2.00665 8.00016 2.79332C8.78016 2.00665 9.8335 1.56665 10.9602 1.56665C13.2802 1.56665 15.1668 3.46665 15.1668 5.79332C15.1668 10.38 11.1202 13.4733 8.5735 14.3467C8.40683 14.4066 8.20683 14.4333 8.00016 14.4333ZM5.04016 2.56665C3.2735 2.56665 1.8335 4.01332 1.8335 5.79332C1.8335 10.3466 6.2135 12.88 7.7535 13.4066C7.8735 13.4466 8.1335 13.4466 8.2535 13.4066C9.78683 12.88 14.1735 10.3533 14.1735 5.79332C14.1735 4.01332 12.7335 2.56665 10.9668 2.56665C9.9535 2.56665 9.0135 3.03998 8.40683 3.85998C8.22016 4.11332 7.7935 4.11332 7.60683 3.85998C6.98683 3.03332 6.0535 2.56665 5.04016 2.56665Z" fill="#ADADAD"/>
			</svg>
			
			<p
				className={`text-[#adadad] leading-[180%] text-[10px] flex items-center
				cursor-pointer hidden md:block`}
			>
				افزودن به علاقمندی‌ها
			</p>
		</Button>
	)
}