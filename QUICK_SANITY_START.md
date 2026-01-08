# Quick Start: Access Your Sanity Content NOW

Since the hosted Studio isn't deployed yet and you need Node v22.13.0 for a local studio, here's the fastest way to get started:

## Step 1: Access Sanity Management Console

1. Go to: **https://www.sanity.io/manage**
2. Log in with your Sanity account
3. Click on your project: **`0rl1rny5`**

## Step 2: Use Vision to Browse Content

1. In the left sidebar, click **"Vision"**
2. This opens Sanity's data browser
3. You can:
   - View all documents in your dataset
   - Test GROQ queries
   - Inspect your content structure

### Example Queries in Vision:

View all documents:
```groq
*[]
```

View documents of a specific type (e.g., posts):
```groq
*[_type == "post"]
```

## Step 3: Create Content via API (Option A)

You can create content directly using the Sanity client in your SvelteKit app:

### Create a test route to add content:

**File:** `src/routes/admin/create-post/+server.js`

```javascript
import sanityWriteClient from '$lib/server/sanityClient';

export async function POST({ request }) {
  const data = await request.json();

  try {
    const newDocument = await sanityWriteClient.create({
      _type: 'post', // Change to your document type
      title: data.title,
      slug: {
        _type: 'slug',
        current: data.slug
      },
      publishedAt: new Date().toISOString(),
      content: data.content
    });

    return new Response(JSON.stringify(newDocument), {
      status: 201,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
```

Then you can POST to this endpoint to create content.

## Step 4: Get API Tokens

To actually use the Sanity client, you need your API tokens:

1. In Sanity Management Console, click **"API"** in the left sidebar
2. Click **"Tokens"**
3. Click **"+ Add API token"**

### Create Read Token:
- Name: `Frontend Read Token`
- Permissions: **Viewer**
- Copy token → Add to `.env` as `PUBLIC_SANITY_API_READ_TOKEN`

### Create Write Token:
- Name: `Backend Write Token`
- Permissions: **Editor**
- Copy token → Add to `.env` as `SANITY_WRITE_TOKEN`

### Update `.env`:
```env
PUBLIC_SANITY_PROJECT_ID=0rl1rny5
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_READ_TOKEN=sk_your_read_token_here
SANITY_WRITE_TOKEN=sk_your_write_token_here
```

## Alternative: Deploy a Separate Studio

If you want a proper Studio interface, you can create a separate project:

### 1. Create a new directory outside this project:
```bash
cd ~/Desktop
mkdir jet-tax-sanity-studio
cd jet-tax-sanity-studio
```

### 2. Update Node (if needed):
```bash
nvm install 22.13.0
nvm use 22.13.0
```

### 3. Initialize Sanity Studio:
```bash
npm create sanity@latest
```

When prompted:
- **Login/Create account**: Use your Sanity credentials
- **Project to use**: Select existing → `0rl1rny5`
- **Dataset**: `production`
- **Project output path**: Hit enter (current directory)
- **Template**: Choose what fits your needs (Blog, E-commerce, etc.)

### 4. Start the Studio:
```bash
npm run dev
```

Access at: `http://localhost:3333`

### 5. Deploy the Studio:
```bash
npm run deploy
```

Your studio will be available at: `https://jettaxservicecorp.sanity.studio`

## What You Can Do Right Now

✅ **Without updating Node or deploying Studio:**
1. Use Vision to browse any existing content
2. Create content via API calls from your SvelteKit app
3. Fetch content in your SvelteKit app (read-only)

✅ **With Node update:**
1. Set up local Sanity Studio in this project
2. Create and manage content with a UI

✅ **With separate Studio project:**
1. Full Studio interface
2. Deploy to hosted URL
3. Share with team members

## Recommended Next Steps

1. ✅ Get your API tokens from the management console
2. ✅ Update `.env` with real tokens
3. ✅ Test fetching data using the examples in `/src/lib/sanityExamples.md`
4. 🔄 Either update Node.js OR create a separate Studio project
5. 🔄 Define your content schemas
6. 🔄 Start adding content

---

**Need Help?**
- Sanity Docs: https://www.sanity.io/docs
- Community: https://www.sanity.io/exchange/community
