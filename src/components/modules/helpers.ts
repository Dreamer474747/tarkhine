import { Dispatch, SetStateAction } from "react";
import { getCookie, setCookie, hasCookie } from "cookies-next";
import { showSwal } from "u/helpers";


const refreshMyAccessToken = async (router: any) => {
	
	const res = await fetch(`${process.env.BASE_URL}/auth/token/refresh/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify({ refresh: getCookie("refresh") })
	});
	
	if (res.status === 200) {
		const data = await res.json();
		setCookie("token", data.access, { maxAge: 60 });
		router.refresh();
	}
}



const addToWishlist = async (setIsPending: Dispatch<SetStateAction<boolean>>, productCode: string, router: any) => {
	
	setIsPending(true);
	const token = getCookie("token");
	
	if (token) {
		const res = await fetch(`${process.env.BASE_URL}/favorite-products/add/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Authorization": `Bearer ${token}`
			},
			body: JSON.stringify({ product_code: productCode })
		});
		
		if (res.status === 202) {
			showSwal("محصول مورد نظر با موفقیت به لیست علاقمندیها اضافه شد", "success", "عالی");
		} else {
			showSwal("مشکلی پیش امد، دوباره تلاش کنید", "success", "باشه");
		}
		setIsPending(false);
		
	} else {
		if (hasCookie("refresh")) {
			await refreshMyAccessToken(router);
			addToWishlist(setIsPending, productCode, router);
		
		} else {
			showSwal("اول باید به اکانتتان وارد شوید", "error", "باشه");
		}
		setIsPending(false);
	}
}


export { refreshMyAccessToken, addToWishlist };