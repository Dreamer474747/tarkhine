"use client";
import { usePathname } from "next/navigation";
import { getCurrentBranchName } from "u/helpers";
import Link from "next/link";


const NavLinks = () => {
	
	const pathname = usePathname();
	
	
	
	return (
		
		<ul
			className={`hidden lg:flex justify-center items-center [&>li]:ml-4
			[&>li]:text-[#717171]`}
		>
			<li>
				<Link href="/" className={pathname === "/" ? "active-nav-link" : ""}>
					صفحه اصلی
				</Link>
			</li>
			
			<li className="flex items-center dropdown">
				
				<Link
					href="#"
					className={`flex items-center
					${(/branch/g).test(pathname) ? "active-nav-link" : ""}`}
				>
					شعبه {getCurrentBranchName(pathname)}
					<svg className="mr-1" width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.50001 11.7C8.03335 11.7 7.56668 11.52 7.21335 11.1667L2.86668 6.81999C2.67335 6.62666 2.67335 6.30666 2.86668 6.11332C3.06001 5.91999 3.38001 5.91999 3.57335 6.11332L7.92001 10.46C8.24001 10.78 8.76001 10.78 9.08001 10.46L13.4267 6.11332C13.62 5.91999 13.94 5.91999 14.1333 6.11332C14.3267 6.30666 14.3267 6.62666 14.1333 6.81999L9.78668 11.1667C9.43335 11.52 8.96668 11.7 8.50001 11.7Z"
							fill="#717171" />
					</svg>
				</Link>
				<div className="dropdown_content">
					<Link href="/branch/okbaataan">اکباتان</Link>
					<Link href="/branch/chaaloos">چالوس</Link>
					<Link href="/branch/aqdasie">اقدسیه</Link>
					<Link href="/branch/vanak">ونک</Link>
				</div>
				
			</li>
	
			<li className="flex items-center dropdown">
				
				<Link
					className={`flex items-center ${(/menu/g).test(pathname) ? "active-nav-link" : ""}`}
					href="/menu"
				>
					منو
					<svg className="mr-1" width="16" height="16" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M8.50001 11.7C8.03335 11.7 7.56668 11.52 7.21335 11.1667L2.86668 6.81999C2.67335 6.62666 2.67335 6.30666 2.86668 6.11332C3.06001 5.91999 3.38001 5.91999 3.57335 6.11332L7.92001 10.46C8.24001 10.78 8.76001 10.78 9.08001 10.46L13.4267 6.11332C13.62 5.91999 13.94 5.91999 14.1333 6.11332C14.3267 6.30666 14.3267 6.62666 14.1333 6.81999L9.78668 11.1667C9.43335 11.52 8.96668 11.7 8.50001 11.7Z"
							fill="#717171" />
					</svg>
				</Link>
				<div className="dropdown_content">
					<Link href="/menu/main-dish">غذای اصلی</Link>
					<Link href="/menu/appetizer">پیش غذا</Link>
					<Link href="/menu/dessert">دسر</Link>
					<Link href="/menu/drink">نوشیدنی</Link>
				</div>
				
			</li>
			
			<li>
				<Link
					href="/about"
					className={pathname === "/about" ? "active-nav-link" : ""}
				>
					درباره ما
				</Link>
			</li>
	
			<li>
				<Link
					href="/contact-us"
					className={pathname === "/contact-us" ? "active-nav-link" : ""}
				>
					تماس با ما
				</Link>
			</li>
		</ul>
	)
}


export default NavLinks;