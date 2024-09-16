



const Form = () => {

	return (
		
		<div className="hidden lg:flex flex-col justify-between h-48">
			<h4 className=" text-white text-xl leading-[140%]">پیام به ترخینه</h4>
	
			<form className="flex flex-col justify-start text-white relative">
				<div className="flex relative">
					<div
						className={`flex flex-col space-y-3 [&>*]:rounded [&>*]:bg-transparent
						[&>*]:border [&>*]:border-[#717171] [&>*]:p-2 [&>*]:w-[275px] [&>*]:h-10`}
					>
						<input placeholder="نام و نام خانوادگی" type="text" className="custom-placeholder" />
						<input placeholder="شماره تماس" type="number" className="custom-placeholder" />
						<input placeholder="ادرس ایمیل(اختیاری)" type="email" className="custom-placeholder" />
					</div>
	
					<textarea
						placeholder="پیام شما"
						cols={30}
						rows={2}
						maxLength={200}
						className="mr-6 p-2 bg-transparent rounded border border-[#717171] custom-placeholder"
					></textarea>
	
					<p className="absolute bottom-[-17px] left-0 text-xs">۰/۲۰۰</p>
				</div>
				<button
					type="submit"
					className={`text-white w-[163px] h-10 border border-[#717171] rounded
					absolute -bottom-16 left-0`}
				>
					ارسال پیام
				</button>
			</form>
		</div>
	)
}

export default Form;