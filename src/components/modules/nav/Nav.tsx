

import Image from "next/image";

import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import Sidebar from "./Sidebar";


const Nav = () => {
	
	
	
	
	
	
	return (
		<nav className="h-16 sm:h-[115px] flex justify-between items-center rtl container shadow-md">
			
			<Sidebar />
			
			<Image
				width="155"
				height="51"
				src="/images/Logo.png"
				alt="tarkhine-logo"
				className="w-[102px] sm:w-[155px] h-[32px] sm:h-[51px]"
			/>
	
			<NavLinks />
			<NavActions />
			
		</nav>
	)
}


export default Nav;