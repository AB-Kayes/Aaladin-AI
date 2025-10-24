import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

// GROQ queries
export const queries = {
  // Projects
  allProjects: `*[_type == "project"] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    shortDescription,
    client,
    status,
    featured,
    completionDate,
    currentStatus,
    problem,
    solution,
    technologies,
    features,
    results,
    mainImage,
    screenshots,
    liveUrl,
    appStoreUrl,
    playStoreUrl,
    chromeStoreUrl,
    githubUrl,
    order
  }`,

  featuredProjects: `*[_type == "project" && featured == true] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    shortDescription,
    client,
    status,
    completionDate,
    mainImage,
    liveUrl
  }`,

  projectsByCategory: `*[_type == "project" && category == $category] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    shortDescription,
    client,
    status,
    featured,
    completionDate,
    currentStatus,
    problem,
    solution,
    technologies,
    features,
    results,
    mainImage,
    screenshots,
    liveUrl,
    appStoreUrl,
    playStoreUrl,
    chromeStoreUrl,
    githubUrl,
    order,
    category
  }`,

  projectBySlug: `*[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    description,
    shortDescription,
    client,
    status,
    featured,
    completionDate,
    currentStatus,
    problem,
    solution,
    technologies,
    features,
    results,
    mainImage,
    screenshots,
    liveUrl,
    appStoreUrl,
    playStoreUrl,
    chromeStoreUrl,
    githubUrl
  }`,

  // Testimonials
  allTestimonials: `*[_type == "testimonial"] | order(order asc, _createdAt desc) {
    _id,
    name,
    position,
    company,
    testimonial,
    rating,
    avatar,
    featured,
    project->{title, slug}
  }`,

  featuredTestimonials: `*[_type == "testimonial" && featured == true] | order(order asc, _createdAt desc) {
    _id,
    name,
    position,
    company,
    testimonial,
    rating,
    avatar
  }`,

  // Services
  allServices: `*[_type == "service" && active == true] | order(order asc, _createdAt desc) {
    _id,
    title,
    slug,
    description,
    shortDescription,
    icon,
    features,
    technologies,
    pricing,
    deliveryTime,
    featured
  }`,

  featuredServices: `*[_type == "service" && featured == true && active == true] | order(order asc, _createdAt desc) {
    _id,
    title,
    shortDescription,
    icon,
    features
  }`,

  // Blog Posts
  allBlogPosts: `*[_type == "blogPost" && published == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author,
    publishedAt,
    categories,
    tags,
    featured
  }`,

  featuredBlogPosts: `*[_type == "blogPost" && featured == true && published == true] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    featuredImage,
    author,
    publishedAt
  }`,

  blogPostBySlug: `*[_type == "blogPost" && slug.current == $slug && published == true][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    author,
    publishedAt,
    categories,
    tags,
    seo
  }`,
};

// Helper functions
export async function getProjects() {
  return await client.fetch(queries.allProjects);
}

export async function getFeaturedProjects() {
  return await client.fetch(queries.featuredProjects);
}

export async function getProjectsByCategory(category) {
  return await client.fetch(queries.projectsByCategory, { category });
}

export async function getProjectBySlug(slug) {
  return await client.fetch(queries.projectBySlug, { slug });
}

export async function getTestimonials() {
  return await client.fetch(queries.allTestimonials);
}

export async function getFeaturedTestimonials() {
  return await client.fetch(queries.featuredTestimonials);
}

export async function getServices() {
  return await client.fetch(queries.allServices);
}

export async function getFeaturedServices() {
  return await client.fetch(queries.featuredServices);
}

export async function getBlogPosts() {
  return await client.fetch(queries.allBlogPosts);
}

export async function getFeaturedBlogPosts() {
  return await client.fetch(queries.featuredBlogPosts);
}

export async function getBlogPostBySlug(slug) {
  return await client.fetch(queries.blogPostBySlug, { slug });
}
