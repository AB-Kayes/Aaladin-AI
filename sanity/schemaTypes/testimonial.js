export default {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "position",
      title: "Position",
      type: "string",
      description: "Job title or role",
    },
    {
      name: "company",
      title: "Company",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "testimonial",
      title: "Testimonial",
      type: "text",
      validation: (Rule) => Rule.required().min(50).max(500),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule) => Rule.required().min(1).max(5),
      options: {
        list: [
          { title: "1 Star", value: 1 },
          { title: "2 Stars", value: 2 },
          { title: "3 Stars", value: 3 },
          { title: "4 Stars", value: 4 },
          { title: "5 Stars", value: 5 },
        ],
      },
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "featured",
      title: "Featured Testimonial",
      type: "boolean",
      description: "Show this testimonial on the homepage",
      initialValue: false,
    },
    {
      name: "project",
      title: "Related Project",
      type: "reference",
      to: [{ type: "project" }],
      description: "Link this testimonial to a specific project",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which testimonials should be displayed",
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "avatar",
      rating: "rating",
    },
    prepare(selection) {
      const { title, subtitle, media, rating } = selection;
      return {
        title: title,
        subtitle: `${subtitle} - ${rating} stars`,
        media: media,
      };
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
    {
      title: "Rating, High to Low",
      name: "ratingDesc",
      by: [{ field: "rating", direction: "desc" }],
    },
  ],
};
