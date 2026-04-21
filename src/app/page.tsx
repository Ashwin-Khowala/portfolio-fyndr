import Image from "next/image";
import Link from "next/link";

// Custom SVG Icons
const YoutubeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 7.1C2.5 7.1 2.3 5.4 3 4.6 3.8 3.8 4.9 3.8 5.4 3.7 8.5 3.5 12 3.5 12 3.5s3.5 0 6.6.2c.5.1 1.6.1 2.4.9.7.8.9 2.5.9 2.5s.2 2 .2 4.1v1.5c0 2.1-.2 4.1-.2 4.1s-.2 1.7-.9 2.5c-.8.8-1.9.8-2.4.9-3.1.2-6.6.2-6.6.2s-3.5 0-6.6-.2c-.5-.1-1.6-.1-2.4-.9-.7-.8-.9-2.5-.9-2.5s-.2-2-.2-4.1v-1.5c0-2.1.2-4.1.2-4.1z" /><path d="M9.7 15.3l6.5-3.3-6.5-3.3v6.6z" /></svg>;
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>;
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>;
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>;
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3.4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" /><path d="M9 18c-4.5 1.5-5-2.5-7-3" /></svg>;
const GlobeIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>;
const MailIcon = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;

export default function Home() {
	return (
		<div className="prose prose-lg dark:prose-invert max-w-none">
			{/* HERO SECTION */}
			<div className="flex flex-col-reverse md:flex-row gap-8 md:gap-20 items-center md:items-start text-center md:text-left mb-16 py-8">
				<div className="flex-1">
					<h1 className="text-4xl md:text-6xl font-bold mb-6 mt-0 tracking-tight text-[var(--foreground)]">Hey, I am Ashwin</h1>

					<p className="text-xl md:text-3xl italic font-semibold text-[var(--link-hover)] mb-10 leading-snug">
						backend systems, real products, and scalable architecture. always building.
					</p>

					<p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
						I didn’t start with a grand plan to become a founder. I started by building. At first, it was curiosity - how systems work, how products come together, how something you write on a screen turns into something people can actually use. That curiosity turned into projects. Then more projects. Then better ones.
					</p>

					<p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
						Over time, I realized I wasn't just interested in writing code. I was interested in building <strong>complete systems</strong> - products that solve real problems, handle real users, and make sense from both an engineering and business perspective.
					</p>

					<p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed mb-12">
						Right now, I am focused on building products end-to-end, understanding system design deeply, and learning how to turn projects into real startups.
					</p>

					<div className="flex flex-wrap justify-center md:justify-start gap-4 mt-12">
						<a href="https://linkedin.com/in/ashwin-khowala/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-[var(--border-color)] rounded-xl text-sm font-semibold hover:bg-[var(--surface)] hover:text-[var(--link-hover)] transition-all no-underline text-[var(--foreground)] hover:scale-105 shadow-sm">
							<LinkedinIcon className="w-5 h-5" />
							<span>LinkedIn</span>
						</a>
						<a href="https://www.instagram.com/ashwinonfyndr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-[var(--border-color)] rounded-xl text-sm font-semibold hover:bg-[var(--surface)] hover:text-[var(--link-hover)] transition-all no-underline text-[var(--foreground)] hover:scale-105 shadow-sm">
							<InstagramIcon className="w-5 h-5" />
							<span>Instagram</span>
						</a>
						<a href="https://www.clubfyndr.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 border border-[var(--border-color)] rounded-xl text-sm font-semibold hover:bg-[var(--surface)] hover:text-[var(--link-hover)] transition-all no-underline text-[var(--foreground)] hover:scale-105 shadow-sm">
							<GlobeIcon className="w-5 h-5" />
							<span>Club Fyndr</span>
						</a>
						<a href="mailto:ashwin@clubfyndr.com" className="flex items-center gap-2 px-5 py-2.5 border border-[var(--border-color)] rounded-xl text-sm font-semibold hover:bg-[var(--surface)] hover:text-[var(--link-hover)] transition-all no-underline text-[var(--foreground)] hover:scale-105 shadow-sm">
							<MailIcon className="w-5 h-5" />
							<span>Email</span>
						</a>

						{/* Hidden socials for codebase preservation */}
						<div className="hidden">
							<YoutubeIcon />
							<TwitterIcon />
							<GithubIcon />
						</div>
					</div>
				</div>

				<div className="w-64 sm:w-72 md:w-80 lg:w-96 shrink-0 md:sticky md:top-24">
					<div className="relative aspect-[3/4] w-full mx-auto shadow-2xl rounded-2xl overflow-hidden border-4 border-[var(--surface)]">
						<Image
							src="/profile.jpg"
							alt="Ashwin Khowala"
							fill
							className="object-cover m-0"
							priority
						/>
					</div>
				</div>
			</div>



			<hr className="border-[var(--border-color)] my-16" />

			<section className="mb-12">
				<div className="grid md:grid-cols-3 gap-12">
					<div className="md:col-span-1">
						<h2 className="text-xl font-bold uppercase tracking-widest text-[var(--muted)] mt-0">Current Focus</h2>
					</div>
					<div className="md:col-span-2 space-y-12">
						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-[var(--foreground)] m-0">Clubfyndr</h3>
							<p className="text-lg text-[var(--muted)] leading-relaxed m-0">
								Clubfyndr is an AI-powered personal assistant that unifies your entire communication and scheduling stack into a single interface. Instead of jumping between emails, messaging apps, calls, and calendars, it brings everything into one intelligent inbox that can organize, prioritize, and handle interactions on your behalf, reducing noise and helping you focus on what actually matters.
							</p>
							<a href="https://www.clubfyndr.com" target="_blank" className="inline-flex items-center gap-2 text-[var(--link-color)] font-semibold hover:underline">
								Explore Clubfyndr ➔
							</a>
						</div>

						<div className="space-y-4">
							<h3 className="text-2xl font-bold text-[var(--foreground)] m-0">Systems Architecture</h3>
							<p className="text-lg text-[var(--muted)] leading-relaxed m-0">
								Architecting end-to-end systems with a focus on high availability and developer experience. I'm currently exploring the intersection of distributed databases and real-time product engineering.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
