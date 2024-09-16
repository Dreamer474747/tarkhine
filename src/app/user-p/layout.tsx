import Nav from "m/nav/Nav";
import Footer from "m/footer/Footer";



export default function UserLayout ({ children }: { children: React.ReactNode }) {
	
	
	return (
		<>
			<header>
				<Nav />
			</header>
			
			<main className="container rtl">
				{children}
			</main>
			
			<Footer isForUserP={true} />
		</>
	)
}