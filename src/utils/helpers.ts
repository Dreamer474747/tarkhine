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

export { getCurrentBranchName, toPersianNumber };