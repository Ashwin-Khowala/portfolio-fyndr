import Link from "next/link";

export const metadata = {
	title: "Blogs | fyndr",
	description: "Read the latest blogs and musings from the fyndr club.",
};

export default function BlogList() {
	return (
		<div className="prose prose-lg dark:prose-invert max-w-none">
			<h1 className="text-3xl font-bold mb-2">Blogs</h1>
			<p className="text-[var(--muted)] mb-10">Things we have written recently.</p>

			<ul className="list-none pl-0 space-y-6">
				{/* Placeholder items until real MDX/CMS is implemented */}
				<li className="flex flex-col gap-1 border-b border-[var(--border-color)] pb-4">
					<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
						<span className="text-[var(--muted)] text-sm whitespace-nowrap min-w-[100px]">Mar 08, 2026</span>
						<Link href="/blog/what-we-are-building-at-fyndr" className="text-lg font-medium">
							What we are building at fyndr
						</Link>
					</div>
					<p className="text-sm text-[var(--muted)] sm:ml-[116px] mt-1">
						A look into the future of our professional club and the initiatives we are launching this year.
					</p>
				</li>
				<li className="flex flex-col gap-1 border-b border-[var(--border-color)] pb-4">
					<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
						<span className="text-[var(--muted)] text-sm whitespace-nowrap min-w-[100px]">Mar 04, 2026</span>
						<Link href="/blog/the-importance-of-professional-networks" className="text-lg font-medium">
							The importance of professional networks
						</Link>
					</div>
					<p className="text-sm text-[var(--muted)] sm:ml-[116px] mt-1">
						Why building a strong network is crucial for career growth and how to do it effectively.
					</p>
				</li>
			</ul>
			
			<div className="mt-12 p-6 bg-[var(--background)] border border-[var(--border-color)] rounded-lg text-center">
				<p className="text-[var(--muted)] text-sm m-0">
					More blogs coming soon. We are currently setting up our content architecture.
				</p>
			</div>
		</div>
	);
}
