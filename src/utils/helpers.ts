//@ts-nocheck
import { getCookie, setCookie } from "cookies-next";
import swal from "sweetalert";

const showSwal = (title: string, icon: string, buttons: string[] | string ) => {
	return swal({ title, icon, buttons })
}


const getCurrentBranchName = (pathname: string) => {
	switch(pathname) {
		case "/branch/okbaataan":
			return "اکباتان";
			break;
		case "/branch/chaaloos":
			return "چالوس";
			break;
		case "/branch/aqdasie":
			return "اقدسیه";
			break;
		case "/branch/vanak":
			return "ونک";
			break;
		default:
			return "";
	}
}

const toPersianNumber = (n: string | number) => {
	const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
	
	return n
		.toString()
		.replace(/\d/g, (x: any) => farsiDigits[x]);
}

const priceCalculator = (price: number, discount: number | null) => {
	
	if (discount) {
		const countedPercent = (100 - discount) / 100;
		const finalPrice = price * countedPercent;
		
		return toPersianNumber(finalPrice.toLocaleString());
		
	} else {
		return toPersianNumber(price.toLocaleString());
	}
	
}


export { getCurrentBranchName, toPersianNumber, priceCalculator, showSwal };