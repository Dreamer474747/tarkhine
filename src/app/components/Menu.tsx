import Image from "next/image";


const Menu = () => {
	
	return (
		<div
			id="menu"
			className={`container flex flex-col sm:flex-row justify-between
			[&>div]:h-40 lg--xl:space-x-6 lg--xl:flex-nowrap sm:[&>*]:w-[48%] md:[&>*]:w-[40%]
			lg--xl:[&>*]:w-[inherit] flex-wrap`}
		>
			
            <div className="bg-primary rounded-lg relative menu-custom-drop-shadow">
                <Image
					width="240"
					height="286"
					className={`absolute -top-28 sm--md:-top-40 menu-item
					w-[200px] sm--md:w-[240px]`}
					src="/images/drink.png"
					alt="drink"
				/>
                <div
                    className="rounded h-12 w-[155px] absolute -bottom-6 left-0 right-0 mx-auto text-xl bg-text-bg leading-[3rem] text-center">
                    نوشیدنی
                </div>
            </div>
			
            <div
				className={`bg-primary rounded-lg relative menu-custom-drop-shadow
				mt-[6.5rem] sm:mt-0`}
			>
                <Image
					width="240"
					height="240"
					className={`absolute -top-14 sm--md:top-[-7rem] menu-item
					w-[190px] sm--md:w-[240px]`}
					src="/images/dessert.png"
					alt="dessert"
				/>
                <div
                    className="rounded h-12 w-[155px] absolute -bottom-6 left-0 right-0 mx-auto text-xl bg-text-bg leading-[3rem] text-center">
                    دسر
                </div>
            </div>
			
            <div
				className={`bg-primary rounded-lg relative menu-custom-drop-shadow
				mt-[6.5rem] bottom-dishes lg--xl:mt-0`}
			>
                <Image
					width="240"
					height="240"
					className={`absolute -top-14 sm--md:top-[-7rem] menu-item
					w-[190px] sm--md:w-[240px]`}
					src="/images/appetizer.png"
					alt="appetizer"
				/>
                <div
                    className="rounded h-12 w-[155px] absolute -bottom-6 left-0 right-0 mx-auto text-xl bg-text-bg leading-[3rem] text-center">
                    پیش غذا
                </div>
            </div>
			
            <div
				className={`bg-primary rounded-lg relative menu-custom-drop-shadow
				mt-[6.5rem] bottom-dishes lg--xl:mt-0`}
			>
                <Image
					width="240"
					height="240"
					className={`absolute -top-14 sm--md:top-[-7rem] menu-item
					w-[190px] sm--md:w-[240px]`}
					src="/images/main-dish.png"
					alt="main-dish"
				/>
                <div
                    className="rounded h-12 w-[155px] absolute -bottom-6 left-0 right-0 mx-auto text-xl bg-text-bg leading-[3rem] text-center">
                    غذای اصلی
                </div>
            </div>
			
        </div>
	)
}

export default Menu;