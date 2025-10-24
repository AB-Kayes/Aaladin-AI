export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Service Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      description: "Brief description for service cards",
      validation: (Rule) => Rule.required().max(150),
    },
    {
      name: "icon",
      title: "Service Icon",
      type: "image",
      options: {
        hotspot: true,
      },
      description: "Icon representing this service",
    },
    {
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of key features for this service",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
      description: "Technologies used in this service",
    },
    {
      name: "pricing",
      title: "Starting Price",
      type: "string",
      description: 'e.g., "Starting from $5,000"',
    },
    {
      name: "deliveryTime",
      title: "Delivery Time",
      type: "string",
      description: 'e.g., "2-4 weeks"',
    },
    {
      name: "featured",
      title: "Featured Service",
      type: "boolean",
      description: "Show this service prominently",
      initialValue: false,
    },
    {
      name: "active",
      title: "Active",
      type: "boolean",
      description: "Is this service currently offered?",
      initialValue: true,
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Order in which services should be displayed",
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "shortDescription",
      media: "icon",
    },
  },
  orderings: [
    {
      title: "Display Order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
};
