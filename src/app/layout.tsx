import type { Metadata } from "next";

import "./globals.css";

import { EstedadRegular } from "./Fonts";

import ProductsProvider from "@/components/contexts/ProductsProvider";


export const metadata: Metadata = {
  title: "Tarkhine",
  description: "Tarkhine | Food ordering Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="fa">
			<body className={`${EstedadRegular} text-text`}>
				<ProductsProvider>
					{children}
				</ProductsProvider>
			</body>
		</html>
	);
}
