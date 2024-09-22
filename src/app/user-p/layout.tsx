import Nav from "m/nav/Nav";
import Footer from "m/footer/Footer";



export default function UserLayout ({ children }: { children: React.ReactNode }) {
	
	
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