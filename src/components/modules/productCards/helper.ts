import { getCookie, setCookie } from "cookies-next";


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

export { refreshMyAccessToken };