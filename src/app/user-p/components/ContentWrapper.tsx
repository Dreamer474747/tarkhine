import { EstedadSemiBold } from "@/app/Fonts";
import { Separator } from "ui/Separator";

type ContentWrapperParams = {
	title: string,
	children: React.ReactNode
}


export default function ContentWrapper({ title, children }: ContentWrapperParams) {
	
	
	return (
		<div
			className="w-full h-[500px] border border-[#cbcbcb] rounded-lg p-4"
		>
			
			<h2
				className={`${EstedadSemiBold} text-lg leading-[180%]`}
			>
				{title}
			</h2>
			<Separator className="bg-[#cbcbcb] my-2" />
			{children}
			
		</div>
	)
}