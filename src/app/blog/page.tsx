import Link from "next/link";
import { blogs } from "../../data/blogs";

export const metadata = {
	title: "Blogs | Ashwin Khowala",
	description: "Read the latest blogs and musings from Ashwin Khowala.",
};

export default function BlogList() {
	return (
		<div className="prose prose-lg dark:prose-invert max-w-none">
			<h1 className="text-3xl sm:text-4xl font-bold mb-2 tracking-tight text-[var(--foreground)]">Blogs</h1>
			<p className="text-[var(--muted)] mb-10">Thoughts on building systems, startups, and marketing.</p>

			<ul className="list-none pl-0 space-y-8">
				{blogs.map((post) => (
					<li key={post.slug} className="flex flex-col gap-1 border-b border-[var(--border-color)] pb-6 animate-fade-in">
						<div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
							<span className="text-[var(--muted)] text-sm whitespace-nowrap min-w-[100px]">{post.date}</span>
							<Link href={`/blog/${post.slug}`} className="text-xl font-bold hover:text-[var(--link-hover)] transition-colors no-underline">
								{post.title}
							</Link>
						</div>
						<p className="text-base text-[var(--muted)] sm:ml-[116px] mt-1 leading-relaxed">
							{post.description}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
}
