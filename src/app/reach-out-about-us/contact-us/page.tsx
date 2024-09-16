import Footer from "m/footer/Footer";
import Nav from "m/nav/Nav";
import Branch from "./components/Branch";

import { EstedadBold } from "@/app/Fonts";


export default function Page() {
	
	const branches = [
		{
			src: "/images/contact-us-okbaataan.jpg",
			alt: "okbaataan-branch",
			name: "اکباتان",
			address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
			phone: "۰۲۱-۵۴۸۹۱۲۵۰-۵۱",
		},
		{
			src: "/images/contact-us-chaaloos.jpg",
			alt: "chaaloos-branch",
			name: "چالوس",
			address: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
			phone: "۰۲۱-۵۴۸۹۱۲۵۲-۵۳",
		},
		{
			src: "/images/contact-us-aqdasie.jpg",
			alt: "aqdasie-branch",
			name: "اقدسیه",
			address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
			phone: "۰۲۱-۵۴۸۹۱۲۵۴-۵۵",
		},
		{
			src: "/images/contact-us-vanak.jpg",
			alt: "vanak-branch",
			name: "ونک",
			address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
			phone: "۰۲۱-۵۴۸۹۱۲۵۶-۵۷",
		},
	]
	
	
	return (
		<>
			<header className="rtl">
				<Nav />
				
				<div
					id="contact-us-header"
					className={`h-[336px] text-xl sm:text-2xl lg:text-3xl text-[#e5f2e9]
					text-center ${EstedadBold} flex justify-items`}
				>
					<h1>
						با ترخینه در تماس باشید.
					</h1>
				</div>
			</header>
			
			<main
				className="rtl container mt-10 flex flex-col items-center space-y-6"
			>
				
				{
					branches.map(branch => (
						<Branch
							key={branch.name}
							src={branch.src}
							alt={branch.alt}
							name={branch.name}
							address={branch.address}
							phone={branch.phone}
						/>
					))
				}
				
			</main>
			
			<Footer isForUserP={false} />
		</>
	)
}