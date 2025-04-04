import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header-component";
import Footer from "@/components/footer/footer-component";
import { LanguageProvider } from "@/contexts/language-context";
import { NavigationProvider } from "@/contexts/navigation-context";

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
			<body className={`${jakartaSans.className} antialiased gap-80 bg-light dark:bg-darker text-darker dark:text-light flex flex-col h-screen p-30 transition-all`}>
				<LanguageProvider>
					<NavigationProvider>
						<Header />
						<main className="">
							{children}
						</main>
						<Footer />
					</NavigationProvider>
				</LanguageProvider>
			</body>
		</html>
	);
}
