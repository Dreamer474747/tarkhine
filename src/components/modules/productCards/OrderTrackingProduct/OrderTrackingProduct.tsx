import Image from "next/image";

import { toPersianNumber } from "u/helpers";

type ProductParams = {
	src: string,
	alt: string,
	count: number,
	name: string,
	price: number
}


export default function OrderTrackingProduct({ src, alt, count, name, price }: ProductParams) {
	
	
	return (
		<div
			className={`w-[92px] h-[92px] sm:w-[125px] sm:h-[125px] rounded-lg text-[10px] leading-[180%]
			ml-2 text-center border relative`}
		>
			<Image
				width="125"
				height="81"
				src={src}
				alt={alt}
				className="rounded-t-lg w-full h-12 sm:h-[81px]"
			/>
			
			<div
				className={`absolute bottom-[2.85rem] left-[0.2rem] bg-white w-[17px] sm:w-[23px] h-4
				rounded flex justify-items text-[10px] sm:text-xs text-primary`}
			>
				{toPersianNumber(count)}
				<svg className="sm:mb-[1px] w-[5px] sm:w-[6px]" width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M4.59961 0.310547L5.18555 0.896484L3.58594 2.49023L5.18555 4.08984L4.59961 4.66992L3.00586 3.07617L1.40625 4.68164L0.820312 4.08984L2.41992 2.49023L0.820312 0.890625L1.40039 0.304688L3.00586 1.91016L4.59961 0.310547Z" fill="#417F56"/>
				</svg>
			</div>
			
			<p className="mt-[0.2rem]">{name}</p>
			<p>
				{toPersianNumber(price.toLocaleString())}
				{" "}
				تومان
			</p>
		</div>
	)
}