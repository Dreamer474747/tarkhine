"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Input } from "ui/Input";
import { Button } from "ui/Button";


export default function SearchInput() {
	
	const router = useRouter();
	const [searchValue, setSearchValue] = useState("");
	
	const search = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		
		router.replace(`/${searchValue}`);
	}
	
	
	return (
		<form
			className="container mt-3 md:mt-0 md:pr-0 relative rtl"
			onSubmit={search}
		>
			<Input
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				placeholder="جستجو"
				className="pl-11"
			/>
			
			<Button
				className="absolute left-7 top-0 flex justify-items bg-transparent hover:bg-transparent"
			>
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7.66634 14.5C3.89967 14.5 0.833008 11.4333 0.833008 7.66665C0.833008 3.89998 3.89967 0.833313 7.66634 0.833313C11.433 0.833313 14.4997 3.89998 14.4997 7.66665C14.4997 11.4333 11.433 14.5 7.66634 14.5ZM7.66634 1.83331C4.44634 1.83331 1.83301 4.45331 1.83301 7.66665C1.83301 10.88 4.44634 13.5 7.66634 13.5C10.8863 13.5 13.4997 10.88 13.4997 7.66665C13.4997 4.45331 10.8863 1.83331 7.66634 1.83331Z" fill="#353535"/>
					<path d="M14.6666 15.1667C14.54 15.1667 14.4133 15.12 14.3133 15.02L12.98 13.6867C12.7866 13.4934 12.7866 13.1734 12.98 12.98C13.1733 12.7867 13.4933 12.7867 13.6866 12.98L15.02 14.3134C15.2133 14.5067 15.2133 14.8267 15.02 15.02C14.92 15.12 14.7933 15.1667 14.6666 15.1667Z" fill="#353535"/>
				</svg>
			</Button>
		</form>
	)
}