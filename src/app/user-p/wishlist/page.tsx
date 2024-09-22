"use client";
import { useState } from "react";
import { EstedadBold } from "@/app/Fonts";

import { Button } from "ui/Button";

import UserActions from "../comps/UserActions";
import Wishlists from "./comps/Wishlists";


export default function Wishlist() {
	
	const [showContent, setShowContent] = useState(true);
	
	
	return (
		<>
			<div className="hidden md:flex">
				<UserActions />
				<Wishlists />
			</div>
			
			<div className="flex justify-items md:hidden">
				{
					showContent ? (
						<div className="flex flex-col mt-4 sm:mt-0 w-full">
							<div className="flex items-center relative mb-4">
								
								<Button
									className="cursor-pointer bg-transparent hover:bg-transparent absolute"
									onClick={() => setShowContent(false)}
								>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M5.93974 13.78C5.81307 13.78 5.68641 13.7333 5.58641 13.6333C5.39307 13.44 5.39307 13.12 5.58641 12.9267L9.93307 8.58001C10.2531 8.26001 10.2531 7.74001 9.93307 7.42001L5.58641 3.07335C5.39307 2.88001 5.39307 2.56001 5.58641 2.36668C5.77974 2.17335 6.09974 2.17335 6.29307 2.36668L10.6397 6.71335C10.9797 7.05335 11.1731 7.51335 11.1731 8.00001C11.1731 8.48668 10.9864 8.94668 10.6397 9.28668L6.29307 13.6333C6.19307 13.7267 6.06641 13.78 5.93974 13.78Z" fill="#353535"/>
									</svg>
								</Button>
								
								<h2
									className={`${EstedadBold} sm:text-lg leading-[180%] text-center w-full`}
								>
									علاقه‌مندی‌ها
								</h2>
								
							</div>
							<Wishlists />
						</div>
					) : <UserActions setShowContent={setShowContent} />
				}
			</div>
		</>
	)
}