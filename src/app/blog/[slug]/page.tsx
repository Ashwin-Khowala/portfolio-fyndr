import Link from "next/link";
import { notFound } from "next/navigation";
import { blogs } from "../../../data/blogs";

export async function generateStaticParams() {
	return blogs.map((post) => ({
		slug: post.slug,
	}));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = blogs.find((b) => b.slug === slug);
	if (!post) return {};
	return {
		title: post.title,
		description: post.description,
		alternates: {
			canonical: `https://ashwin.clubfyndr.com/blog/${slug}`,
		},
		openGraph: {
			title: post.title,
			description: post.description,
			url: `https://ashwin.clubfyndr.com/blog/${slug}`,
		}
	};
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const post = blogs.find((b) => b.slug === slug);

	if (!post) {
		notFound();
	}

	return (
		<div className="prose prose-lg dark:prose-invert max-w-none">
			<div className="mb-8">
				<Link href="/blog" className="text-sm font-medium hover:underline text-[var(--muted)] flex items-center gap-1">
					<span>←</span> Back to blogs
				</Link>
			</div>

			<h1 className="text-3xl sm:text-4xl font-bold mb-4 mt-0 tracking-tight text-[var(--foreground)] leading-tight">{post.title}</h1>
			<p className="text-[var(--muted)] text-sm mb-10 border-b border-[var(--border-color)] pb-6 flex items-center gap-4">
				<span>Published on {post.date}</span>
				<span className="text-[var(--border-color)]">|</span>
				<span>{post.readTime}</span>
			</p>

			<div className="space-y-6 text-lg text-[var(--foreground)] leading-relaxed">
				{post.sections.map((section, idx) => {
					switch (section.type) {
						case 'p':
							return <p key={idx}>{section.content as string}</p>;
						case 'h2':
							return <h2 key={idx} className="text-2xl font-bold mt-10 mb-4 text-[var(--foreground)]">{section.content as string}</h2>;
						case 'h3':
							return <h3 key={idx} className="text-xl font-bold mt-8 mb-3 text-[var(--foreground)]">{section.content as string}</h3>;
						case 'blockquote':
							return (
								<blockquote key={idx} className="border-l-4 border-[var(--link-hover)] pl-4 italic my-6 text-[var(--muted)]">
									{section.content as string}
								</blockquote>
							);
						case 'ul':
							return (
								<ul key={idx} className="list-disc pl-6 space-y-2 my-4">
									{(section.content as string[]).map((item, itemIdx) => (
										<li key={itemIdx}>{item}</li>
									))}
								</ul>
							);
						default:
							return null;
					}
				})}
			</div>
		</div>
	);
}
