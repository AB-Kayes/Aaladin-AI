"use client";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import Section from "./Section";
import Heading from "./Heading";
import Button from "./Button";
import { grid } from "@/assets";
import { urlFor } from "@/lib/sanity";
import ButtonGradient from "@/components/svg/ButtonGradient";

// Portable Text components for rich content rendering
const portableTextComponents = {
  types: {
    image: ({ value }) => (
      <div className="my-8">
        <img
          className="w-full rounded-2xl"
          src={
            value?.asset ? urlFor(value).width(800).height(600).url() : value
          }
          alt={value.alt || "Blog image"}
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }) => <h1 className="h2 mb-6 mt-12">{children}</h1>,
    h2: ({ children }) => <h2 className="h3 mb-4 mt-10">{children}</h2>,
    h3: ({ children }) => <h3 className="h4 mb-4 mt-8">{children}</h3>,
    h4: ({ children }) => <h4 className="h5 mb-3 mt-6">{children}</h4>,
    normal: ({ children }) => (
      <p className="body-1 text-n-4 mb-6 leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-color-1 pl-6 my-8 italic text-n-3">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-n-4">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-n-4">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="body-2">{children}</li>,
    number: ({ children }) => <li className="body-2">{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-n-1">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    code: ({ children }) => (
      <code className="px-2 py-1 bg-n-6 rounded text-sm font-mono text-color-1">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-color-1 hover:text-color-2 underline transition-colors duration-300"
      >
        {children}
      </a>
    ),
  },
};

const BlogDetailsPage = ({ post, relatedPosts = [] }) => {
  if (!post) {
    return (
      <Section className="pt-[12rem] -mt-[5.25rem]">
        <div className="container text-center">
          <h1 className="h1 mb-6">Post Not Found</h1>
          <p className="body-1 mb-8 text-n-4">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </Section>
    );
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const readingTime = Math.ceil((post.content?.length || 0) / 5); // Rough estimate

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      {/* Hero Section */}
      <Section className="pt-[12rem] -mt-[5.25rem]">
        <div className="container">
          <div className="relative">
            {/* Back Button */}
            <div className="mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-n-4 hover:text-n-1 transition-colors"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back to Blog
              </Link>
            </div>

            {/* Post Header */}
            <div className="max-w-[50rem] mx-auto mb-12 lg:mb-20 text-center">
              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {post.categories.map((category, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-n-6 rounded-full text-sm text-n-1"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              )}

              <h1 className="h1 mb-6">{post.title}</h1>
              <p className="body-1 text-n-4 mb-8">{post.excerpt}</p>

              <div className="flex flex-wrap justify-center items-center gap-6 text-n-4">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{readingTime} min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured Image */}
      <Section>
        <div className="container">
          <div className="relative max-w-[62rem] mx-auto mb-12">
            <div className="relative bg-n-8 border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 max-w-full opacity-50">
                <img
                  className="w-full"
                  src={grid}
                  width={550}
                  height={550}
                  alt="Grid"
                />
              </div>
              <div className="relative z-1 p-8">
                <img
                  className="w-full rounded-2xl"
                  src={
                    post.featuredImage?.asset
                      ? urlFor(post.featuredImage).width(800).height(600).url()
                      : post.featuredImage
                  }
                  alt={post.title}
                />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Blog Content */}
      <Section>
        <div className="container">
          <div className="max-w-[50rem] mx-auto">
            <div className="relative bg-n-8 border border-n-1/10 rounded-3xl p-8 lg:p-12">
              <div className="absolute top-0 left-0 max-w-full opacity-50">
                <img
                  className="w-full"
                  src={grid}
                  width={550}
                  height={550}
                  alt="Grid"
                />
              </div>
              <div className="relative z-1 prose prose-invert max-w-none">
                <PortableText
                  value={post.content}
                  components={portableTextComponents}
                />
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-12 text-center">
                <h3 className="h6 mb-6">Tags</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-n-6 rounded-full text-sm text-n-1 hover:bg-n-5 transition-colors duration-300"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section>
          <div className="container">
            <Heading
              title="Related Posts"
              text="Continue reading with these related articles"
            />

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-[62rem] mx-auto">
              {relatedPosts.slice(0, 3).map((relatedPost) => (
                <Link
                  key={relatedPost._id}
                  href={`/blog/${relatedPost.slug.current}`}
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
                        <div className="mb-4 -mx-6 overflow-hidden rounded-lg">
                          <img
                            className="w-full h-32 object-cover rounded-lg group-hover:scale-110 transition-transform duration-300"
                            src={
                              relatedPost.featuredImage?.asset
                                ? urlFor(relatedPost.featuredImage)
                                    .width(400)
                                    .height(200)
                                    .url()
                                : relatedPost.featuredImage
                            }
                            alt={relatedPost.title}
                          />
                        </div>
                        <h4 className="h6 mb-2 group-hover:text-color-1 transition-colors duration-300">
                          {relatedPost.title}
                        </h4>
                        <p className="body-2 text-n-4 text-sm leading-relaxed group-hover:text-n-3 transition-colors duration-300">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section>
        <div className="container text-center">
          <div className="relative max-w-[50rem] mx-auto">
            <h2 className="h2 mb-6">Enjoyed this article?</h2>
            <p className="body-1 text-n-4 mb-8">
              Subscribe to our newsletter to get the latest insights and stories
              delivered to your inbox.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button>Subscribe Now</Button>
              </Link>
              <Link href="/blog">
                <Button white>Read More Posts</Button>
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <ButtonGradient />
    </div>
  );
};

export default BlogDetailsPage;
