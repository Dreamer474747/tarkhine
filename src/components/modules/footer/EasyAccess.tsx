import Link from "next/link";



const EasyAccess = () => {
	
	
	return (
		
		<ul className="flex flex-col justify-between h-48 footer-links">
		
			<li>
				<h4 className="text-white text-xl leading-[140%]">دسترسی آسان</h4>
			</li>
			<li>
				<Link href="/faq" className="footer-link">پرسش‌های متداول</Link>
			</li>
			<li>
				<Link href="/rules" className="footer-link">قوانین ترخینه</Link>
			</li>
			<li>
				<Link href="/privacy" className="footer-link">حریم خصوصی</Link>
			</li>
			<li className="flex justify-start items-center [&>*]:mx-2 -mr-2">
				<Link id="twitter" href="#">
					<svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16.425 0.125C13.5543 0.125 11.22 2.45937 11.22 5.33C11.22 5.5025 11.2631 5.67125 11.28 5.84C7.73059 5.50063 4.59184 3.79063 2.45996 1.175C2.36059 1.04937 2.20684 0.981875 2.04559 0.993125C1.88621 1.00437 1.74371 1.09625 1.66496 1.235C1.21684 2.00563 0.959962 2.8925 0.959962 3.845C0.959962 4.99813 1.37246 6.05375 2.00996 6.92C1.88621 6.86562 1.75121 6.83563 1.63496 6.77C1.48684 6.69125 1.30871 6.695 1.16434 6.78125C1.01996 6.8675 0.931837 7.02313 0.929962 7.19V7.25C0.929962 9.01812 1.84496 10.5538 3.19496 11.495C3.17996 11.4931 3.16496 11.4987 3.14996 11.495C2.98496 11.4669 2.81809 11.525 2.70746 11.6506C2.59684 11.7762 2.56121 11.9506 2.60996 12.11C3.14621 13.7769 4.51496 15.05 6.20996 15.515C4.85996 16.3175 3.29434 16.79 1.60496 16.79C1.23934 16.79 0.888712 16.7712 0.539962 16.73C0.314962 16.7 0.0993369 16.8312 0.0243371 17.045C-0.052538 17.2587 0.0318371 17.4969 0.224962 17.615C2.39059 19.0044 4.96121 19.82 7.72496 19.82C12.2043 19.82 15.7181 17.9487 18.075 15.275C20.4318 12.6012 21.66 9.12875 21.66 5.885C21.66 5.74813 21.6487 5.615 21.645 5.48C22.5243 4.80687 23.31 4.0175 23.925 3.095C24.0468 2.91687 24.0337 2.67875 23.8931 2.51375C23.7543 2.34875 23.52 2.29813 23.325 2.39C23.0775 2.50063 22.7887 2.51187 22.53 2.6C22.8712 2.14437 23.1637 1.65313 23.34 1.1C23.4 0.910625 23.3343 0.7025 23.1787 0.57875C23.0231 0.456875 22.8056 0.441875 22.635 0.545C21.8156 1.03063 20.9081 1.37187 19.95 1.58C19.02 0.71 17.7956 0.125 16.425 0.125ZM16.425 1.085C17.6493 1.085 18.7556 1.60813 19.53 2.435C19.6462 2.555 19.8168 2.60563 19.98 2.57C20.6062 2.44625 21.2006 2.26437 21.78 2.03C21.4462 2.48 21.0337 2.86437 20.55 3.155C20.3306 3.26187 20.2275 3.515 20.3081 3.74563C20.3868 3.97437 20.6268 4.1075 20.865 4.055C21.345 3.99687 21.7725 3.80187 22.23 3.68C21.8193 4.12437 21.3693 4.52563 20.88 4.88C20.7468 4.9775 20.6737 5.135 20.685 5.3C20.6925 5.495 20.7 5.68813 20.7 5.885C20.7 8.885 19.5487 12.1419 17.355 14.63C15.1612 17.1181 11.94 18.86 7.72496 18.86C5.81059 18.86 4.00309 18.4363 2.36996 17.69C4.39496 17.5344 6.26246 16.8181 7.76996 15.635C7.92746 15.5094 7.98934 15.2994 7.92559 15.1081C7.86184 14.9169 7.68559 14.7856 7.48496 14.78C5.90246 14.7519 4.57684 13.8313 3.86996 12.53C3.89621 12.53 3.91871 12.53 3.94496 12.53C4.41934 12.53 4.88809 12.47 5.32496 12.35C5.53496 12.2881 5.67934 12.0931 5.67184 11.8737C5.66434 11.6544 5.50871 11.4669 5.29496 11.42C3.58684 11.075 2.30621 9.68375 2.00996 7.955C2.49371 8.12187 2.98871 8.25313 3.52496 8.27C3.74434 8.28312 3.94309 8.14625 4.01059 7.93812C4.07809 7.73 3.99559 7.50125 3.80996 7.385C2.66996 6.62187 1.91996 5.3225 1.91996 3.845C1.91996 3.2975 2.06246 2.795 2.24996 2.315C4.64996 4.94937 8.00996 6.69875 11.805 6.89C11.955 6.8975 12.1012 6.83562 12.1987 6.72125C12.2962 6.605 12.3337 6.45125 12.3 6.305C12.2268 5.99375 12.18 5.66375 12.18 5.33C12.18 2.97875 14.0737 1.085 16.425 1.085Z" fill="#EDEDED"/>
					</svg>
				</Link>
		
				<Link id="instagram" href="#">
					<svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6.68043 0.939453C3.24002 0.939453 0.44043 3.73905 0.44043 7.17945V15.8195C0.44043 19.2599 3.24002 22.0595 6.68043 22.0595H15.3204C18.7608 22.0595 21.5604 19.2599 21.5604 15.8195V7.17945C21.5604 3.73905 18.7608 0.939453 15.3204 0.939453H6.68043ZM6.68043 1.89945H15.3204C18.2419 1.89945 20.6004 4.25794 20.6004 7.17945V15.8195C20.6004 18.741 18.2419 21.0995 15.3204 21.0995H6.68043C3.75892 21.0995 1.40043 18.741 1.40043 15.8195V7.17945C1.40043 4.25794 3.75892 1.89945 6.68043 1.89945ZM16.7604 4.77945C16.5058 4.77945 16.2616 4.8806 16.0816 5.06063C15.9016 5.24067 15.8004 5.48485 15.8004 5.73945C15.8004 5.99406 15.9016 6.23824 16.0816 6.41828C16.2616 6.59831 16.5058 6.69945 16.7604 6.69945C17.015 6.69945 17.2592 6.59831 17.4393 6.41828C17.6193 6.23824 17.7204 5.99406 17.7204 5.73945C17.7204 5.48485 17.6193 5.24067 17.4393 5.06063C17.2592 4.8806 17.015 4.77945 16.7604 4.77945ZM11.0004 6.21945C8.09005 6.21945 5.72043 8.58907 5.72043 11.4995C5.72043 14.4098 8.09005 16.7795 11.0004 16.7795C13.9108 16.7795 16.2804 14.4098 16.2804 11.4995C16.2804 8.58907 13.9108 6.21945 11.0004 6.21945ZM11.0004 7.17945C13.392 7.17945 15.3204 9.1079 15.3204 11.4995C15.3204 13.891 13.392 15.8195 11.0004 15.8195C8.60887 15.8195 6.68043 13.891 6.68043 11.4995C6.68043 9.1079 8.60887 7.17945 11.0004 7.17945Z" fill="#EDEDED"/>
					</svg>
				</Link>
		
				<Link id="telegram" href="#">
					<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21.3008 3.37348C21.067 3.38374 20.8394 3.4488 20.6342 3.53098C20.4311 3.61261 19.2617 4.11173 17.5348 4.85005C15.808 5.58836 13.5632 6.54981 11.338 7.50317C6.88753 9.4099 2.51421 11.286 2.51421 11.286L2.54609 11.2738C2.54609 11.2738 2.28214 11.362 2.01452 11.5485C1.88072 11.6417 1.73677 11.7621 1.6189 11.9375C1.50103 12.113 1.41486 12.3617 1.44734 12.6247C1.5614 13.5486 2.5189 13.8107 2.5189 13.8107L2.52265 13.8125L6.79577 15.275C6.90472 15.6385 8.09183 19.6006 8.35296 20.4397C8.49718 20.9036 8.63216 21.1712 8.77296 21.3538C8.84342 21.4451 8.91726 21.5158 8.9989 21.5675C9.03134 21.5881 9.06545 21.6035 9.09921 21.6172H9.10109C9.10523 21.6191 9.10914 21.6192 9.11327 21.621L9.10202 21.6182C9.10987 21.6213 9.11761 21.6267 9.12546 21.6294C9.1407 21.6348 9.15003 21.6346 9.16952 21.6388C9.65891 21.8097 10.0639 21.4925 10.0639 21.4925L10.0808 21.4794L12.7058 19.0447L16.9658 22.3663L17.0192 22.3907C17.7649 22.7217 18.4392 22.537 18.8126 22.2332C19.1861 21.9293 19.333 21.5375 19.333 21.5375L19.3489 21.4963L22.4792 5.18098C22.5593 4.81597 22.5707 4.50046 22.4951 4.21536C22.4196 3.93025 22.2361 3.68241 22.0058 3.54504C21.7755 3.40768 21.5346 3.36323 21.3008 3.37348ZM21.3261 4.34942C21.421 4.34502 21.4914 4.35588 21.5136 4.36911C21.5358 4.38234 21.5457 4.3806 21.567 4.46098C21.5883 4.54137 21.5999 4.71068 21.5417 4.97567L21.5398 4.9813L18.4273 21.2019C18.42 21.2183 18.3551 21.3683 18.207 21.4888C18.056 21.6117 17.8879 21.7077 17.442 21.5207L12.7836 17.8879L12.6523 17.7847L12.6495 17.7875L11.2564 16.7422L19.0855 7.5313C19.1456 7.4607 19.184 7.37419 19.1961 7.28223C19.2081 7.19026 19.1932 7.09678 19.1533 7.01309C19.1133 6.92939 19.05 6.85906 18.9709 6.8106C18.8918 6.76215 18.8004 6.73764 18.7076 6.74005C18.617 6.7424 18.529 6.77035 18.4536 6.82067L7.12484 14.3732L2.84515 12.9079C2.84515 12.9079 2.42018 12.6714 2.39984 12.5066C2.39871 12.4975 2.39369 12.5057 2.41577 12.4729C2.43786 12.44 2.49337 12.3845 2.56296 12.336C2.70215 12.239 2.86109 12.1804 2.86109 12.1804L2.87702 12.1747L2.89296 12.1682C2.89296 12.1682 7.26651 10.292 11.7167 8.38536C13.9418 7.43204 16.1862 6.4713 17.9126 5.73317C19.6386 4.99523 20.8858 4.46406 20.9914 4.42161C21.1116 4.37347 21.2311 4.35382 21.3261 4.34942ZM16.1342 9.52067L10.197 16.506L10.1942 16.5088C10.1849 16.52 10.1762 16.5315 10.168 16.5435C10.1585 16.5565 10.1498 16.5699 10.1417 16.5838C10.1084 16.6404 10.087 16.7033 10.0789 16.7685C10.0789 16.7697 10.0789 16.771 10.0789 16.7722L9.30546 20.2504C9.2926 20.2128 9.2836 20.199 9.26984 20.1547V20.1538C9.02418 19.3645 7.90417 15.6278 7.74921 15.111L16.1342 9.52067ZM10.8673 17.6507L11.9342 18.4513L10.3667 19.9044L10.8673 17.6507Z" fill="#EDEDED"/>
					</svg>
				</Link>
			</li>
		</ul>
	)
}


export default EasyAccess;