import Link from "next/link";



const BranchLinks = () => {
	
	
	return (
		<ul className="flex flex-col justify-between h-48 footer-links">
			
			<li>
				<h4 className="text-white text-xl leading-[140%]">شعبه‌های ترخینه</h4>
			</li>
			<li>
				<Link href="/branch/okbaataan" className="footer-link">شعبه اکباتان</Link>
			</li>
			<li>
				<Link href="/branch/chaaloos" className="footer-link">شعبه چالوس</Link>
			</li>
			<li>
				<Link href="/branch/aqdasie" className="footer-link">شعبه اقدسیه</Link>
			</li>
			<li>
				<Link href="/branch/vanak" className="footer-link">شعبه ونک</Link>
			</li>
		</ul>
	)
}


export default BranchLinks;