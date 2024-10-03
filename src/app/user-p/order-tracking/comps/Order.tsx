"use client";
import { useContext, useState, useEffect } from "react";

import { format, newDate } from 'date-fns-jalali';

import OrderTrackingProduct from "m/productCards/OrderTrackingProduct/OrderTrackingProduct";

import { ProductsContext } from "@/components/contexts/ProductsProvider";
import type { ProductsContextType, Product, OrderItem } from "u/types";

import { toPersianNumber } from "u/helpers";

import CancelOrderButton from "./CancelOrderButton";
import ReorderBtn from "./ReorderBtn";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext2,
  CarouselPrevious,
  CarouselDots
} from "ui/Carousel";

import { Button } from "ui/Button";

/*  1.if 'wasFoodReceived' is null, its because the food is on its way and we dont know whether the order
has arrived or not.

3.if 'wasFoodReceived' is true, it means that the delivery was successfull.

4.if 'wasFoodReceived' is false, it means that the orderer cancelled his order.
*/

type OrderParams = {
	orderedItems: OrderItem[],
	orderCode: string,
	branchName: string,
	wasFoodReceived: boolean | null,
	orderedDate: string,
	orderedHour: string,
	price: number,
	discount: number,
	secondsLeftToDeliver: number,
	address: string,
}


