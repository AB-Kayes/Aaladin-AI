import { notFound } from "next/navigation";
import BlogDetailsPage from "@/components/BlogDetailsPage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/sanity";

export async function generateMetadata({ params }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found - Aaladin AI",
    };
  }

  return {
    title: `${post.title} - Aaladin AI Blog`,
    description: post.excerpt || post.seo?.metaDescription,
    openGraph: {
      title: post.seo?.metaTitle || post.title,
      description: post.seo?.metaDescription || post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPost({ params }) {
  const [post, allPosts] = await Promise.all([
    getBlogPostBySlug(params.slug),
    getBlogPosts(),
  ]);

  if (!post) {
    notFound();
  }

  // Get related posts (same categories, excluding current post)
  const relatedPosts = allPosts
    .filter(
      (p) =>
        p._id !== post._id &&
        p.categories?.some((cat) => post.categories?.includes(cat))
    )
    .slice(0, 3);

  // If no related posts by category, get latest posts
  const finalRelatedPosts =
    relatedPosts.length > 0
      ? relatedPosts
      : allPosts.filter((p) => p._id !== post._id).slice(0, 3);

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <BlogDetailsPage post={post} relatedPosts={finalRelatedPosts} />
        <Footer />
      </div>
    </>
  );
}
