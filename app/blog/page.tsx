import Link from "next/link";
import { formatDate, getBlogPosts } from "app/lib/posts";

export const metadata = {
  title: "Blog",
  description: "Bilal Ahmad's Blog",
};

export default function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <section className="p-6">
      <h1 className="mb-6 text-2xl font-semibold tracking-tight">
        My Latest Blogs
      </h1>
      <div>
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <div
              key={post.slug}
              className="flex flex-col space-y-3 mb-6 transition-opacity duration-200 hover:opacity-80"
            >
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-3">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-lg font-semibold text-gray-900 dark:text-white hover:underline"
                >
                  {post.metadata.title}
                </Link>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
              </div>

              {/* Excerpt */}
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {post.metadata.summary}
              </p>

              {/* Read More Button */}
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm text-blue-500 dark:text-blue-400 hover:underline mt-3"
              >
                Read More
              </Link>

              {/* Line Separator */}
              <div className="border-t border-gray-300 dark:border-gray-700 my-3" />
            </div>
          ))}
      </div>
    </section>
  );
}
