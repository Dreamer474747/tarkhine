import { ScrollArea } from "ui/ScrollArea";
import { Separator } from "ui/Separator";
import Product from "./Product";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext2,
  CarouselPrevious,
  CarouselDots
} from "ui/Carousel";

import { EstedadSemiBold } from "@/app/Fonts";

import Order from "./Order";


export default function Orders() {
	
	
	return (
		<div
			className={`w-full min-h-[400px] md:border md:border-[#cbcbcb] rounded-lg md:px-4 ltr
			max-h-[1186px] overflow-y-auto custom-scrollbar -pr-4`}
		>
			
			<h2
				className={`${EstedadSemiBold} text-lg leading-[180%] mt-4 rtl hidden md:block`}
			>
				سفارشات
			</h2>
			<Separator className="bg-[#cbcbcb] mt-2 mb-6 hidden md:block" />
			
			<div className="mb-4 rtl">
				<Order
					branchName="اقدسیه"
					isDelivered="otw"
					wasFoodReceived={null}
					orderedDate="شنبه ۸ مرداد"
					orderedHour="۱۸:۵۳"
					price={228500}
					discount={15}
					secondsLeftToDeliver={750}
					address="اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰"
				/>
				
				<Order
					branchName="اقدسیه"
					isDelivered={false}
					wasFoodReceived={true}
					orderedDate="شنبه ۸ مرداد"
					orderedHour="۱۸:۵۳"
					price={228500}
					discount={15}
					secondsLeftToDeliver={750}
					address="اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰"
				/>
				
				<Order
					branchName="اقدسیه"
					isDelivered={true}
					wasFoodReceived={true}
					orderedDate="شنبه ۸ مرداد"
					orderedHour="۱۸:۵۳"
					price={228500}
					discount={15}
					secondsLeftToDeliver={750}
					address="اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰"
				/>
				
				<Order
					branchName="اقدسیه"
					isDelivered={false}
					wasFoodReceived={false}
					orderedDate="شنبه ۸ مرداد"
					orderedHour="۱۸:۵۳"
					price={228500}
					discount={15}
					secondsLeftToDeliver={750}
					address="اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰"
				/>
				
				<Order
					branchName="اقدسیه"
					isDelivered={true}
					wasFoodReceived={false}
					orderedDate="شنبه ۸ مرداد"
					orderedHour="۱۸:۵۳"
					price={228500}
					discount={15}
					secondsLeftToDeliver={750}
					address="اقدسیه، بزرگراه ارتش، مجتمع شمیران سنتر، طبقه ۱۰"
				/>
				
			</div>
			
		</div>
	)
}