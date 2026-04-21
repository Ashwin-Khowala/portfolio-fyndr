import Link from "next/link";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	
	// Format slug to look like a title (replace dashes with spaces and capitalize)
	const title = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

	return (
		<div className="prose prose-lg dark:prose-invert max-w-none">
			<div className="mb-8">
				<Link href="/blog" className="text-sm font-medium hover:underline text-[var(--muted)] flex items-center gap-1">
					<span>←</span> Back to blogs
				</Link>
			</div>

			<h1 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h1>
			<p className="text-[var(--muted)] text-sm mb-10 border-b border-[var(--border-color)] pb-6">
				Published on March 08, 2026
			</p>

			<div className="space-y-6">
				<p>
					This is a placeholder for the blog post content. When we finalize the blog architecture 
					(e.g., using local Markdown files or a headless CMS), this page will render the actual content.
				</p>
				<p>
					For now, it demonstrates the minimalist layout inspired by sites like Arpit Bhayani's and Nithin Kamath's.
					The focus is entirely on the typography, readability, and the content itself.
				</p>
				<h2>Example Subheading</h2>
				<p>
					Notice the clean sans-serif font, the comfortable line height, and the subtle contrast in text colors 
					that make reading a pleasant experience.
				</p>
				<blockquote>
					"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
				</blockquote>
				<p>
					Stay tuned for actual content coming soon to the fyndr club blog!
				</p>
			</div>
		</div>
	);
}
