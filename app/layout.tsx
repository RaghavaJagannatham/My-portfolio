import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});
export const metadata: Metadata = {
	title: "Raghava | Portfolio",
	description: "Raghava Jagannatham Portfolio",
	icons: {
		icon: "/logo.png", // Path to the favicon
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={fontSans.variable}>{children}</body>
		</html>
	);
}
