"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { getCookie, setCookie, hasCookie } from "cookies-next";

import { ScrollArea } from "ui/ScrollArea";
import { Separator } from "ui/Separator";

import type { Order } from "u/types";

import { refreshMyAccessToken } from "u/helpers";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext2,
  CarouselPrevious,
  CarouselDots
} from "ui/Carousel";

import { EstedadSemiBold, EstedadMedium } from "@/app/Fonts";

import Order from "./Order";


export default function Orders() {
	
	const router = useRouter();
	
	const [orders, setOrders] = useState<Order[]>([]);
	
	useEffect(() => {
		
		const getAllOrders = async () => {
			const token = getCookie("token");
			
			if (token) {
				const res = await fetch(`${process.env.BASE_URL}/order/list/`, {
					method: "GET",
					headers: {
						"Authorization": `Bearer ${token}`
					},
				});
				console.log(res);
				
				const data = await res.json();
				setOrders(data);
				console.log(data);
				
			} else if (hasCookie("refresh")) {
				await refreshMyAccessToken(router);
				getAllOrders();
			}
		}
		
		getAllOrders();
	}, [])
	
	
	const calcLeftTime = (time: number) => {
		
		const leftTime = new Date(time).getTime() - new Date().getTime();
		
		if (leftTime > 0) {
			return (leftTime / 1000).toFixed();
		} else {
			return 0;
		}
	}
	
	
	return (
		<div
			className={`w-full ${orders.length ? "min-h-[400px]" : "h-fit"} md:border md:border-[#cbcbcb] rounded-lg md:px-4 ltr
			max-h-[1186px] overflow-y-auto custom-scrollbar -pr-4`}
		>
			
			<h2
				className={`${EstedadSemiBold} text-lg leading-[180%] mt-4 rtl hidden md:block`}
			>
				سفارشات
			</h2>
			<Separator className="bg-[#cbcbcb] mt-2 mb-6 hidden md:block" />
			
			{
				orders.length ? (
					<div className="mb-4 rtl">
						{
							orders.map((order, index) => (
								<Order
									key={order.order_code}
									orderedItems={order.items}
									orderCode={order.order_code}
									branchName={order.branch.title}
									wasFoodReceived={null}
									orderedDate={order.delivery_time}
									orderedHour={order.time}
									price={+order.total_price}
									discount={+order.total_discount}
									secondsLeftToDeliver={calcLeftTime(order.delivery_time)}
									address={order.branch.address}
								/>
							))
						}
					</div>
				) : (
					<div className="flex justify-items -mt-0 md:my-10 rtl overflow-x-hidden">
						
						<div className="relative text-center">
							<svg className="opacity-40 w-[200px] h-[198px] sm:w-[280px] sm:h-[278px] lg:w-[325px] lg:h-[313px]" width="325" height="313" viewBox="0 0 325 313" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path fillRule="evenodd" clipRule="evenodd" d="M7.49723 214.513C6.87707 204.738 6.25691 194.729 5.65352 184.87L4.53053 166.055L4.3294 162.596C3.37402 158.585 3.39078 154.341 3.50811 150.665C2.6533 150.732 1.78173 150.799 0.926915 150.865C0.407324 150.899 0.0888648 150.615 0.0218208 150.347C-0.0619842 150.063 0.0888648 149.713 0.591695 149.596C3.86009 148.827 4.21207 148.777 7.58103 148.125C52.0982 107.186 66.9653 68.052 51.763 31.8254C40.9354 24.6903 28.2138 14.865 17.8555 9.0667C17.4868 8.84947 17.4868 8.51528 17.6712 8.28134C17.8555 8.04741 18.2578 7.93044 18.6433 8.14766C48.1259 24.4898 84.162 34.7161 125.78 38.5427C144.686 40.2805 164.782 40.7985 187.259 40.0967C202.461 39.6288 220.429 38.7432 238.363 35.7856C259.415 32.3266 276.662 26.3279 291.06 17.4717C291.261 17.338 291.563 17.3714 291.73 17.5552C291.898 17.7223 291.881 17.9396 291.68 18.0732C265.281 35.6686 228.776 39.562 196.528 41.0491C172.912 42.1353 151.608 41.9682 131.948 40.481C111.767 38.9437 93.3135 36.0362 75.8653 31.675C56.8584 26.9294 40.0136 20.1954 24.0739 11.8572C43.5166 24.5566 55.4672 33.112 74.9267 45.9451C80.9607 49.922 86.9779 53.8989 93.0118 57.8758C110.477 69.3721 159.302 74.6357 181.091 73.1986C194.768 72.2963 208.193 69.8901 221.032 66.0636C232.748 62.5713 242.805 57.6753 253.465 52.4953C272.891 35.0002 292.585 17.4884 312.33 0.160413C312.48 0.0267356 312.665 -0.0233936 312.883 0.0100258C313.101 0.060155 313.302 0.210543 313.385 0.39435C313.469 0.594866 313.419 0.778673 313.251 0.929061C306.396 6.89443 299.105 13.2943 290.339 21.0643C289.719 22.7687 288.914 24.4731 288.143 26.1106C287.372 27.7315 286.568 29.4192 285.964 31.1068C284.573 34.9668 283.501 39.044 282.763 43.2047C281.389 51.0248 281.322 59.0121 282.545 66.9325C284.825 81.754 291.881 96.2748 303.513 110.094C310.134 109.125 317.241 108.122 324.431 107.203C324.682 107.17 324.917 107.286 324.984 107.504C325.051 107.704 324.9 107.905 324.649 107.955C314.14 110.06 306.061 111.297 296.071 112.7C268.818 156.781 269.237 206.526 269.639 254.633C275.623 262.837 281.724 271.109 287.791 279.213C287.909 279.363 287.842 279.53 287.674 279.614C287.473 279.698 287.238 279.647 287.121 279.497C282.042 272.947 276.947 266.246 271.55 259.028C271.416 259.078 271.232 259.061 271.064 259.044C236.285 256.404 203.182 269.922 186.672 293.516C186.521 300.635 186.304 306.918 186.052 312.716C186.052 312.883 185.885 313 185.667 313H185.65C185.449 312.983 185.281 312.85 185.281 312.683C185.13 304.695 185.114 298.195 185.13 291.177C159.251 264.475 129.601 242.568 97.001 226.093C86.76 238.926 76.7369 251.893 66.4792 264.709C66.2445 265.01 65.8087 265.076 65.44 264.893C65.088 264.726 64.8534 264.341 65.1048 263.974C70.8035 255.752 77.1727 247.23 84.5643 237.906C83.676 218.64 78.2957 201.864 68.105 186.624C61.5179 176.766 53.171 167.776 43.2987 159.922C42.2428 171.101 35.9909 177.501 25.2304 178.42C19.1629 178.938 12.844 176.281 8.7543 171.469C7.54751 170.048 6.55861 168.494 5.7876 166.773C6.81003 182.647 7.7654 198.772 8.68726 214.362M185.08 289.957C185.097 286.766 185.13 283.424 185.164 279.781C168.989 251.759 139.658 228.683 104.678 216.485C102.432 219.242 100.135 222.082 97.6714 225.174C132.568 242.786 162.771 265.177 185.08 289.957ZM229.58 163.699C229.849 161.911 230.167 160.123 230.553 158.368C233.754 143.48 240.827 129.627 251.068 118.282C247.716 118.649 244.364 119.017 241.095 119.368C240.006 127.455 237.475 134.991 233.586 141.809C231.089 146.17 227.452 151.066 221.166 150.08C218.434 149.662 215.92 148.225 213.658 145.819C211.06 153.372 210.238 161.309 211.244 169.43C211.261 169.58 211.127 169.714 210.942 169.731C210.892 169.731 210.825 169.731 210.775 169.714C210.791 169.731 210.808 169.764 210.825 169.781C210.858 169.798 210.875 169.814 210.909 169.814C210.976 169.848 211.043 169.881 211.093 169.915C211.227 169.998 211.328 170.098 211.345 170.232C211.361 170.316 211.328 170.416 211.277 170.499C217.982 180.759 224.938 191.169 231.977 201.463C229.011 190.919 227.988 179.924 228.944 169.113C229.094 167.274 229.312 165.486 229.58 163.699ZM131.009 82.2052C130.389 82.0214 129.769 81.8543 129.149 81.6705L130.959 82.8736L130.992 82.272C130.992 82.2386 130.992 82.2219 131.009 82.2052ZM109.79 88.839C108.717 95.3056 106.471 101.856 103.119 108.155C101.04 112.049 98.61 115.742 95.8612 119.167C89.8105 126.72 82.2681 133.053 73.8037 137.565L75.1949 137.331C78.0778 136.829 80.9439 136.328 83.8101 135.827C87.7489 135.125 99.5319 133.671 102.063 132.167C112.253 126.102 119.93 118.582 124.858 109.843C128.931 102.624 130.07 95.6064 130.657 87.569C130.741 86.416 130.825 85.2464 130.892 84.06L125.796 80.7013H125.763C125.578 80.6512 125.428 80.5342 125.327 80.4005L109.471 69.9235C110.779 75.9557 110.879 82.3556 109.79 88.839ZM111.868 205.038C118.438 197.402 124.472 190.434 131.445 182.681C130.976 173.089 129.098 165.47 125.444 158.452C124.925 157.449 124.372 156.463 123.768 155.477C119.578 148.56 113.578 142.293 105.516 136.445C104.359 135.609 103.169 134.774 101.929 133.955C94.9729 135.259 89.3412 136.311 84.1956 137.23C81.8658 137.648 79.536 138.066 77.2062 138.467L74.3401 138.968C88.0506 145.669 99.4481 155.945 106.454 167.976C113.594 180.241 115.505 193.342 111.868 205.038ZM185.616 254.7C182.18 248.601 178.141 242.802 173.532 237.355C159.721 221.013 140.932 207.846 119.008 199.374C116.997 201.713 114.851 204.236 112.421 207.144C109.857 210.218 107.929 212.524 105.516 215.482C114.282 218.54 122.662 222.266 130.54 226.561C154.206 239.427 173.448 257.39 185.197 278.043C185.248 274.985 185.281 271.794 185.348 268.235C185.432 263.472 185.516 259.395 185.616 254.7ZM226.295 122.944C227.167 122.125 228.055 121.323 228.977 120.554C227.971 120.654 226.949 120.738 225.943 120.838L225.29 120.888C217.663 125.701 212.635 130.179 208.964 135.376C208.981 135.409 208.981 135.459 208.981 135.493C208.998 135.559 209.015 135.626 209.031 135.693C209.735 138.25 211.127 141.074 212.786 143.363C215.619 135.66 220.245 128.692 226.295 122.944ZM213.993 144.867C216.071 147.239 219.474 149.896 223.932 149.228C229.932 148.342 232.899 141.525 234.86 137.013C235.011 136.662 235.162 136.328 235.296 136.011C237.592 130.864 239.185 125.3 240.056 119.451C236.536 119.819 233.586 120.103 230.838 120.37C222.893 127.806 217.228 136.044 213.993 144.867ZM204.925 122.793C201.154 126.787 198.774 130.496 197.483 134.457C196.729 136.729 196.31 139.052 196.193 141.341C196.126 142.928 196.193 145.385 196.427 147.039C197.265 148.827 198.355 150.414 201.036 154.608C201.171 149.462 202.562 144.182 205.009 139.269C205.83 137.631 206.769 136.044 207.808 134.507C206.97 130.346 207.422 126.102 209.132 122.192C207.892 122.275 206.668 122.375 205.428 122.459C205.311 122.492 205.126 122.576 204.925 122.793ZM186.488 194.795V194.327C186.354 194.244 186.253 194.127 186.237 194.01C186.22 193.926 186.22 193.843 186.253 193.759C186.287 193.676 186.337 193.609 186.421 193.542C186.454 193.525 186.471 193.509 186.505 193.492L186.622 184.118C181.61 172.488 170.414 164.267 154.24 160.357C151.592 163.097 149.463 165.336 147.552 167.408C147.15 167.859 146.731 168.294 146.329 168.745L145.625 169.514C163.659 172.337 179.197 181.962 186.488 194.795ZM148.206 170.934C151.759 172.672 155.145 174.577 158.329 176.649C160.458 178.036 162.503 179.473 164.447 180.993C166.392 182.497 168.252 184.068 169.995 185.672C177.856 192.941 183.605 201.178 186.304 209.467L186.471 196.199C186.454 196.182 186.438 196.166 186.421 196.132C178.459 183.299 164.581 174.176 148.206 170.934ZM188.08 159.22C188.03 163.097 187.98 166.706 187.946 170.516C191.332 167.943 196.444 166.79 201.573 167.191C204.02 167.375 206.467 167.909 208.747 168.812C207.138 166.322 205.528 163.832 203.919 161.326C199.377 158.736 194.617 158.101 188.08 159.22ZM203.048 159.956L202.679 159.371C202.461 159.02 202.227 158.669 202.009 158.318C202.009 158.736 202.025 159.103 202.025 159.471C202.361 159.621 202.713 159.788 203.048 159.956ZM195.07 103.226C184.56 106.234 172.157 106.117 161.883 102.741C177.37 111.314 194.751 106.1 195.237 106.334L196.26 105.382L196.343 105.298C197.718 103.995 199.092 102.708 200.45 101.405L200.567 101.288C199.779 101.622 198.975 101.939 198.137 102.24L195.07 103.226ZM149.815 123.261C151.994 122.827 153.636 122.492 155.614 122.091C158.346 121.54 161.045 120.988 163.76 120.437C166.676 119.852 166.727 120.019 166.425 118.716C166.174 117.697 165.956 116.644 165.738 115.625C164.816 111.263 163.877 106.735 160.106 103.243C159.503 102.909 158.899 102.574 158.313 102.24C161.346 109.943 157.709 118.85 149.815 123.261ZM186.84 165.67C179.867 158.585 171.856 154.107 162.386 151.985L159.972 154.458C158.346 156.129 156.704 157.8 155.078 159.471C168.604 161.627 181.376 170.8 186.639 182.029C186.706 176.03 186.773 171.502 186.84 165.67ZM186.857 164.317C186.924 158.953 186.957 156.129 187.024 149.88C183.236 145.284 178.258 142.745 171.789 142.126C169.358 144.75 166.643 147.607 163.257 151.066C173.079 153.372 181.61 158.168 186.857 164.317ZM171.051 140.489C171.939 139.653 173.448 138.266 174.47 137.331C175.04 135.944 174.655 133.337 171.386 128.324C170.8 127.606 170.18 126.87 169.66 126.152C168.537 124.581 167.749 123.06 167.079 120.955C166.475 120.972 165.017 121.323 164.531 121.423C164.078 121.523 163.626 121.607 163.173 121.707C169.895 126.252 172.979 133.671 171.051 140.489ZM172.71 141.157C178.493 141.692 184.108 144.566 187.058 148.493L187.125 142.577C183.488 139.921 179.884 138.601 175.56 138.333C175.459 138.333 175.375 138.316 175.292 138.316C174.42 139.252 173.565 140.205 172.71 141.157ZM169.794 141.692C170.381 139.887 170.632 138.083 170.565 136.311C170.381 130.964 167.364 125.851 161.9 121.974C160.274 122.325 158.665 122.659 157.039 122.994L155.413 123.328C162.168 129.778 165.755 137.748 165.57 145.869C166.928 144.482 168.353 143.079 169.794 141.692ZM194.198 107.571C193.176 107.403 189.823 108.222 187.929 108.59C186.706 108.824 185.65 109.024 185.114 109.058C181.627 109.225 178.124 109.008 174.688 108.389C171.487 107.821 168.42 106.919 165.537 105.716C165.319 105.616 165.067 105.515 164.799 105.415C164.229 105.181 163.609 104.947 163.039 104.663C165.453 107.871 166.174 111.547 166.878 115.107C167.196 116.711 167.514 118.348 168.001 119.919C168.889 122.843 170.481 124.982 172.191 127.255C172.794 128.057 173.414 128.892 174.035 129.795C175.459 131.867 175.677 133.37 175.962 135.476C175.996 135.676 176.063 135.927 175.996 136.111C175.694 137.013 175.828 137.147 176.18 137.28L176.281 137.364C176.515 137.531 178.392 137.798 179.398 137.949C180.27 138.083 180.789 138.149 180.974 138.216C183.337 138.951 185.415 140.021 187.142 141.441C187.628 140.923 190.192 139.436 191.013 138.701C190.997 138.701 191.03 138.701 191.013 138.701C192.254 136.027 197.701 124.681 197.332 122.442C197.232 121.791 196.511 120.872 195.824 120.003C195.254 119.267 194.701 118.582 194.449 117.997C193.913 116.761 193.544 115.491 193.36 114.204C193.243 113.536 193.98 107.788 194.198 107.571ZM188.097 158.067C191.969 156.981 196.829 157.382 201.238 159.137C201.154 158.385 201.087 157.616 201.053 156.848C197.55 151.333 194.449 146.421 190.997 140.873L188.181 142.494C188.047 142.594 188.114 156.48 188.097 158.067ZM153.737 158.351C152.765 147.122 147.586 136.846 137.915 126.937C125.847 129.377 114.583 131.582 103.504 133.671C119.612 143.346 130.624 159.538 132.266 175.044C132.501 177.25 132.551 179.456 132.383 181.628C139.423 173.808 146.614 166.088 153.737 158.351ZM154.508 157.533C157.475 154.324 160.961 150.581 164.615 146.855C164.917 138.2 161.346 130.162 154.307 123.578C149.178 124.648 144.116 125.701 139.272 126.687L139.255 126.703C148.34 134.64 154.005 146.12 154.508 157.533ZM146.848 123.863C156.402 117.997 159.637 110.612 156.737 101.271C154.24 99.7337 151.742 98.0293 149.496 96.4753C153.821 105.766 150.619 117.246 141.552 124.915C143.328 124.564 145.088 124.213 146.848 123.863ZM150.368 95.5396C151.441 96.2247 152.53 96.893 153.62 97.5948C153.737 97.645 153.838 97.6951 153.955 97.7452C158.262 99.7504 162.872 101.672 168.051 102.892C168.906 103.092 169.794 103.259 170.682 103.427C170.9 103.46 171.085 103.51 171.302 103.56C173.532 103.945 175.845 104.178 178.309 104.245C186.488 104.463 194.215 102.909 202.646 99.3327C203.35 98.6643 204.07 97.9959 204.774 97.3275C205.679 96.4753 206.568 95.6231 207.473 94.7709C197.986 97.4946 187.209 98.7311 176.23 98.3468C168.135 98.0627 156.704 96.9599 146.949 93.3506C148.055 94.0858 149.228 94.821 150.368 95.5396ZM196.394 106.401L195.405 107.303C193.494 112.383 194.533 117.63 198.321 122.108C198.372 122.091 198.439 122.075 198.506 122.058L203.634 121.607C199.377 117.413 196.813 112.049 196.394 106.401ZM199.025 122.893C197.232 127.205 194.667 131.633 191.986 140.288C192.974 141.876 193.963 143.463 194.969 145.05C194.215 136.545 197.45 128.424 203.936 122.559C202.31 122.676 200.668 122.793 199.025 122.893ZM208.562 133.437C212.317 128.307 217.261 124.063 222.91 121.105C218.719 121.473 214.395 121.824 210.071 122.141C208.495 125.918 207.976 129.728 208.562 133.437ZM209.166 138.834C208.83 138.066 208.529 137.23 208.277 136.378C208.11 136.629 207.925 136.879 207.758 137.147C204.204 142.862 202.277 149.261 202.009 156.162C204.64 160.256 207.422 164.567 210.523 169.33C208.948 161.192 209.618 152.57 212.434 144.382C210.842 142.327 209.769 140.221 209.166 138.834ZM209.685 170.265C207.523 169.229 205.277 168.578 202.981 168.294C202.612 168.244 202.227 168.227 201.858 168.193C201.774 168.193 201.69 168.177 201.606 168.177C201.288 168.16 200.969 168.16 200.668 168.16C200.517 168.16 200.366 168.143 200.215 168.16C199.83 168.16 199.444 168.193 199.059 168.21C198.975 168.21 198.908 168.21 198.824 168.227C197.936 168.294 197.047 168.427 196.159 168.611C196.126 168.611 196.092 168.628 196.042 168.628C195.12 168.828 194.198 169.079 193.293 169.397C192.572 169.647 191.868 169.948 191.164 170.265C190.075 170.767 188.985 171.335 187.929 172.02L187.779 184.753L187.829 184.886C187.862 184.987 187.846 185.07 187.779 185.137L187.678 192.673C193.662 188.713 202.059 186.992 210.154 187.593C214.848 187.944 219.44 189.081 223.429 191.036C218.937 184.402 214.328 177.417 209.685 170.265ZM182.884 204.721C179.398 198.321 175.543 192.723 170.129 187.443C164.883 182.313 158.748 177.835 151.843 174.059C149.547 172.805 147.15 171.619 144.686 170.516C140.395 175.195 136.188 179.84 132.182 184.335C145.306 188.663 156.787 196.801 164.146 202.9C173.884 210.97 181.443 219.893 186.086 228.783L186.304 211.371C185.164 209.065 184.041 206.843 182.884 204.721ZM185.818 230.136C179.113 219.242 172.124 210.937 163.827 204.002C154.156 195.932 143.027 190.451 131.529 185.104C127.506 189.632 123.55 194.127 119.779 198.488C149.279 209.951 173.23 229.869 185.65 253.296C185.683 250.756 186.488 230.805 185.818 230.136ZM125.595 110.745C124.942 111.848 124.271 112.934 123.55 113.987C118.489 121.406 111.583 127.656 103.353 132.234C115.555 129.962 127.808 127.589 139.926 125.216C149.094 117.563 151.927 107.286 148.105 95.4894C146.815 94.5871 145.423 93.6346 144.049 92.7323L132.233 84.9289C133.205 92.465 130.791 101.839 125.595 110.745ZM132.031 83.5587L142.775 90.6436C144.099 90.9945 145.407 91.3454 146.714 91.713C156.218 94.2863 165.185 96.7259 175.392 97.2105C186.052 97.7285 196.829 96.5756 208.344 93.6848C209.434 92.8994 217.244 85.6474 218.351 84.6281C217.546 85.0291 216.725 85.4135 215.92 85.7644C190.544 96.9599 159.587 90.3428 131.797 82.4391C131.881 82.8234 131.964 83.2078 132.031 83.5587ZM209.35 94.4367C208.931 102.508 212.467 109.893 219.876 116.443C220.932 117.379 222.072 118.298 223.278 119.201C223.396 119.284 223.412 119.434 223.312 119.535C223.211 119.635 223.027 119.668 222.876 119.585C213.725 114.672 207.875 105.047 208.193 95.5061L204.54 98.8815C204.573 98.9149 204.607 98.9483 204.623 98.9985C204.69 99.1489 204.64 99.2992 204.489 99.3828C204.121 99.6 203.735 99.8005 203.35 100.001C201.506 101.705 199.662 103.41 197.818 105.098C198.036 110.929 200.215 116.159 204.64 121.54C219.658 120.22 235.531 118.766 250.398 117.162C232.899 111.865 222.491 96.4586 221.099 83.6589C217.228 87.1847 212.954 91.1282 209.35 94.4367ZM231.558 103.66C237.056 109.743 244.246 113.603 251.202 116.861C251.286 116.895 251.336 116.961 251.353 117.028C254.923 116.644 258.376 116.26 261.728 115.859C263.773 115.625 265.952 115.357 268.365 115.057C249.023 106.501 235.715 88.204 235.732 70.2243C231.173 74.4017 226.614 78.5625 222.055 82.7566C222.708 90.2927 225.994 97.5113 231.558 103.66ZM224.318 192.423C211.696 187.176 199.025 187.777 187.644 194.144L187.242 226.694C191.181 219.008 199.226 213.243 209.015 211.154C209.853 210.97 210.708 210.837 211.579 210.72C211.847 210.686 212.099 210.653 212.367 210.619C212.987 210.553 213.624 210.486 214.261 210.436C214.546 210.419 214.814 210.402 215.099 210.386C215.803 210.352 216.524 210.335 217.228 210.335C217.395 210.335 217.58 210.335 217.747 210.335C218.636 210.352 219.541 210.386 220.429 210.452C220.479 210.452 220.53 210.452 220.563 210.452C220.697 210.469 220.831 210.486 220.965 210.503C221.72 210.569 222.474 210.653 223.228 210.753C223.496 210.787 223.748 210.82 223.999 210.87C224.77 210.987 225.524 211.121 226.279 211.271C226.429 211.305 226.58 211.321 226.731 211.355C227.636 211.555 228.508 211.772 229.379 212.023C229.58 212.09 229.782 212.14 229.999 212.207C230.67 212.407 231.34 212.625 231.994 212.859C232.229 212.942 232.48 213.026 232.715 213.126C233.452 213.41 234.173 213.694 234.877 214.012C234.961 214.045 235.061 214.078 235.145 214.129C235.933 214.479 236.687 214.864 237.425 215.265C237.626 215.382 237.81 215.482 238.011 215.599C238.564 215.916 239.084 216.234 239.604 216.585C239.805 216.719 239.989 216.836 240.19 216.969C240.844 217.437 241.498 217.905 242.084 218.406C236.033 209.7 230.201 201.195 224.318 192.423ZM210.02 212.107C208.009 212.508 206.065 213.076 204.221 213.778C196.209 216.869 189.924 222.751 187.192 229.986C187.091 239.277 187.058 248.952 187.008 258.092C193.377 250.038 204.506 243.454 216.943 240.413C223.58 238.792 232.028 237.99 240.324 238.625C247.498 239.176 254.554 240.781 260.253 243.855C254.638 236.135 249.023 228.282 243.492 220.411C234.475 213.276 221.971 209.734 210.02 212.107ZM95.6601 224.154L95.6768 224.171C104.359 213.711 101.057 217.654 109.371 207.963C113.142 192.356 111.65 179.439 104.678 167.291C98.124 155.895 86.7097 145.97 72.5467 139.319C61.937 141.191 53.0201 142.728 44.539 144.148C61.4509 152.453 75.1781 164.334 84.2794 178.52C93.4812 192.874 97.2859 208.614 95.2913 224.054C95.4087 224.054 95.5428 224.088 95.6601 224.154ZM85.3186 236.87C88.1009 233.378 91.034 229.769 94.0343 226.126C94.1684 225.107 94.2689 224.088 94.3695 223.052C97.0345 191.387 77.1392 160.791 42.9467 144.382L42.0416 144.532C42.8294 148.108 43.6675 153.405 43.3322 158.752C70.6862 180.258 86.341 209.4 85.3186 236.87ZM41.2539 144.7C38.0358 145.251 34.7339 145.853 31.5493 146.437C29.8061 146.755 28.063 147.072 26.3198 147.39C31.9348 150.565 37.3486 154.157 42.4104 158.067C42.5948 153.656 41.9746 149.044 41.2539 144.7ZM4.66462 150.565C4.94955 154.725 5.21773 158.886 5.48591 163.03C5.98874 165.269 6.84355 167.258 8.10062 169.062C11.9054 174.593 20.0345 179.305 28.8843 176.598C37.2312 174.025 41.6394 168.344 42.3266 159.22C36.9295 155.009 31.0464 151.116 24.8449 147.657C18.8779 148.71 11.8216 149.896 4.66462 150.565ZM82.1507 51.8937L73.787 46.3795C66.8982 41.8345 59.9927 37.2894 53.1039 32.7444C61.6185 52.0107 60.9145 72.7809 50.992 94.5203C49.9864 96.7259 48.8969 98.9149 47.7069 101.137C39.4269 116.594 26.7389 132.217 9.91081 147.707C15.8945 146.638 20.5876 146.003 26.5712 145.184C31.5995 144.499 33.5103 143.196 38.3207 140.238C39.3934 139.586 40.4661 138.901 41.5053 138.216C55.0985 129.327 65.8758 118.398 73.016 106.184C82.3351 90.2927 85.3186 72.5303 82.1507 51.8937ZM85.4526 54.066L83.2737 52.629C87.4807 69.8901 84.7487 87.9199 75.3458 104.813C66.3283 121.022 51.5451 134.975 33.6444 144.198C39.2761 143.396 69.7979 139.135 72.3623 137.431C86.6762 127.956 96.1126 118.148 102.046 106.601C107.678 95.6398 109.622 83.6924 108.164 69.0379C100.588 64.0584 93.0286 59.0455 85.4526 54.066ZM219.926 67.4338C206.836 71.3104 193.276 73.6999 179.633 74.5187C152.145 76.1897 123.517 71.6112 98.7441 61.6355L108.046 67.7513L108.013 67.4839C107.996 67.2834 108.147 67.1163 108.398 67.0996C108.633 67.0829 108.834 67.1999 108.885 67.3837C108.952 67.651 109.019 67.9017 109.086 68.169L109.153 68.5032L125.863 79.4982C125.997 79.4648 126.148 79.4815 126.299 79.5316C159.017 89.1564 193.243 97.2941 220.781 82.389C225.86 77.6769 230.905 73.0315 235.782 68.5701V68.3862C235.782 68.2359 235.883 68.1356 236.05 68.0855C236.134 68.052 236.235 68.052 236.335 68.0688C241.129 63.6741 245.906 59.3463 250.532 55.1521C242.47 59.6972 232.447 63.7242 219.926 67.4338ZM254.303 53.3308C248.621 58.4774 242.704 63.8579 236.721 69.322C237.207 87.7695 249.275 104.379 269.824 114.889C272.17 114.589 286.4 112.951 287.087 112.283C276.36 105.181 267.678 95.9239 261.963 85.5304C256.348 75.3208 253.716 64.1921 254.303 53.3308ZM302.374 110.278C291.093 98.3635 283.601 82.8067 281.221 66.4646C280.048 58.3604 280.148 50.2896 281.523 42.4695C282.612 36.3203 284.171 29.3356 287.456 23.5707C283.048 27.4808 278.64 31.4076 274.332 35.2843C274.098 36.0863 273.88 36.8884 273.662 37.7072C273.059 40.1468 272.589 42.6366 272.288 45.143C271.852 49.6881 271.801 54.2498 272.153 58.7113V58.728C272.355 60.8669 272.69 63.0057 273.092 65.1278C273.126 65.2782 273.142 65.4286 273.176 65.579C273.243 65.9132 273.327 66.2474 273.394 66.5649C276.243 79.7656 282.931 92.8159 292.853 104.446C293.624 105.348 294.429 106.251 295.233 107.136C296.356 108.373 297.513 109.592 298.72 110.796L302.374 110.278ZM297.848 110.946C295.904 109.175 294.06 107.337 292.317 105.448C290.574 103.56 288.948 101.605 287.406 99.6167C286.635 98.6141 285.897 97.6116 285.193 96.5756C277.366 85.2965 272.757 72.4801 271.684 58.7447V58.728C271.416 56.0378 271.349 53.3475 271.433 50.6739C271.449 49.9387 271.466 49.2035 271.516 48.4682C271.584 47.332 271.684 46.2124 271.818 45.0929C271.818 45.0929 271.818 45.0929 271.818 45.0762C272.103 42.1185 272.539 39.1943 273.126 36.337C271.55 37.7406 270.008 39.1275 268.5 40.4977C263.957 44.5749 259.633 48.4682 255.426 52.2781C254.387 67.5173 259.767 82.7566 270.293 95.6732C273.511 99.6167 283.869 110.227 288.78 112.015C288.981 111.882 296.205 111.18 297.848 110.946ZM271.047 181.277C274.835 154.642 282.629 132.268 294.898 112.884C292.216 113.252 289.568 113.603 287.02 113.937C265.751 134.189 252.979 159.237 249.593 186.006C247.833 200.026 248.638 214.53 252.158 229.067C252.208 229.251 252.074 229.401 251.856 229.435C251.638 229.468 251.437 229.368 251.37 229.184C239.536 190.033 252.459 146.02 285.076 114.204C277.215 115.207 269.79 116.076 261.979 117.012C259.784 117.279 257.488 117.546 254.923 117.83C254.068 117.931 253.18 118.031 252.258 118.131C231.055 144.583 224.535 175.178 233.922 204.286C244.85 220.211 256.415 236.57 268.315 252.928C267.829 229.769 267.645 205.189 271.047 181.277ZM268.416 256.621L268.382 254.884C265.851 251.491 263.337 248.049 260.806 244.59L260.756 244.574C259.03 244.139 257.303 243.688 255.644 243.237C249.878 241.7 244.431 240.246 238.263 239.862C230.536 239.41 222.675 240.229 215.501 242.234C182.298 251.558 187.125 268.769 186.672 290.993C190.745 285.446 195.857 280.449 201.724 276.122C203.182 275.035 204.707 273.999 206.249 272.997C207.808 271.994 209.4 271.042 211.043 270.14C227.418 261.049 247.666 256.421 267.578 257.925C268.684 258.008 269.773 258.109 270.88 258.225L270.544 257.774C270.226 257.357 269.924 256.939 269.606 256.521V256.671C269.606 256.922 269.371 257.106 269.053 257.106C268.751 257.123 268.416 256.922 268.416 256.621Z" fill="#CBCBCB"/>
							</svg>
							
							<div
								className={`flex flex-col items-center absolute top-1/2 left-1/2 transform
								-translate-x-1/2 -translate-y-1/2 w-96`}
							>
								<h3 className="text-[10px] leading-[180%] sm:text-xl text-[#717171] mb-4 lg:mb-6">
									شما در حال حاضر هیچ سفارشی ثبت نکرده‌اید!
								</h3>
								
								<Link
									href="/menu"
									className={`${EstedadMedium} w-[152px] sm:w-[288px] h-8 leading-8 border-primary
									text-primary border border-primary rounded bg-white text-xs sm:text-base`}
								>
									منوی رستوران
								</Link>
							</div>
						</div>
						
					</div>
				)
			}
			
		</div>
	)
}