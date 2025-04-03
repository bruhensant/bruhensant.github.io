import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakartaSans = Plus_Jakarta_Sans({
	subsets: ['latin'],
})

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
      <body
        className={`${jakartaSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
