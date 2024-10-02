import Image from "next/image";


type BranchParams = {
	src: string,
	alt: string,
	name: string,
	address: string,
	link: string
}


const Branch = ({ src, alt, name, address, link }: BranchParams) => {
	
	
	return (
		<div
			className={`relative rounded-lg border flex flex-col-reverse sm:card mt-6
			sm:mx-4 lg--xl:mx-0`}
		>
            <div
				className={`absolute top-0 w-full flex flex-row-reverse
				sm:flex-row`}
			>
                <Image
					width="284"
					height="230"
                    className={`rounded-r-lg sm:rounded-br-none sm:rounded-t-lg
					w-1/2 sm:w-full h-[129px] sm:h-[230px] object-cover`}
                    src={src}
                    alt={alt}
                />
                
				<div className="sm:hidden m-auto text-center">
					
					<h5
						className="text-sm leading-[180%] text-text"
					>
						شعبه {name}
					</h5>
					
					<h6
						className="text-[10px] leading-[180%] text-text"
					>
						{address}
					</h6>
					
				</div>
				
                {/* <div
                    className={`absolute z-10 top-0 left-0 right-0 mx-auto hidden sm:flex
					justify-center items-center h-[228px] card-img-icon `}
                >
                    <div className="absolute">
                        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.2">
                            <rect x="0.5" y="0.5" width="57" height="57" rx="28.5" fill="white"/>
                            <rect x="0.5" y="0.5" width="57" height="57" rx="28.5" stroke="white"/>
                            </g>
                        </svg>
                    </div>
                
                    <div className="absolute">
                        <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.3">
                            <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" fill="white"/>
                            <rect x="0.5" y="0.5" width="41" height="41" rx="20.5" stroke="white"/>
                            </g>
                        </svg>
                    </div>
                
                    <div className="absolute">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0003 30.3333H12.0003C4.76033 30.3333 1.66699 27.24 1.66699 20V12C1.66699 4.75996 4.76033 1.66663 12.0003 1.66663H20.0003C27.2403 1.66663 30.3337 4.75996 30.3337 12V20C30.3337 27.24 27.2403 30.3333 20.0003 30.3333ZM12.0003 3.66663C5.85366 3.66663 3.66699 5.85329 3.66699 12V20C3.66699 26.1466 5.85366 28.3333 12.0003 28.3333H20.0003C26.147 28.3333 28.3337 26.1466 28.3337 20V12C28.3337 5.85329 26.147 3.66663 20.0003 3.66663H12.0003Z" fill="#F9F9F9"/>
                            <path d="M11.9997 14.3333C9.97301 14.3333 8.33301 12.6933 8.33301 10.6667C8.33301 8.64 9.97301 7 11.9997 7C14.0263 7 15.6663 8.64 15.6663 10.6667C15.6663 12.6933 14.0263 14.3333 11.9997 14.3333ZM11.9997 9C11.0797 9 10.333 9.74667 10.333 10.6667C10.333 11.5867 11.0797 12.3333 11.9997 12.3333C12.9197 12.3333 13.6663 11.5867 13.6663 10.6667C13.6663 9.74667 12.9197 9 11.9997 9Z" fill="#F9F9F9"/>
                            <path d="M3.56035 26.2667C3.24035 26.2667 2.92035 26.1067 2.73368 25.8267C2.42701 25.3734 2.54701 24.7467 3.01368 24.44L9.58701 20.0267C11.027 19.0534 13.0137 19.1734 14.3203 20.28L14.7603 20.6667C15.427 21.24 16.5603 21.24 17.2137 20.6667L22.7603 15.9067C24.1737 14.6934 26.4003 14.6934 27.827 15.9067L30.0003 17.7734C30.4137 18.1334 30.467 18.76 30.107 19.1867C29.747 19.6 29.1203 19.6534 28.6937 19.2934L26.5203 17.4267C25.8537 16.8534 24.7203 16.8534 24.0537 17.4267L18.507 22.1867C17.0937 23.4 14.867 23.4 13.4403 22.1867L13.0003 21.8C12.387 21.28 11.3737 21.2267 10.6937 21.6934L4.12035 26.1067C3.94701 26.2134 3.74701 26.2667 3.56035 26.2667Z" fill="#F9F9F9"/>
                        </svg>
                    </div>
                </div> */}
				
            </div>
            
            <div
				className={`${name === "اقدسیه" ? "card-info2" : "card-info pb-2"} hidden sm:flex
				flex-col items-center h-[114px] z-30 bg-white rounded-b-lg`}
			>
                <h4 className="text-xl leading-[180%] mt-3 mb-2 text-text">شعبه {name}</h4>
                <h6
					className="text-sm leading-[180%] text-[#717171] text-center mx-1"
				>
					{address}
				</h6>
                
                <a
                    href={link}
                    className={`card-button flex justify-items h-8 w-32
					${name === "اقدسیه" && "mt-3"} border border-[#315f41] rounded
					text-[#315F41] text-xs leading-[180%]`}
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.99953 13.78C9.87286 13.78 9.7462 13.7333 9.6462 13.6333L5.29953 9.28668C4.59286 8.58001 4.59286 7.42001 5.29953 6.71335L9.6462 2.36668C9.83953 2.17335 10.1595 2.17335 10.3529 2.36668C10.5462 2.56001 10.5462 2.88001 10.3529 3.07335L6.0062 7.42001C5.6862 7.74001 5.6862 8.26001 6.0062 8.58001L10.3529 12.9267C10.5462 13.12 10.5462 13.44 10.3529 13.6333C10.2529 13.7267 10.1262 13.78 9.99953 13.78Z" fill="#315F41"/>
                    </svg>
                    صفحه شعبه
                </a>
            </div>
        </div>
	)
}


export default Branch;