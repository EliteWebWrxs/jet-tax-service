# Sanity CMS Integration Examples

## Setup Complete!

Your Sanity CMS integration is now set up. Here are examples of how to use it:

## 1. Update Environment Variables

Replace the placeholder values in `.env` with your actual Sanity credentials:

```env
PUBLIC_SANITY_PROJECT_ID=your_actual_project_id
PUBLIC_SANITY_DATASET=your_actual_dataset
PUBLIC_SANITY_API_READ_TOKEN=your_actual_read_token
SANITY_WRITE_TOKEN=your_actual_write_token
```

## 2. Fetching Data in a SvelteKit Page

### Using `+page.js` or `+page.server.js`

```javascript
// src/routes/blog/+page.server.js
import sanityClient from '$lib/sanityClient';

export async function load() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    "author": author->name,
    mainImage
  }`;

  const posts = await sanityClient.fetch(query);

  return {
    posts
  };
}
```

### Using the data in your Svelte component

```svelte
<!-- src/routes/blog/+page.svelte -->
<script>
  import { imageUrl, formatDate } from '$lib/sanityHelpers';

  export let data;
</script>

<section>
  <h1>Blog Posts</h1>

  <div class="posts">
    {#each data.posts as post}
      <article>
        <h2>{post.title}</h2>
        <p>{formatDate(post.publishedAt)}</p>
        <p>{post.excerpt}</p>

        {#if post.mainImage}
          <img
            src={imageUrl(post.mainImage, { width: 800, quality: 90 })}
            alt={post.title}
          />
        {/if}

        <a href="/blog/{post.slug.current}">Read more</a>
      </article>
    {/each}
  </div>
</section>
```

## 3. Server-Side Operations (Write/Update)

Use the write client only in server-side code:

```javascript
// src/routes/api/posts/+server.js
import sanityWriteClient from '$lib/server/sanityClient';

export async function POST({ request }) {
  const data = await request.json();

  const newPost = await sanityWriteClient.create({
    _type: 'post',
    title: data.title,
    slug: {
      _type: 'slug',
      current: data.slug
    },
    publishedAt: new Date().toISOString(),
    body: data.body
  });

  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
```

## 4. Common GROQ Queries

### Get all posts
```javascript
const posts = await sanityClient.fetch(`*[_type == "post"]`);
```

### Get single post by slug
```javascript
const post = await sanityClient.fetch(
  `*[_type == "post" && slug.current == $slug][0]`,
  { slug: 'my-post-slug' }
);
```

### Get posts with references populated
```javascript
const posts = await sanityClient.fetch(`
  *[_type == "post"] {
    _id,
    title,
    "author": author->{
      name,
      image
    },
    "categories": categories[]->title
  }
`);
```

### Search posts
```javascript
const results = await sanityClient.fetch(
  `*[_type == "post" && title match $searchTerm]`,
  { searchTerm: '*' + searchText + '*' }
);
```

## 5. Image Helpers

```javascript
import { imageUrl } from '$lib/sanityHelpers';

// Basic usage
const url = imageUrl(image);

// With transformations
const thumbnail = imageUrl(image, {
  width: 300,
  height: 300,
  quality: 80,
  format: 'webp'
});
```

## 6. Setting Up Sanity Studio (Optional)

If you want to run Sanity Studio locally:

1. Install Sanity CLI globally:
```bash
npm install -g @sanity/cli
```

2. Initialize Sanity Studio in a separate directory:
```bash
sanity init
```

3. Or add it to this project:
```bash
mkdir studio
cd studio
sanity init
```

## Files Created

- `/src/lib/sanityClient.js` - Read-only client for browser/server
- `/src/lib/server/sanityClient.js` - Write client for server-only operations
- `/src/lib/sanityHelpers.js` - Helper functions for images, dates, etc.

## Important Notes

- Use `PUBLIC_` prefix for variables that need to be accessible in the browser
- Keep `SANITY_WRITE_TOKEN` private (no `PUBLIC_` prefix)
- The read token can be public if your dataset is public
- Use `useCdn: true` for read operations to improve performance
- Use `useCdn: false` for write operations
