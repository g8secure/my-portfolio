import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const blogPosts = [
  {
    title: "Securing Modern Web Applications: Best Practices",
    excerpt: "Learn about the latest security practices for web applications, including authentication, authorization, and data protection.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Security",
    slug: "securing-modern-web-applications",
    content: [
      "Modern web apps need layered security from design through deployment.",
      "Authentication, encryption, and secure development practices are essential.",
      "Staying ahead of threats keeps your users and business safe.",
    ],
  },
  {
    title: "Building Scalable React Applications with Next.js",
    excerpt: "Explore techniques for building performant and scalable React applications using Next.js framework.",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Development",
    slug: "building-scalable-react-applications",
    content: [
      "Next.js is designed to deliver optimized pages with server-side rendering and static generation.",
      "Use code splitting, caching, and modern data fetching to scale gracefully.",
      "Performance and developer experience go hand-in-hand for scalable apps.",
    ],
  },
  {
    title: "Introduction to Cybersecurity for Developers",
    excerpt: "A comprehensive guide for developers to understand cybersecurity fundamentals and implement security in their code.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Education",
    slug: "introduction-to-cybersecurity-for-developers",
    content: [
      "Developers are the first line of defense against vulnerabilities.",
      "Understanding secure coding, input validation, and threat modeling is key.",
      "Security should be built into every stage of application development.",
    ],
  },
  {
    title: "Optimizing Database Performance in Node.js Applications",
    excerpt: "Tips and techniques for improving database performance in Node.js applications using various optimization strategies.",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Performance",
    slug: "optimizing-database-performance",
    content: [
      "Query efficiency and indexing are crucial for fast database responses.",
      "Caching and connection pooling reduce latency under load.",
      "Monitoring performance allows you to iterate and improve continuously.",
    ],
  },
];

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | Sonny Bernard",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | Sonny Bernard`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((entry) => entry.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
        <article className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-10 shadow-xl">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400 font-semibold mb-2">
              {post.category}
            </p>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span>{new Date(post.date).toLocaleDateString()}</span>
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-8">
            {post.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
