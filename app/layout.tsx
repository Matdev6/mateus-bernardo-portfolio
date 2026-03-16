import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
});

export const metadata: Metadata = {
	title: {
		default: "Mateus Bernardo | Desenvolvedor Frontend",
		template: "%s | Mateus Bernardo"
	},

	verification: {
		google: "SL-Budxb2FZFRppgJlkZf-VmHC1uUTw5f9NDnqhBioo"
	},

	description:
		"Portfólio de Mateus Bernardo, desenvolvedor frontend especializado em React, Next.js, TypeScript e criação de interfaces modernas e performáticas.",

	keywords: [
		"Mateus Bernardo",
		"Desenvolvedor Frontend",
		"Frontend Developer",
		"React Developer",
		"Next.js Developer",
		"Portfólio Desenvolvedor",
		"Portfólio Frontend",
		"Desenvolvedor React",
		"JavaScript Developer",
		"TypeScript Developer",
		"Tailwind CSS",
		"Framer Motion",
		"Desenvolvedor Web Brasil",
		"Frontend Engineer",
		"React Portfolio"
	],

	authors: [{ name: "Mateus Bernardo" }],
	creator: "Mateus Bernardo",
	publisher: "Mateus Bernardo",

	icons: {
		icon: "/icon.png",
		apple: "/icon.png"
	},

	openGraph: {
		title: "Mateus Bernardo | Desenvolvedor Frontend",
		description:
			"Portfólio profissional com projetos, experiências e habilidades em React, Next.js e desenvolvimento web moderno.",
		url: "https://seu-dominio.com",
		siteName: "Mateus Bernardo Portfolio",
		images: [
			{
				url: "/mateusBernardo.jpeg",
				width: 1200,
				height: 630,
				alt: "Portfólio Mateus Bernardo"
			}
		],
		locale: "pt_BR",
		type: "website"
	},

	twitter: {
		card: "summary_large_image",
		title: "Mateus Bernardo | Desenvolvedor Frontend",
		description:
			"Portfólio profissional com projetos em React, Next.js e desenvolvimento web moderno.",
		images: ["/og-image.png"]
	},

	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1
		}
	}
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="pt-BR">
			<body className={`${poppins.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}