export default function Order(
{ orderedItems, orderCode, branchName, wasFoodReceived, orderedDate, orderedHour, price, discount,
secondsLeftToDeliver, address } :OrderParams) {
	
	const { products } = useContext(ProductsContext) as ProductsContextType;
	
	const [secondsLeft, setSecondsLeft] = useState(secondsLeftToDeliver);
	const [isFoodReceived, setIsFoodReceived] = useState(wasFoodReceived);
	
	
	useEffect(() => {
		
		let myTimeout: any;
		if (wasFoodReceived === null && secondsLeftToDeliver > 0) {
			myTimeout = setTimeout(() => {
				if (secondsLeft > 0) {
					clearTimeout(myTimeout);
				}
				setSecondsLeft((prev: number) => prev - 1);
				
			}, 1000);
		}
		
		return () => clearTimeout(myTimeout);
	}, [secondsLeft])
	
	
	const daysOfTheWeek = ["یکشنبه", "دوشنبه", "سه‌شنبه", "جهارشنبه", "پنجشنبه", "جمعه", "شنبه"];
	
	const date = new Date(orderedDate);
	const nonJalaliDate = format(new Date(date.getFullYear(), date.getMonth() - 1, date.getDate() - 1), "yyyy-MM-dd");
	const nonJalaliDateSplited = nonJalaliDate.split("-");
	
	const jalaliDate = format(newDate(+nonJalaliDateSplited[0], +nonJalaliDateSplited[1], +nonJalaliDateSplited[2]), "yyyy MMMM d");
	const jalaliDateSplited = jalaliDate.split(" ");
	
	const myDate = `${daysOfTheWeek[date.getDay()]} ${jalaliDateSplited[2]} ${jalaliDateSplited[1]}`;
	
	
	const findSrc = (title: string) => products.find((product: Product) => product.title === title)?.photo;
	
	
	return (
		<div
			className={`w-full h-fit rounded border mb-3 *:px-2 md:*:px-5 pt-3 pb-3 sm:pb-6 text-[#717171]`}
		>
			<div
				className="flex justify-between items-center order-header"
			>
				
				<h6 className="text-xs sm:text-sm">
					{branchName}
				</h6>
				
				<div className="text-[10px] sm:text-xs flex">
					<div
						className={`bg-[#ededed] h-[22px] sm:h-[26px] rounded ml-2 leading-[22px] sm:leading-[26px]
						text-center px-1 sm:px-2`}
					>
						ارسال توسط پیک
					</div>
					
					{
						(isFoodReceived === null && secondsLeft > 0) ? (
							<div
								className={`bg-[#FFF8E1] text-[#A9791C] px-2 sm:px-4 h-[22px] sm:h-[26px] rounded
								text-center leading-[22px] sm:leading-[26px]`}
							>
								جاری
							</div>
							
						) : (isFoodReceived === null && !secondsLeft) || isFoodReceived ? (
							
							<div
								className={`bg-[#E5F2E9] text-primary h-[22px] sm:h-[26px] rounded
								text-center leading-[22px] sm:leading-[26px] px-1 sm:px-2`}
							>
								تحویل داده شده
							</div>
							
						) : !isFoodReceived ? (
							
							<div
								className={`bg-[#FFF2F2] text-[#C30000] h-[22px] sm:h-[26px] rounded
								text-center leading-[22px] sm:leading-[26px] px-1 sm:px-2`}
							>
								لغو شده
							</div>
							
						) : null
					}
					
				</div>
				
			</div>
			
			<div className="text-[10px] leading-[180%] flex justify-between mt-4">
				
				<div className="flex">
					<p className="flex items-center">
						<svg className="-mr-[1px] ml-1 w-3 h-3 lg:w-4 lg:h-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5.33203 3.83325C5.0587 3.83325 4.83203 3.60659 4.83203 3.33325V1.33325C4.83203 1.05992 5.0587 0.833252 5.33203 0.833252C5.60536 0.833252 5.83203 1.05992 5.83203 1.33325V3.33325C5.83203 3.60659 5.60536 3.83325 5.33203 3.83325Z" fill="#717171"/>
							<path d="M10.668 3.83325C10.3946 3.83325 10.168 3.60659 10.168 3.33325V1.33325C10.168 1.05992 10.3946 0.833252 10.668 0.833252C10.9413 0.833252 11.168 1.05992 11.168 1.33325V3.33325C11.168 3.60659 10.9413 3.83325 10.668 3.83325Z" fill="#717171"/>
							<path d="M5.66667 9.66655C5.58 9.66655 5.49333 9.64656 5.41333 9.61322C5.32667 9.57989 5.26 9.53321 5.19333 9.47321C5.07333 9.34654 5 9.17988 5 8.99988C5 8.91322 5.02 8.82655 5.05333 8.74655C5.08667 8.66655 5.13333 8.59322 5.19333 8.52655C5.26 8.46655 5.32667 8.41987 5.41333 8.38654C5.65333 8.28654 5.95333 8.33989 6.14 8.52655C6.26 8.65322 6.33333 8.82655 6.33333 8.99988C6.33333 9.03988 6.32667 9.08656 6.32 9.13322C6.31333 9.17322 6.3 9.21322 6.28 9.25322C6.26667 9.29322 6.24667 9.33321 6.22 9.37321C6.2 9.40655 6.16667 9.43988 6.14 9.47321C6.01333 9.59321 5.84 9.66655 5.66667 9.66655Z" fill="#717171"/>
							<path d="M7.9987 9.66658C7.91203 9.66658 7.82536 9.64659 7.74536 9.61326C7.6587 9.57992 7.59203 9.53324 7.52537 9.47324C7.40537 9.34658 7.33203 9.17992 7.33203 8.99992C7.33203 8.91325 7.35203 8.82658 7.38537 8.74658C7.4187 8.66658 7.46537 8.59325 7.52537 8.52659C7.59203 8.46659 7.6587 8.41991 7.74536 8.38657C7.98536 8.27991 8.28536 8.33992 8.47203 8.52659C8.59203 8.65325 8.66536 8.82658 8.66536 8.99992C8.66536 9.03992 8.6587 9.08659 8.65203 9.13326C8.64536 9.17326 8.63203 9.21325 8.61203 9.25325C8.5987 9.29325 8.5787 9.33325 8.55203 9.37325C8.53203 9.40658 8.4987 9.43991 8.47203 9.47324C8.34536 9.59324 8.17203 9.66658 7.9987 9.66658Z" fill="#717171"/>
							<path d="M10.3346 9.66658C10.248 9.66658 10.1613 9.64659 10.0813 9.61326C9.99463 9.57992 9.92797 9.53324 9.8613 9.47324C9.83464 9.43991 9.80797 9.40658 9.7813 9.37325C9.75463 9.33325 9.73464 9.29325 9.7213 9.25325C9.7013 9.21325 9.68797 9.17326 9.6813 9.13326C9.67464 9.08659 9.66797 9.03992 9.66797 8.99992C9.66797 8.82658 9.7413 8.65325 9.8613 8.52659C9.92797 8.46659 9.99463 8.41991 10.0813 8.38657C10.328 8.27991 10.6213 8.33992 10.808 8.52659C10.928 8.65325 11.0013 8.82658 11.0013 8.99992C11.0013 9.03992 10.9946 9.08659 10.988 9.13326C10.9813 9.17326 10.968 9.21325 10.948 9.25325C10.9346 9.29325 10.9146 9.33325 10.888 9.37325C10.868 9.40658 10.8346 9.43991 10.808 9.47324C10.6813 9.59324 10.508 9.66658 10.3346 9.66658Z" fill="#717171"/>
							<path d="M5.66667 12C5.58 12 5.49333 11.9801 5.41333 11.9467C5.33333 11.9134 5.26 11.8667 5.19333 11.8067C5.07333 11.68 5 11.5067 5 11.3334C5 11.2467 5.02 11.16 5.05333 11.08C5.08667 10.9934 5.13333 10.92 5.19333 10.86C5.44 10.6134 5.89333 10.6134 6.14 10.86C6.26 10.9867 6.33333 11.16 6.33333 11.3334C6.33333 11.5067 6.26 11.68 6.14 11.8067C6.01333 11.9267 5.84 12 5.66667 12Z" fill="#717171"/>
							<path d="M7.9987 12C7.82536 12 7.65203 11.9267 7.52537 11.8067C7.40537 11.68 7.33203 11.5067 7.33203 11.3334C7.33203 11.2467 7.35203 11.16 7.38537 11.08C7.4187 10.9934 7.46537 10.92 7.52537 10.86C7.77203 10.6134 8.22536 10.6134 8.47203 10.86C8.53203 10.92 8.5787 10.9934 8.61203 11.08C8.64536 11.16 8.66536 11.2467 8.66536 11.3334C8.66536 11.5067 8.59203 11.68 8.47203 11.8067C8.34536 11.9267 8.17203 12 7.9987 12Z" fill="#717171"/>
							<path d="M10.3346 11.9999C10.1613 11.9999 9.98797 11.9266 9.8613 11.8066C9.8013 11.7466 9.75464 11.6733 9.7213 11.5866C9.68797 11.5066 9.66797 11.4199 9.66797 11.3333C9.66797 11.2466 9.68797 11.1599 9.7213 11.0799C9.75464 10.9933 9.8013 10.9199 9.8613 10.8599C10.0146 10.7066 10.248 10.6333 10.4613 10.6799C10.508 10.6866 10.548 10.6999 10.588 10.7199C10.628 10.7333 10.668 10.7533 10.708 10.78C10.7413 10.8 10.7746 10.8333 10.808 10.8599C10.928 10.9866 11.0013 11.1599 11.0013 11.3333C11.0013 11.5066 10.928 11.6799 10.808 11.8066C10.6813 11.9266 10.508 11.9999 10.3346 11.9999Z" fill="#717171"/>
							<path d="M13.6654 6.56006H2.33203C2.0587 6.56006 1.83203 6.33339 1.83203 6.06006C1.83203 5.78673 2.0587 5.56006 2.33203 5.56006H13.6654C13.9387 5.56006 14.1654 5.78673 14.1654 6.06006C14.1654 6.33339 13.9387 6.56006 13.6654 6.56006Z" fill="#717171"/>
							<path d="M10.6667 15.1666H5.33333C2.9 15.1666 1.5 13.7666 1.5 11.3333V5.66659C1.5 3.23325 2.9 1.83325 5.33333 1.83325H10.6667C13.1 1.83325 14.5 3.23325 14.5 5.66659V11.3333C14.5 13.7666 13.1 15.1666 10.6667 15.1666ZM5.33333 2.83325C3.42667 2.83325 2.5 3.75992 2.5 5.66659V11.3333C2.5 13.2399 3.42667 14.1666 5.33333 14.1666H10.6667C12.5733 14.1666 13.5 13.2399 13.5 11.3333V5.66659C13.5 3.75992 12.5733 2.83325 10.6667 2.83325H5.33333Z" fill="#717171"/>
						</svg>
						{ myDate }
						، ساعت {toPersianNumber(orderedHour)}
					</p>
					
					<p className="mr-2 hidden lg:flex">
						مبلغ: { toPersianNumber(price.toLocaleString()) } تومان
						<span className="mr-1">تخفیف: {toPersianNumber(discount.toLocaleString())} تومان</span>
					</p>
				</div>
				
				{
					isFoodReceived === null && secondsLeft > 0 ? (
						
						<p className="flex items-center text-[10px] sm:text-xs">
							<svg className="ml-1 w-3 h-3 lg:w-4 lg:h-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M7.9987 15.1666C4.04536 15.1666 0.832031 11.9533 0.832031 7.99992C0.832031 4.04659 4.04536 0.833252 7.9987 0.833252C11.952 0.833252 15.1654 4.04659 15.1654 7.99992C15.1654 11.9533 11.952 15.1666 7.9987 15.1666ZM7.9987 1.83325C4.5987 1.83325 1.83203 4.59992 1.83203 7.99992C1.83203 11.3999 4.5987 14.1666 7.9987 14.1666C11.3987 14.1666 14.1654 11.3999 14.1654 7.99992C14.1654 4.59992 11.3987 1.83325 7.9987 1.83325Z" fill="#717171"/>
								<path d="M10.4751 10.6199C10.3884 10.6199 10.3017 10.5999 10.2217 10.5466L8.15505 9.31326C7.64172 9.00659 7.26172 8.33326 7.26172 7.73992V5.00659C7.26172 4.73326 7.48839 4.50659 7.76172 4.50659C8.03505 4.50659 8.26172 4.73326 8.26172 5.00659V7.73992C8.26172 7.97992 8.46172 8.33326 8.66839 8.45326L10.7351 9.68659C10.9751 9.82659 11.0484 10.1333 10.9084 10.3733C10.8084 10.5333 10.6417 10.6199 10.4751 10.6199Z" fill="#717171"/>
							</svg>
							تحویل تا
							<span className="mr-1 text-primary flex justify-items">
								{toPersianNumber(Math.floor(secondsLeft / 60))}
								:
								{toPersianNumber(Math.floor(secondsLeft % 60))}
							</span>
						</p>
						
					) : null
				}
				
			</div>
			
			<p className="flex items-center text-[10px] leading-[180%] mt-1">
				<svg className="-mr-[1px] ml-1 w-3 h-3 lg:w-4 lg:h-4" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.00187 9.44655C6.58187 9.44655 5.42188 8.29321 5.42188 6.86655C5.42188 5.43988 6.58187 4.29321 8.00187 4.29321C9.42188 4.29321 10.5819 5.44655 10.5819 6.87321C10.5819 8.29988 9.42188 9.44655 8.00187 9.44655ZM8.00187 5.29321C7.13521 5.29321 6.42188 5.99988 6.42188 6.87321C6.42188 7.74655 7.12854 8.45321 8.00187 8.45321C8.87521 8.45321 9.58187 7.74655 9.58187 6.87321C9.58187 5.99988 8.86854 5.29321 8.00187 5.29321Z" fill="#717171"/>
					<path d="M8.00109 15.1733C7.01443 15.1733 6.02109 14.7999 5.24776 14.0599C3.28109 12.1666 1.10776 9.14659 1.92776 5.55325C2.66776 2.29325 5.51443 0.833252 8.00109 0.833252C8.00109 0.833252 8.00109 0.833252 8.00776 0.833252C10.4944 0.833252 13.3411 2.29325 14.0811 5.55992C14.8944 9.15325 12.7211 12.1666 10.7544 14.0599C9.98109 14.7999 8.98776 15.1733 8.00109 15.1733ZM8.00109 1.83325C6.06109 1.83325 3.56776 2.86659 2.90776 5.77325C2.18776 8.91325 4.16109 11.6199 5.94776 13.3333C7.10109 14.4466 8.90776 14.4466 10.0611 13.3333C11.8411 11.6199 13.8144 8.91325 13.1078 5.77325C12.4411 2.86659 9.94109 1.83325 8.00109 1.83325Z" fill="#717171"/>
				</svg>
				{address}
			</p>
			
			<p className="flex items-center text-[10px] leading-[180%] mt-1 lg:hidden">
				<svg className="-mr-[1px] ml-1 w-3 h-3 lg:w-4 lg:h-4" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M6.5 4.875H3.5C3.295 4.875 3.125 4.705 3.125 4.5C3.125 4.295 3.295 4.125 3.5 4.125H6.5C6.705 4.125 6.875 4.295 6.875 4.5C6.875 4.705 6.705 4.875 6.5 4.875Z" fill="#717171"/>
					<path d="M9.51994 7.39996C8.76494 7.39996 8.12496 6.83996 8.06496 6.11996C8.02496 5.70496 8.17496 5.29997 8.47496 5.00497C8.72496 4.74497 9.07994 4.59998 9.45494 4.59998H10.5C10.995 4.61498 11.375 5.00495 11.375 5.48495V6.51498C11.375 6.99498 10.995 7.38496 10.515 7.39996H9.51994ZM10.4849 5.34998H9.45995C9.28495 5.34998 9.12496 5.41497 9.00996 5.53497C8.86496 5.67497 8.79496 5.86496 8.81496 6.05496C8.83996 6.38496 9.15994 6.64996 9.51994 6.64996H10.5C10.565 6.64996 10.625 6.58998 10.625 6.51498V5.48495C10.625 5.40995 10.5649 5.35498 10.4849 5.34998Z" fill="#717171"/>
					<path d="M8 10.625H3.5C1.78 10.625 0.625 9.47 0.625 7.75V4.25C0.625 2.71 1.57499 1.595 3.04999 1.41C3.18499 1.39 3.34 1.375 3.5 1.375H8C8.12 1.375 8.275 1.38 8.435 1.405C9.91 1.575 10.875 2.695 10.875 4.25V4.97501C10.875 5.18001 10.705 5.35001 10.5 5.35001H9.45999C9.28499 5.35001 9.12501 5.415 9.01001 5.535L9.005 5.54001C8.865 5.67501 8.8 5.85999 8.815 6.04999C8.84 6.37999 9.15999 6.64499 9.51999 6.64499H10.5C10.705 6.64499 10.875 6.81499 10.875 7.01999V7.745C10.875 9.47 9.72 10.625 8 10.625ZM3.5 2.125C3.38 2.125 3.26499 2.13499 3.14999 2.14999C2.04999 2.28999 1.375 3.09 1.375 4.25V7.75C1.375 9.04 2.21 9.875 3.5 9.875H8C9.29 9.875 10.125 9.04 10.125 7.75V7.39999H9.51999C8.76499 7.39999 8.125 6.84 8.065 6.12C8.025 5.71 8.17501 5.30001 8.47501 5.01001C8.73501 4.74501 9.08499 4.60001 9.45999 4.60001H10.125V4.25C10.125 3.08 9.43999 2.27499 8.32999 2.14499C8.20999 2.12499 8.105 2.125 8 2.125H3.5Z" fill="#717171"/>
				</svg>
				مبلغ: {toPersianNumber(price.toLocaleString())} تومان
				<span className="mr-1">تخفیف: {toPersianNumber(discount.toLocaleString())} تومان</span>
			</p>
			
			<Carousel
				opts={{
					dragFree: true,
					direction: "rtl"
				}}
				className="!pl-0 ml-0 mt-4"
			>
				<CarouselContent className="-ml-3 select-none last:ml-0">
					
					{
						products.length && orderedItems?.map((product, index) => (
							<CarouselItem
								key={index}
								className="basis-[unset] pl-1"
							>
								<OrderTrackingProduct
									src={findSrc(product.product.title) as string}
									alt={product.product.title}
									count={+product.count}
									name={product.product.title}
									price={+product.product.price}
								/>
							</CarouselItem>
						))
					}
					
				</CarouselContent>
				
				<CarouselPrevious
					className="right-4 w-6 h-6 xs--sm:w-8 xs--sm:h-8 prev-btn rotate-180"
				/>
				<CarouselNext2
					className="left-1 w-6 h-6 xs--sm:w-8 xs--sm:h-8 next-btn"
				/>
				
			</Carousel>
			
			<div className="w-full text-center sm:text-end">
				{
					isFoodReceived === null && secondsLeft > 0 ? (
						<CancelOrderButton orderCode={orderCode} setIsFoodReceived={setIsFoodReceived} />
					) : (
						<ReorderBtn orderedItems={orderedItems} />
					)
				}
				
			</div>
			
		</div>
	)
}