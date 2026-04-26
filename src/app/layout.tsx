import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MobileNav } from "@/components/MobileNav";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: {
		default: "Ashwin Khowala",
		template: "%s | Ashwin Khowala",
	},
	description: "Founder of Clubfyndr. Building backend systems and real products from scratch.",
	keywords: ["Ashwin Khowala", "Clubfyndr", "Backend Engineer", "Systems Architect", "Product Builder", "India"],
	category: "technology",
	alternates: {
		canonical: "https://ashwinkhowala.com",
	},
	manifest: "/manifest.json",
	themeColor: "#ffffff",
	openGraph: {
		title: "Ashwin Khowala",
		description: "Building backend systems and real products from scratch.",
		url: "https://ashwinkhowala.com",
		siteName: "Ashwin Khowala",
		images: [
			{
				url: "/profile.jpg",
				width: 800,
				height: 800,
			},
		],
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Ashwin Khowala",
		description: "Building backend systems and real products from scratch.",
		creator: "@ashwinkhowala",
		images: ["/profile.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	other: {
		"geo.region": "IN-KA",
		"geo.placename": "Bangalore",
		"ICBM": "12.9716; 77.5946",
	}
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Ashwin Khowala",
		"url": "https://ashwinkhowala.com",
		"jobTitle": "Founder",
		"worksFor": {
			"@type": "Organization",
			"name": "Clubfyndr"
		},
		"sameAs": [
			"https://linkedin.com/in/ashwin-khowala/",
			"https://www.instagram.com/ashwinonfyndr"
		],
		"description": "Founder of Clubfyndr. Building backend systems and real products from scratch."
	};

	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="icon" href="/profile.jpg" type="image/jpeg"></link>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className={`${inter.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
					<div className="max-w-6xl mx-auto px-6 pb-6 md:pb-10 min-h-screen flex flex-col">
						<header className="sticky top-0 z-50 mb-12 flex items-center justify-between py-4 md:py-6 border-b border-[var(--border-color)] bg-[var(--background)]/80 backdrop-blur-md">
							<div>
								<Link href="/" className="text-2xl font-black tracking-tighter text-[var(--foreground)] hover:text-[var(--link-hover)] transition-colors no-underline">
									ASHWIN KHOWALA
								</Link>
							</div>
							
							{/* Desktop Nav */}
							<nav className="hidden md:flex items-center gap-10 text-base font-bold uppercase tracking-widest">
								<Link href="/" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors no-underline">
									Home
								</Link>
								<ThemeToggle />
							</nav>

							{/* Mobile Nav */}
							<div className="md:hidden">
								<MobileNav />
							</div>
						</header>

						<main className="flex-grow">
							{children}
						</main>

						<footer className="mt-16 pb-12 border-t border-[var(--border-color)]">
							<div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
								<div className="text-center md:text-left">
									<p className="font-bold text-lg text-[var(--foreground)] m-0">Ashwin Khowala</p>
									<p className="text-sm text-[var(--muted)] mt-1">Building backend systems and products from scratch.</p>
								</div>

								<div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
									<nav className="flex gap-6 text-sm font-semibold uppercase tracking-wider">
										<Link href="/" className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors no-underline">
											Home
										</Link>
									</nav>
									<div className="text-sm text-[var(--muted)] text-center md:text-right">
										<p className="m-0">© {new Date().getFullYear()} Ashwin Khowala </p>
									</div>
								</div>
							</div>
						</footer>
					</div>
				</ThemeProvider>
			</body>
		</html>
	);
}
