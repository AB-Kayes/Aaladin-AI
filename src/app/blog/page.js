import BlogPage from "@/components/BlogPage";
import Header from "@/components/Header";
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
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <BlogPage posts={posts} />
        <Footer />
      </div>
    </>
  );
}
