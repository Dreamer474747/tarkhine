import Image from "next/image";
import Link from "next/link";

import { EstedadMedium } from "@/app/Fonts";

import { EmptyBasket, OrderInfo, LargeOrder, SmallOrder, Adress } from "./comps";

import Nav from "m/nav/Nav";
import Footer from "m/footer/Footer";


export default function Home() {
	
	const flag = true;
	
	
	return (
		<>
			<Nav />
			
			<main className="container mt-8 flex flex-col md:flex-row justify-between h-[550px] rtl">
				
				{
					flag ? (
						
						<>
							<div
								className="w-full md:w-1/2 lg:w-[60%] mb-4 md:mb-0"
							>
								<div
									className={`border rounded-lg h-full p-4 pb-1 overflow-y-auto ltr custom-scrollbar
									hidden lg:block`}
								>
									<LargeOrder
										src="/images/pizza.jpg"
										alt="pizza"
										name="پاستا سبزیجات"
										ingredients="پاستا، قارچ، گوجه، کدوی خوردشده، پیاز خلالی‌شده"
										price={140_000}
										discount={20}
										rate={3}
										numberOfOrders={2}
									/>
									
									<LargeOrder
										src="/images/pizza.jpg"
										alt="pizza"
										name="پاستا سبزیجات"
										ingredients="بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی"
										price={140_000}
										discount={20}
										rate={3}
										numberOfOrders={2}
									/>
									
									
								</div>
								
								<div
									className={`border rounded-lg h-full overflow-y-auto ltr custom-scrollbar
									lg:hidden max-h-[400px] md:max-h-[unset]`}
								>
									<SmallOrder
										name="پاستا سبزیجات"
										price={140_000}
										numberOfOrders={1}
									/>
									
									<SmallOrder
										name="پاستا سبزیجات"
										price={140_000}
										numberOfOrders={1}
									/>
									
									<SmallOrder
										name="پاستا سبزیجات"
										price={140_000}
										numberOfOrders={1}
									/>
									
									<SmallOrder
										name="پاستا سبزیجات"
										price={140_000}
										numberOfOrders={2}
									/>
									
									<SmallOrder
										name="پاستا سبزیجات"
										price={140_000}
										numberOfOrders={1}
									/>
									
									<SmallOrder
										name="پاستا سبزیجات"
										price={140_000}
										numberOfOrders={1}
									/>
									
									<SmallOrder
										name="پاستا سبزیجات"
										price={140_000}
										numberOfOrders={1}
									/>
								</div>
							</div>
							
							<div
								className={`w-full md:w-[48%] lg:w-[38%] h-full flex justify-between
								md:justify-start flex-col`}
							>
								<Adress />
								
								<OrderInfo />
							</div>
						</>
						
					) : (
						<EmptyBasket />
					)
				}
				
			</main>
			
			<Footer hiddenInLowerWidth={true} />
		</>
	);
}
