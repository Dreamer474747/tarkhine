import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "ui/Accordion";



export default function QuestionsAndAnswers() {
	
	const qAndAs = [
		{
			q: "امکانات ترخینه",
			a: "وبسایت سفارش غذای رستوران‌های زنجیره‌ای ترخینه با اتصال مستقیم به نرم افزار اتوماسیون شعبات رستوران، امکان اشتباهات هنگام ثبت سفارش آنلاین غذا و همچنین زمان مورد نیاز برای آماده سازی و تحویل آن را به حداقل ممکن می رسونه."
		},
		{
			q: "حساب کاربری در ترخینه",
			a: "خیلی ساده، پس از انتخاب غذای مورد علاقه تان از منوی رستوران، هنگام ثبت سفارش با وارد کردن شماره تلفن همراه یک پیامک حاوی کد تایید برای شما ارسال و با وارد کردن کد تایید، ثبت نام شما تکمیل می شه. یا می تونید در صفحه اصلی سایت روی گزینه ورود کلیک کنید."
		},
		{
			q: "سابقه خرید",
			a: "با ورود به حساب کاربری و کلیک روی گزینه سفارشات قبلی سابقه تمام خریدهای شما نمایش داده می شه."
		},
		{
			q: "راه‌های پرداخت",
			a: "هنگام ثبت سفارش غذا می تونید روش پرداخت دلخواه خودتون رو انتخاب کنید. آنلاین و یا نقدی در هنگام تحویل سفارش بصورت حضوری."
		},
		{
			q: "تفاوت قیمت در منو شعبات و منو وبسایت",
			a: "بله. قیمت منوی وبسایت ترخینه دقیقا مطابق با قیمت منوی شعب رستوران  است و در صورت تغییر قیمت از طرف رستوران این تغییر در وبسایت ترخینه بلافاصله قابل مشاهده است."
		},
		{
			q: "هدیه و تخفیف",
			a: "برای استفاده از کد تخفیف میتونید به سادگی کد رو در سبد خرید، در قسمت مشخص شده وارد کنید. اعتبار هدیه هنگام انتخاب روش پرداخت برای شما نمایش داده میشه و در صورت تمایل میتونید ازش استفاده کنید."
		},
	]
	
	
	return (
		<div className="container">
			<section className="mt-6 border -mb-3 rounded-lg ">
				
				{
					qAndAs.map((questionAndAnswer, index) => (
						<Accordion
							type="single"
							collapsible
							key={index}
							className={index !== 5 ? "border-b border-[#E2E8F0]" : ""}
						>
							<AccordionItem className="px-4" value={`${index}`}>
								
								<AccordionTrigger
									className={`text-[0.7rem] sm:text-lg lg:text-xl text-text
									text-right text-primary`}
								>
									{questionAndAnswer.q}
								</AccordionTrigger>
								
								<AccordionContent
									className={`rtl text-[10px] sm:text-sm lg:text-base
									text-[#717171]`}
								>
									{questionAndAnswer.a}
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					))
				}
				
			</section>
		</div>
	)
}