import Branch from "./Branch";



const Branches = () => {
	
	const branches = [
		{
			src: "/images/vanak.jpg",
			alt: "vanak-branch-img",
			name: "ونک",
			address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
			link: "/branch/vanak"
		},
		{
			src: "/images/aqdasie.jpg",
			alt: "aqdasie-branch",
			name: "اقدسیه",
			address: "خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸",
			link: "/branch/aqdasie"
		},
		{
			src: "/images/chaaloos.jpg",
			alt: "chaaloos-branch",
			name: "چالوس",
			address: "چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی",
			link: "/branch/chaaloos"
		},
		{
			src: "/images/okbaataan.jpg",
			alt: "okbaataan-branch",
			name: "اکباتان",
			address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
			link: "/branch/okbaataan"
		},
	]
	
	
	
	return (
		
		<div
            id="branches"
            className={`container [&>*]:w-[305px] xl--2xl:[&>*]:w-[288px]
			[&>*]:h-[130px] sm:[&>*]:h-[344px] flex
			justify-around xl--2xl:justify-between items-center flex-wrap`}
        >
			
			{
				branches.map(branch => (
					<Branch
						key={branch.name}
						src={branch.src}
						alt={branch.alt}
						name={branch.name}
						address={branch.address}
						link={branch.link}
					/>
				))
			}
			
        </div>
	)
}


export default Branches;