# Sanity CMS Setup Guide

## 1. Create a Sanity Project

1. Go to [sanity.io](https://sanity.io/) and create an account
2. Create a new project
3. Choose a project name (e.g., "Aaladin AI")
4. Select "Clean project with no predefined schemas"
5. Note down your Project ID

## 2. Configure Environment Variables

1. Copy `.env.example` to `.env.local`
2. Update the following variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
   NEXT_PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your-api-token
   ```

## 3. Create API Token

1. Go to your Sanity project dashboard
2. Navigate to "API" section
3. Click "Add API token"
4. Give it a name (e.g., "Next.js Frontend")
5. Set permissions to "Editor"
6. Copy the token and add it to your `.env.local`

## 4. Deploy Sanity Studio

1. Run the development server:

   ```bash
   bun dev
   ```

2. Visit `http://localhost:3000/admin` to access the Sanity Studio

3. You should see the admin interface with the following content types:
   - **Projects**: Manage your portfolio projects
   - **Testimonials**: Client testimonials and reviews
   - **Services**: Services you offer
   - **Blog Posts**: Blog content (if you plan to add a blog)

## 5. Content Structure

### Projects

- Title, description, client information
- Project status (completed, in progress, planning)
- Technologies used, features, results
- Screenshots and main image
- Live URLs (website, app stores, etc.)
- Featured flag for homepage display

### Testimonials

- Client name, position, company
- Testimonial text and rating
- Avatar image
- Link to related project
- Featured flag for homepage display

### Services

- Service title and description
- Features and technologies
- Pricing and delivery time
- Service icon
- Active/inactive status

### Blog Posts

- Title, content, excerpt
- Featured image
- Categories and tags
- SEO metadata
- Published status

## 6. Using Sanity Data in Your App

The project includes helper functions in `lib/sanity.js`:

```javascript
import { getProjects, getFeaturedProjects } from "@/lib/sanity";

// Get all projects
const projects = await getProjects();

// Get featured projects for homepage
const featuredProjects = await getFeaturedProjects();
```

## 7. Image Handling

Sanity images are handled with the `urlFor` helper:

```javascript
import { urlFor } from "@/lib/sanity";

// Generate image URL
const imageUrl = urlFor(project.mainImage).width(800).height(600).url();
```

## 8. Next Steps

1. Add your first project in the admin panel
2. Update your components to fetch data from Sanity
3. Replace static data with dynamic Sanity content
4. Configure CORS settings in Sanity for your domain

## 9. Production Deployment

1. Add your production domain to Sanity CORS settings
2. Update environment variables in your hosting platform
3. The admin panel will be available at `yourdomain.com/admin`

## Troubleshooting

- **Admin panel not loading**: Check your project ID and API token
- **Images not displaying**: Verify CORS settings in Sanity
- **Data not fetching**: Ensure API token has correct permissions

For more help, visit the [Sanity documentation](https://www.sanity.io/docs).
