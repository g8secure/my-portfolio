export const metadata = {
  title: "Blog | Sonny Bernard",
  description: "Insights on web development, cybersecurity, and modern technology trends.",
};

import { AnimatedDiv, AnimatedArticle } from "@/components/AnimatedMotion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    title: "Securing Modern Web Applications: Best Practices",
    excerpt: "Learn about the latest security practices for web applications, including authentication, authorization, and data protection.",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Security",
    slug: "securing-modern-web-applications",
  },
  {
    title: "Building Scalable React Applications with Next.js",
    excerpt: "Explore techniques for building performant and scalable React applications using Next.js framework.",
    date: "2024-01-10",
    readTime: "7 min read",
    category: "Development",
    slug: "building-scalable-react-applications",
  },
  {
    title: "Introduction to Cybersecurity for Developers",
    excerpt: "A comprehensive guide for developers to understand cybersecurity fundamentals and implement security in their code.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Education",
    slug: "introduction-to-cybersecurity-for-developers",
  },
  {
    title: "Optimizing Database Performance in Node.js Applications",
    excerpt: "Tips and techniques for improving database performance in Node.js applications using various optimization strategies.",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Performance",
    slug: "optimizing-database-performance",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Blog
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Insights on web development, cybersecurity, and technology trends.
              </p>
            </AnimatedDiv>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <AnimatedArticle
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </AnimatedArticle>
              ))}
            </div>

            <AnimatedDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Subscribe to get the latest posts delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                  Subscribe
                </button>
              </div>
            </AnimatedDiv>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}