"use client";
import { usePathname } from "next/navigation";
import { EstedadBold } from "@/app/Fonts";

import { getCurrentBranchName } from "u/helpers";


export default function BranchInfo() {
	
	const pathname = usePathname();
	
	const branches = [
		{
			name: "اکباتان",
			fullAddress: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
			addressPart1: "شهرک اکباتان، فاز ۳، مجتمع",
			addressPart2: "تجاری کوروش، طبقه سوم",
		},
		{
			name: "چالوس",
			fullAddress: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
			addressPart1: "چالوس، خیابان ۱۷ شهریور، بعد کوچه",
			addressPart2: "کوروش، جنب داروخانه دکتر میلانی",
		},
		{
			name: "اقدسیه",
			fullAddress: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
			addressPart1: "خیابان اقدسیه ، نرسیده",
			addressPart2: "به میدان خیام، پلاک ۸",
		},
		{
			name: "ونک",
			fullAddress: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
			addressPart1: "میدان ونک، خیابان فردوسی،",
			addressPart2: "نبش کوچه نیلوفر، پلاک ۲۶",
		}
	]
	
	function getBranchInfo() {
		
		const branch = branches.find(branch => branch.name === getCurrentBranchName(pathname));
		return branch;
	}
	
	
	return (
		<section className="pt-2">
			<h4
				className={`text-base sm:text-xl lg:text-2xl leading-[140%] ${EstedadBold}
				text-center mb-5 container`}
			>
				شعبه {getCurrentBranchName(pathname)}
			</h4>
			
			<div id="branch-picture" className="h-[336px] -mt-1"></div>
			
			<div
				className={`w-[85%] lg:w-[810px] h-[70px] sm:h-[130px] rounded-lg mx-auto
				border-[3px] border-primary -mt-4 sm:-mt-8 bg-white sm:pt-4 branch-info`}
			>
				<div
					className={`hidden sm:flex justify-around items-start
					text-[13px] md:text-base leading-[180%]`}
				>
					<div className="flex flex-col items-center">
						<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M23.5995 30.3334C22.0928 30.3334 20.5062 29.9734 18.8662 29.2801C17.2662 28.6001 15.6528 27.6667 14.0795 26.5334C12.5195 25.3867 11.0128 24.1068 9.58618 22.7067C8.17285 21.2801 6.89285 19.7734 5.75951 18.2267C4.61285 16.6267 3.69285 15.0267 3.03951 13.4801C2.34618 11.8267 1.99951 10.2267 1.99951 8.72008C1.99951 7.68008 2.18618 6.69341 2.54618 5.77341C2.91951 4.82675 3.51951 3.94675 4.33285 3.18675C5.35951 2.17341 6.53285 1.66675 7.78618 1.66675C8.30618 1.66675 8.83951 1.78675 9.29284 2.00008C9.81284 2.24008 10.2528 2.60008 10.5728 3.08008L13.6662 7.44008C13.9462 7.82675 14.1595 8.20008 14.3062 8.57341C14.4795 8.97341 14.5728 9.37341 14.5728 9.76008C14.5728 10.2667 14.4262 10.7601 14.1462 11.2267C13.9462 11.5867 13.6395 11.9734 13.2528 12.3601L12.3462 13.3067C12.3595 13.3467 12.3728 13.3734 12.3862 13.4001C12.5462 13.6801 12.8662 14.1601 13.4795 14.8801C14.1328 15.6267 14.7462 16.3067 15.3595 16.9334C16.1462 17.7067 16.7995 18.3201 17.4128 18.8267C18.1728 19.4667 18.6662 19.7867 18.9595 19.9334L18.9328 20.0001L19.9062 19.0401C20.3195 18.6267 20.7195 18.3201 21.1062 18.1201C21.8395 17.6667 22.7728 17.5867 23.7062 17.9734C24.0528 18.1201 24.4262 18.3201 24.8262 18.6001L29.2528 21.7467C29.7462 22.0801 30.1062 22.5067 30.3195 23.0134C30.5195 23.5201 30.6128 23.9867 30.6128 24.4534C30.6128 25.0934 30.4662 25.7334 30.1862 26.3334C29.9062 26.9334 29.5595 27.4534 29.1195 27.9334C28.3595 28.7734 27.5328 29.3734 26.5728 29.7601C25.6528 30.1334 24.6528 30.3334 23.5995 30.3334ZM7.78618 3.66675C7.05285 3.66675 6.37285 3.98675 5.71951 4.62675C5.10618 5.20008 4.67951 5.82675 4.41285 6.50675C4.13285 7.20008 3.99951 7.93341 3.99951 8.72008C3.99951 9.96008 4.29285 11.3067 4.87951 12.6934C5.47951 14.1067 6.31951 15.5734 7.38618 17.0401C8.45285 18.5067 9.66618 19.9334 10.9995 21.2801C12.3328 22.6001 13.7728 23.8267 15.2528 24.9067C16.6928 25.9601 18.1728 26.8134 19.6395 27.4267C21.9195 28.4001 24.0528 28.6267 25.8128 27.8934C26.4928 27.6134 27.0928 27.1867 27.6395 26.5734C27.9462 26.2401 28.1862 25.8801 28.3862 25.4534C28.5462 25.1201 28.6262 24.7734 28.6262 24.4267C28.6262 24.2134 28.5862 24.0001 28.4795 23.7601C28.4395 23.6801 28.3595 23.5334 28.1062 23.3601L23.6795 20.2134C23.4128 20.0267 23.1728 19.8934 22.9462 19.8001C22.6528 19.6801 22.5328 19.5601 22.0795 19.8401C21.8128 19.9734 21.5728 20.1734 21.3062 20.4401L20.2928 21.4401C19.7728 21.9467 18.9728 22.0667 18.3595 21.8401L17.9995 21.6801C17.4528 21.3867 16.8128 20.9334 16.1062 20.3334C15.4662 19.7867 14.7728 19.1467 13.9328 18.3201C13.2795 17.6534 12.6262 16.9467 11.9462 16.1601C11.3195 15.4267 10.8662 14.8001 10.5862 14.2801L10.4262 13.8801C10.3462 13.5734 10.3195 13.4001 10.3195 13.2134C10.3195 12.7334 10.4928 12.3067 10.8262 11.9734L11.8262 10.9334C12.0928 10.6667 12.2928 10.4134 12.4262 10.1867C12.5328 10.0134 12.5728 9.86675 12.5728 9.73342C12.5728 9.62675 12.5328 9.46675 12.4662 9.30675C12.3728 9.09341 12.2262 8.85341 12.0395 8.60008L8.94618 4.22675C8.81285 4.04008 8.65285 3.90675 8.45285 3.81341C8.23951 3.72008 8.01285 3.66675 7.78618 3.66675ZM18.9328 20.0134L18.7195 20.9201L19.0795 19.9867C19.0128 19.9734 18.9595 19.9867 18.9328 20.0134Z" fill="#353535"/>
							<path d="M24.9997 12.9999C24.453 12.9999 23.9997 12.5466 23.9997 11.9999C23.9997 11.5199 23.5197 10.5199 22.7197 9.66658C21.933 8.82659 21.0663 8.33325 20.333 8.33325C19.7863 8.33325 19.333 7.87992 19.333 7.33325C19.333 6.78659 19.7863 6.33325 20.333 6.33325C21.6263 6.33325 22.9863 7.02658 24.173 8.29325C25.2797 9.47992 25.9997 10.9333 25.9997 11.9999C25.9997 12.5466 25.5463 12.9999 24.9997 12.9999Z" fill="#353535"/>
							<path d="M29.6663 13.0001C29.1197 13.0001 28.6663 12.5467 28.6663 12.0001C28.6663 7.40008 24.933 3.66675 20.333 3.66675C19.7863 3.66675 19.333 3.21341 19.333 2.66675C19.333 2.12008 19.7863 1.66675 20.333 1.66675C26.0263 1.66675 30.6663 6.30675 30.6663 12.0001C30.6663 12.5467 30.213 13.0001 29.6663 13.0001Z" fill="#353535"/>
						</svg>
						
						<p className="mt-2">۰۲۱-۳۳۵۳۵۳۵۴</p>
						<p>۰۲۱-۳۳۵۳۵۳۵۶</p>
					</div>
					
					<div className="flex flex-col items-center">
						<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M15.9998 18.8933C13.1598 18.8933 10.8398 16.5867 10.8398 13.7333C10.8398 10.88 13.1598 8.58667 15.9998 8.58667C18.8398 8.58667 21.1598 10.8933 21.1598 13.7467C21.1598 16.6 18.8398 18.8933 15.9998 18.8933ZM15.9998 10.5867C14.2665 10.5867 12.8398 12 12.8398 13.7467C12.8398 15.4933 14.2532 16.9067 15.9998 16.9067C17.7465 16.9067 19.1598 15.4933 19.1598 13.7467C19.1598 12 17.7332 10.5867 15.9998 10.5867Z" fill="#353535"/>
							<path d="M16.0002 30.3467C14.0269 30.3467 12.0402 29.6001 10.4936 28.1201C6.56023 24.3334 2.21357 18.2934 3.85357 11.1067C5.33357 4.58675 11.0269 1.66675 16.0002 1.66675C16.0002 1.66675 16.0002 1.66675 16.0136 1.66675C20.9869 1.66675 26.6802 4.58675 28.1602 11.1201C29.7869 18.3067 25.4402 24.3334 21.5069 28.1201C19.9602 29.6001 17.9736 30.3467 16.0002 30.3467ZM16.0002 3.66675C12.1202 3.66675 7.13357 5.73341 5.81357 11.5467C4.37357 17.8267 8.32023 23.2401 11.8936 26.6667C14.2002 28.8934 17.8136 28.8934 20.1202 26.6667C23.6802 23.2401 27.6269 17.8267 26.2136 11.5467C24.8802 5.73341 19.8802 3.66675 16.0002 3.66675Z" fill="#353535"/>
						</svg>
						
						<p className="mt-2">{getBranchInfo()?.addressPart1}</p>
						<p>{getBranchInfo()?.addressPart2}</p>
					</div>
					
					<div className="flex flex-col items-center">
						<svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M16.6663 30.3334C8.75968 30.3334 2.33301 23.9067 2.33301 16.0001C2.33301 8.09342 8.75968 1.66675 16.6663 1.66675C24.573 1.66675 30.9997 8.09342 30.9997 16.0001C30.9997 23.9067 24.573 30.3334 16.6663 30.3334ZM16.6663 3.66675C9.86634 3.66675 4.33301 9.20008 4.33301 16.0001C4.33301 22.8001 9.86634 28.3334 16.6663 28.3334C23.4663 28.3334 28.9997 22.8001 28.9997 16.0001C28.9997 9.20008 23.4663 3.66675 16.6663 3.66675Z" fill="#353535"/>
							<path d="M21.6132 21.2401C21.4399 21.2401 21.2665 21.2001 21.1065 21.0934L16.9732 18.6268C15.9465 18.0134 15.1865 16.6668 15.1865 15.4801V10.0134C15.1865 9.46676 15.6399 9.01343 16.1865 9.01343C16.7332 9.01343 17.1865 9.46676 17.1865 10.0134V15.4801C17.1865 15.9601 17.5865 16.6668 17.9999 16.9068L22.1332 19.3734C22.6132 19.6534 22.7599 20.2668 22.4799 20.7468C22.2799 21.0668 21.9465 21.2401 21.6132 21.2401Z" fill="#353535"/>
						</svg>
						
						<p className="mt-2">همه‌روزه از ساعت ۱۲  الی ۲۳ </p>
					</div>
				</div>
				
				<div
					className="sm:hidden text-[10px] leading-[180%] flex flex-col justify-around h-full"
				>
					<p className="flex items-center">
						<svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M7.99992 9.44667C6.57992 9.44667 5.41992 8.29333 5.41992 6.86667C5.41992 5.44 6.57992 4.29333 7.99992 4.29333C9.41992 4.29333 10.5799 5.44667 10.5799 6.87334C10.5799 8.3 9.41992 9.44667 7.99992 9.44667ZM7.99992 5.29333C7.13326 5.29333 6.41992 6 6.41992 6.87334C6.41992 7.74667 7.12659 8.45333 7.99992 8.45333C8.87326 8.45333 9.57992 7.74667 9.57992 6.87334C9.57992 6 8.86659 5.29333 7.99992 5.29333Z" fill="#353535"/>
							<path d="M8.00012 15.1734C7.01345 15.1734 6.02012 14.8 5.24678 14.06C3.28012 12.1667 1.10678 9.14671 1.92678 5.55337C2.66678 2.29337 5.51345 0.833374 8.00012 0.833374C8.00012 0.833374 8.00012 0.833374 8.00678 0.833374C10.4935 0.833374 13.3401 2.29337 14.0801 5.56004C14.8934 9.15337 12.7201 12.1667 10.7534 14.06C9.98012 14.8 8.98678 15.1734 8.00012 15.1734ZM8.00012 1.83337C6.06012 1.83337 3.56678 2.86671 2.90678 5.77337C2.18678 8.91337 4.16012 11.62 5.94678 13.3334C7.10012 14.4467 8.90678 14.4467 10.0601 13.3334C11.8401 11.62 13.8134 8.91337 13.1068 5.77337C12.4401 2.86671 9.94012 1.83337 8.00012 1.83337Z" fill="#353535"/>
						</svg>
						{getBranchInfo()?.fullAddress}
					</p>
					
					<div className="flex justify-between">
						<p className="flex items-center">
							<svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M11.6335 15.1667C10.8802 15.1667 10.0868 14.9867 9.26683 14.64C8.46683 14.3 7.66016 13.8334 6.8735 13.2667C6.0935 12.6934 5.34016 12.0534 4.62683 11.3534C3.92016 10.64 3.28016 9.88671 2.7135 9.11337C2.14016 8.31337 1.68016 7.51337 1.3535 6.74004C1.00683 5.91337 0.833496 5.11337 0.833496 4.36004C0.833496 3.84004 0.926829 3.34671 1.10683 2.88671C1.2935 2.41337 1.5935 1.97337 2.00016 1.59337C2.5135 1.08671 3.10016 0.833374 3.72683 0.833374C3.98683 0.833374 4.2535 0.893374 4.48016 1.00004C4.74016 1.12004 4.96016 1.30004 5.12016 1.54004L6.66683 3.72004C6.80683 3.91337 6.9135 4.10004 6.98683 4.28671C7.0735 4.48671 7.12016 4.68671 7.12016 4.88004C7.12016 5.13337 7.04683 5.38004 6.90683 5.61337C6.80683 5.79337 6.6535 5.98671 6.46016 6.18004L6.00683 6.65337C6.0135 6.67337 6.02016 6.68671 6.02683 6.70004C6.10683 6.84004 6.26683 7.08004 6.5735 7.44004C6.90016 7.81337 7.20683 8.15337 7.5135 8.46671C7.90683 8.85337 8.2335 9.16004 8.54016 9.41337C8.92016 9.73337 9.16683 9.89337 9.3135 9.96671L9.30016 10L9.78683 9.52004C9.9935 9.31337 10.1935 9.16004 10.3868 9.06004C10.7535 8.83337 11.2202 8.79337 11.6868 8.98671C11.8602 9.06004 12.0468 9.16004 12.2468 9.30004L14.4602 10.8734C14.7068 11.04 14.8868 11.2534 14.9935 11.5067C15.0935 11.76 15.1402 11.9934 15.1402 12.2267C15.1402 12.5467 15.0668 12.8667 14.9268 13.1667C14.7868 13.4667 14.6135 13.7267 14.3935 13.9667C14.0135 14.3867 13.6002 14.6867 13.1202 14.88C12.6602 15.0667 12.1602 15.1667 11.6335 15.1667ZM3.72683 1.83337C3.36016 1.83337 3.02016 1.99337 2.6935 2.31337C2.38683 2.60004 2.1735 2.91337 2.04016 3.25337C1.90016 3.60004 1.8335 3.96671 1.8335 4.36004C1.8335 4.98004 1.98016 5.65337 2.2735 6.34671C2.5735 7.05337 2.9935 7.78671 3.52683 8.52004C4.06016 9.25337 4.66683 9.96671 5.3335 10.64C6.00016 11.3 6.72016 11.9134 7.46016 12.4534C8.18016 12.98 8.92016 13.4067 9.6535 13.7134C10.7935 14.2 11.8602 14.3134 12.7402 13.9467C13.0802 13.8067 13.3802 13.5934 13.6535 13.2867C13.8068 13.12 13.9268 12.94 14.0268 12.7267C14.1068 12.56 14.1468 12.3867 14.1468 12.2134C14.1468 12.1067 14.1268 12 14.0735 11.88C14.0535 11.84 14.0135 11.7667 13.8868 11.68L11.6735 10.1067C11.5402 10.0134 11.4202 9.94671 11.3068 9.90004C11.1602 9.84004 11.1002 9.78004 10.8735 9.92004C10.7402 9.98671 10.6202 10.0867 10.4868 10.22L9.98016 10.72C9.72016 10.9734 9.32016 11.0334 9.0135 10.92L8.8335 10.84C8.56016 10.6934 8.24016 10.4667 7.88683 10.1667C7.56683 9.89337 7.22016 9.57337 6.80016 9.16004C6.4735 8.82671 6.14683 8.47337 5.80683 8.08004C5.4935 7.71337 5.26683 7.40004 5.12683 7.14004L5.04683 6.94004C5.00683 6.78671 4.9935 6.70004 4.9935 6.60671C4.9935 6.36671 5.08016 6.15337 5.24683 5.98671L5.74683 5.46671C5.88016 5.33337 5.98016 5.20671 6.04683 5.09337C6.10016 5.00671 6.12016 4.93337 6.12016 4.86671C6.12016 4.81337 6.10016 4.73337 6.06683 4.65337C6.02016 4.54671 5.94683 4.42671 5.8535 4.30004L4.30683 2.11337C4.24016 2.02004 4.16016 1.95337 4.06016 1.90671C3.9535 1.86004 3.84016 1.83337 3.72683 1.83337ZM9.30016 10.0067L9.1935 10.46L9.3735 9.99337C9.34016 9.98671 9.3135 9.99337 9.30016 10.0067Z" fill="#353535"/>
								<path d="M12.3333 6.49996C12.06 6.49996 11.8333 6.27329 11.8333 5.99996C11.8333 5.75996 11.5933 5.25996 11.1933 4.83329C10.8 4.41329 10.3667 4.16663 10 4.16663C9.72667 4.16663 9.5 3.93996 9.5 3.66663C9.5 3.39329 9.72667 3.16663 10 3.16663C10.6467 3.16663 11.3267 3.51329 11.92 4.14663C12.4733 4.73996 12.8333 5.46663 12.8333 5.99996C12.8333 6.27329 12.6067 6.49996 12.3333 6.49996Z" fill="#353535"/>
								<path d="M14.6667 6.50004C14.3933 6.50004 14.1667 6.27337 14.1667 6.00004C14.1667 3.70004 12.3 1.83337 10 1.83337C9.72667 1.83337 9.5 1.60671 9.5 1.33337C9.5 1.06004 9.72667 0.833374 10 0.833374C12.8467 0.833374 15.1667 3.15337 15.1667 6.00004C15.1667 6.27337 14.94 6.50004 14.6667 6.50004Z" fill="#353535"/>
							</svg>
							۰۲۱-۵۴۸۹۱۲۵۰-۵۱
						</p>
						
						<p className="flex items-center">
							<svg className="ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M8.00016 15.1667C4.04683 15.1667 0.833496 11.9534 0.833496 8.00004C0.833496 4.04671 4.04683 0.833374 8.00016 0.833374C11.9535 0.833374 15.1668 4.04671 15.1668 8.00004C15.1668 11.9534 11.9535 15.1667 8.00016 15.1667ZM8.00016 1.83337C4.60016 1.83337 1.8335 4.60004 1.8335 8.00004C1.8335 11.4 4.60016 14.1667 8.00016 14.1667C11.4002 14.1667 14.1668 11.4 14.1668 8.00004C14.1668 4.60004 11.4002 1.83337 8.00016 1.83337Z" fill="#353535"/>
								<path d="M10.4731 10.62C10.3864 10.62 10.2998 10.6 10.2198 10.5467L8.1531 9.31338C7.63977 9.00671 7.25977 8.33338 7.25977 7.74005V5.00671C7.25977 4.73338 7.48643 4.50671 7.75977 4.50671C8.0331 4.50671 8.25977 4.73338 8.25977 5.00671V7.74005C8.25977 7.98005 8.45977 8.33338 8.66643 8.45338L10.7331 9.68671C10.9731 9.82671 11.0464 10.1334 10.9064 10.3734C10.8064 10.5334 10.6398 10.62 10.4731 10.62Z" fill="#353535"/>
							</svg>
							همه‌روزه از ساعت ۱۲  الی ۲۳
						</p>
					</div>
					
				</div>
				
			</div>
			
		</section>
	)
}