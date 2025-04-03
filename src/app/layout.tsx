import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header-component";
import Footer from "@/components/footer/footer-component";

const jakartaSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "bruhensant",
	description: "read, me",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${jakartaSans.className} antialiased p-10`}>
			<Header />
				{children}
			<Footer />
			</body>
		</html>
	);
}
