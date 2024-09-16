import Nav from "m/nav/Nav";
import Footer from "m/footer/Footer";

import UserActionsDesktop from "./components/UserActionsDesktop";
import PersonalDataForm from "./components/PersonalDataForm";
import ContentWrapper from "./components/ContentWrapper";


export default function UserLayout ({ children }: { children: React.ReactNode }) {
	
	
	return (
		<>
			<header>
				<Nav />
			</header>
			
			<main className="container rtl">
				<div className="flex">
					<UserActionsDesktop />
					<ContentWrapper title="پروفایل من">
						{children}
					</ContentWrapper>
				</div>
			</main>
			
			<Footer isForUserP={true} />
		</>
	)
}