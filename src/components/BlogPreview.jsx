import Link from "next/link";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { grid } from "@/assets";
import { Gradient } from "./design/Roadmap";
import { urlFor } from "@/lib/sanity";

const BlogPreview = ({ posts = [] }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (posts.length === 0) {
    return null; // Don't show section if no posts
  }

  return (
    <Section className="overflow-hidden" id="blog-preview">
      <div className="container md:pb-10">
        <Heading
          tag="Latest Insights"
          title="From Our Blog"
          text="Stay updated with our latest thoughts, insights, and industry trends"
        />

        <div className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:pb-[7rem]">
          {posts.slice(0, 3).map((post, index) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="block group cursor-pointer"
            >
              <div className="p-0.25 rounded-[2.5rem] bg-n-6 group-hover:bg-conic-gradient transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
                <div className="relative p-6 bg-n-8 rounded-[2.4375rem] overflow-hidden h-full group-hover:bg-n-7 transition-all duration-300">
                  <div className="absolute top-0 left-0 max-w-full opacity-50">
                    <img
                      className="w-full"
                      src={grid}
                      width={550}
                      height={550}
                      alt="Grid"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="mb-6 -mx-6 overflow-hidden rounded-lg">
                      <img
                        className="w-full h-48 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                        src={
                          post.featuredImage?.asset
                            ? urlFor(post.featuredImage)
                                .width(600)
                                .height(400)
                                .url()
                            : post.featuredImage
                        }
                        alt={post.title}
                      />
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-n-4">
                        {formatDate(post.publishedAt)}
                      </span>
                      {post.categories && post.categories.length > 0 && (
                        <span className="px-2 py-1 bg-n-6 rounded text-xs text-n-1">
                          {post.categories[0]}
                        </span>
                      )}
                    </div>

                    <h3 className="h6 mb-3 group-hover:text-color-1 transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="body-2 text-n-4 text-sm leading-relaxed mb-4 group-hover:text-n-3 transition-colors duration-300">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-n-4">By {post.author}</span>
                      <div className="flex items-center text-color-1 text-sm group-hover:text-color-2 transition-colors duration-300">
                        Read more
                        <svg
                          className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <Gradient />
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button>View All Posts</Button>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default BlogPreview;
