import EasyAccess from "./EasyAccess";
import BranchLinks from "./BranchLinks";
import Form from "./Form";



const Footer = ({ hiddenInLowerWidth }: { hiddenInLowerWidth: boolean }) => {
	
	return (
		<footer
			className={`h-[480px] sm:h-[319px] rtl mt-10 ${hiddenInLowerWidth ? "hidden md:block" : ""}`}
		>
		
			<div
				className={`flex justify-around lg:justify-between sm:pt-8 container
				h-full flex-col sm:flex-row w-fit sm:w-auto`}
			>
				
				<EasyAccess />
				<BranchLinks />
				<Form />
			</div>
	
		</footer>
	)
}


export default Footer;