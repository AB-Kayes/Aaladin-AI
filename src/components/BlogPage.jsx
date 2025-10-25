import Link from "next/link";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import Button from "./Button";
import { grid } from "@/assets";
import { Gradient } from "./design/Roadmap";
import { urlFor } from "@/lib/sanity";

const BlogPage = ({ posts = [] }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <Section className="overflow-hidden" id="blog">
      <div className="container md:pb-10">
        <Heading
          tag="Latest Insights"
          title="Our Blog"
          text="Stay updated with the latest trends, insights, and stories from our team"
        />

        {posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="relative max-w-[30rem] mx-auto">
              <div className="relative bg-n-8 border border-n-1/10 rounded-3xl p-12">
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
                  <h3 className="h4 mb-4">Coming Soon</h3>
                  <p className="body-2 text-n-4 mb-6">
                    We're working on some amazing content for you. Check back
                    soon for our latest insights and stories.
                  </p>
                  <Button href="/contact">Get notified when we publish</Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Featured Post */}
            {posts.length > 0 && posts[0].featured && (
              <div className="mb-16">
                <Link
                  href={`/blog/${posts[0].slug.current}`}
                  className="block group cursor-pointer"
                >
                  <div className="p-0.25 rounded-[2.5rem] bg-n-6 group-hover:bg-conic-gradient transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl">
                    <div className="relative bg-n-8 rounded-[2.4375rem] overflow-hidden">
                      <div className="absolute top-0 left-0 max-w-full opacity-50">
                        <img
                          className="w-full"
                          src={grid}
                          width={550}
                          height={550}
                          alt="Grid"
                        />
                      </div>
                      <div className="relative z-1 lg:flex">
                        <div className="lg:w-1/2 p-8 lg:p-12">
                          <div className="flex items-center mb-6">
                            <Tagline>Featured Post</Tagline>
                            <span className="ml-4 text-n-4 text-sm">
                              {formatDate(posts[0].publishedAt)}
                            </span>
                          </div>
                          <h2 className="h3 mb-4 group-hover:text-color-1 transition-colors duration-300">
                            {posts[0].title}
                          </h2>
                          <p className="body-2 text-n-4 mb-6 group-hover:text-n-3 transition-colors duration-300">
                            {posts[0].excerpt}
                          </p>
                          <div className="flex items-center">
                            <span className="text-sm text-n-4">
                              By {posts[0].author}
                            </span>
                            {posts[0].categories &&
                              posts[0].categories.length > 0 && (
                                <div className="flex gap-2 ml-4">
                                  {posts[0].categories
                                    .slice(0, 2)
                                    .map((category, index) => (
                                      <span
                                        key={index}
                                        className="px-3 py-1 bg-n-6 rounded-full text-xs text-n-1"
                                      >
                                        {category}
                                      </span>
                                    ))}
                                </div>
                              )}
                          </div>
                        </div>
                        <div className="lg:w-1/2 p-8 lg:p-12">
                          <div className="relative rounded-2xl overflow-hidden">
                            <img
                              className="w-full h-64 lg:h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                              src={
                                posts[0].featuredImage?.asset
                                  ? urlFor(posts[0].featuredImage)
                                      .width(800)
                                      .height(600)
                                      .url()
                                  : posts[0].featuredImage
                              }
                              alt={posts[0].title}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Blog Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.slice(posts[0]?.featured ? 1 : 0).map((post, index) => (
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
                          <span className="text-xs text-n-4">
                            By {post.author}
                          </span>
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
            </div>

            <Gradient />
          </div>
        )}

        <div className="text-center mt-12">
          <p className="body-2 text-n-4 mb-6">
            Want to stay updated with our latest insights and stories?
          </p>
          <Button href="/contact">Subscribe to our newsletter</Button>
        </div>
      </div>
    </Section>
  );
};

export default BlogPage;
