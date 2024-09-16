import UserActionsDesktop from "./components/UserActionsDesktop";
import PersonalDataForm from "./components/PersonalDataForm";
import ContentWrapper from "./components/ContentWrapper";


export default function Page() {
	
	
	return (
		<div className="flex">
			<UserActionsDesktop />
			<ContentWrapper title="پروفایل من">
				<PersonalDataForm />
			</ContentWrapper>
		</div>
	)
}