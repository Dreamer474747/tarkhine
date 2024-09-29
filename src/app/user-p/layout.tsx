import Nav from "m/nav/Nav";
import Footer from "m/footer/Footer";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export default function UserLayout ({ children }: { children: React.ReactNode }) {
	
	const refreshToken = cookies().get("refresh");
	if (!refreshToken) {
		redirect("/");
	}
	
	
	return (
		<>
			<header>
				<Nav />
			</header>
			
			<main className="container rtl pt-2 sm:pt-6 md:pt-8">
				{children}
			</main>
			
			<Footer hiddenInLowerWidth={true} />
		</>
	)
}