"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function MobileNav() {
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Prevent scrolling when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	if (!mounted) return (
		<div className="md:hidden">
			<button className="p-2 text-[var(--foreground)]">
				<Menu size={28} />
			</button>
		</div>
	);

	return (
		<div className="md:hidden">
			<button
				onClick={() => setIsOpen(true)}
				className="p-2 text-[var(--foreground)] hover:text-[var(--link-hover)] transition-colors"
				aria-label="Open menu"
			>
				<Menu size={28} />
			</button>

			{createPortal(
				<>
					{/* Transparent overlay to close menu when clicking outside */}
					<div
						className={`fixed inset-0 z-[99] transition-opacity duration-300 ${
							isOpen ? "opacity-100 visible" : "opacity-0 invisible"
						}`}
						onClick={() => setIsOpen(false)}
					/>
					
					<div
						className={`fixed top-0 left-0 w-full z-[100] bg-[var(--background)] shadow-2xl border-b border-[var(--border-color)] transition-all duration-300 ease-in-out transform ${
							isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
						}`}
					>
						<div className="flex flex-col max-w-6xl mx-auto px-6 py-4 md:py-6 pb-12">
							{/* Mobile Header in Overlay */}
							<div className="flex items-center justify-between mb-8">
								<Link 
									href="/" 
									className="text-2xl font-black tracking-tighter text-[var(--foreground)] no-underline"
									onClick={() => setIsOpen(false)}
								>
									ASHWIN KHOWALA
								</Link>
								<button
									onClick={() => setIsOpen(false)}
									className="p-2 text-[var(--foreground)] hover:text-[var(--link-hover)] transition-colors"
									aria-label="Close menu"
								>
									<X size={28} />
								</button>
							</div>

							{/* Menu Items */}
							<nav className="flex flex-col gap-6">
								<Link 
									href="/" 
									className="text-xl font-bold text-[var(--foreground)] hover:text-[var(--link-hover)] no-underline transition-colors"
									onClick={() => setIsOpen(false)}
								>
									Home
								</Link>
							</nav>

							{/* Theme Toggle */}
							<div className="mt-10 pt-6 border-t border-[var(--border-color)] flex items-center gap-4">
								<ThemeToggle />
								<span className="text-sm font-semibold text-[var(--muted)]">Toggle Theme</span>
							</div>
						</div>
					</div>
				</>,
				document.body
			)}
		</div>
	);
}
