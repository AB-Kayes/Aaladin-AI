export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
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
      description: "Brief description for project cards",
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: "client",
      title: "Client",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Completed", value: "done" },
          { title: "In Progress", value: "progress" },
          { title: "Planning", value: "planning" },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      description: "Show this project on the homepage",
      initialValue: false,
    },
    {
      name: "completionDate",
      title: "Completion Date",
      type: "string",
      description: 'e.g., "Completed 2024" or "In Progress"',
    },
    {
      name: "currentStatus",
      title: "Current Status",
      type: "text",
      description: "Detailed current status of the project",
    },
    {
      name: "problem",
      title: "Problem Statement",
      type: "text",
      description: "What problem did this project solve?",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "solution",
      title: "Solution",
      type: "text",
      description: "How did you solve the problem?",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    },
    {
      name: "features",
      title: "Key Features",
      type: "array",
      of: [{ type: "string" }],
      description: "List of key features implemented",
    },
    {
      name: "results",
      title: "Results & Impact",
      type: "array",
      of: [{ type: "string" }],
      description: "Measurable outcomes and achievements",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "screenshots",
      title: "Screenshots",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
      description: "3-5 screenshots of the project",
    },
    {
      name: "liveUrl",
      title: "Live URL",
      type: "url",
      description: "Link to the live project",
    },
    {
      name: "appStoreUrl",
      title: "App Store URL",
      type: "url",
      description: "Link to iOS App Store (if applicable)",
    },
    {
      name: "playStoreUrl",
      title: "Google Play Store URL",
      type: "url",
      description: "Link to Google Play Store (if applicable)",
    },
    {
      name: "chromeStoreUrl",
      title: "Chrome Web Store URL",
      type: "url",
      description: "Link to Chrome Web Store (if applicable)",
    },
    {
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
      description: "Link to GitHub repository (if public)",
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      description:
        "Order in which projects should be displayed (lower numbers first)",
    },
  ],
  preview: {
    select: {
      title: "title",
      client: "client",
      media: "mainImage",
      status: "status",
    },
    prepare(selection) {
      const { title, client, media, status } = selection;
      return {
        title: title,
        subtitle: `${client} - ${status === "done" ? "Completed" : status === "progress" ? "In Progress" : "Planning"}`,
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
      title: "Creation Date, New",
      name: "createdDesc",
      by: [{ field: "_createdAt", direction: "desc" }],
    },
  ],
};
