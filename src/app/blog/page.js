import BlogPage from "@/components/BlogPage";
import Footer from "@/components/Footer";
import { getBlogPosts } from "@/lib/sanity";

export const metadata = {
  title: "Blog - Aaladin AI | Latest Insights & Stories",
  description:
    "Stay updated with the latest trends, insights, and stories from our team. Discover articles about AI, web development, and digital innovation.",
};

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <>
      <BlogPage posts={posts} />
      <Footer />
    </>
  );
}
