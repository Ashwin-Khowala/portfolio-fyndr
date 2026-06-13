export const metadata = {
	title: "Blogs | Ashwin Khowala",
	description: "Read the latest blogs and musings from Ashwin Khowala.",
};

export default function BlogList() {
	return (
		<div className="prose prose-lg dark:prose-invert max-w-none py-12 md:py-20 text-center">
			<h1 className="text-4xl font-bold mb-4 mt-0 tracking-tight text-[var(--foreground)]">Blogs</h1>
			<p className="text-xl text-[var(--muted)] mb-10 max-w-md mx-auto">
				I write about building real products, backend systems, and running startups.
			</p>
			
			<div className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border-color)] rounded-xl text-sm font-semibold bg-[var(--surface)] text-[var(--muted)]">
				<span className="w-2 h-2 rounded-full bg-[var(--link-hover)] animate-pulse"></span>
				<span>Coming Soon</span>
			</div>
		</div>
	);
}
