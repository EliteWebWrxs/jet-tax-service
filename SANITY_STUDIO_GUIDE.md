# How to Access Sanity Studio

## ⚠️ Important: Studio Not Deployed Yet

Your Sanity project exists, but the Studio hasn't been deployed to a hosted URL yet. Here's how to access and manage your content:

---

## Option 1: Sanity Management Console (EASIEST - START HERE)

Access your project through the Sanity management dashboard and use Vision to query and view your content:

### URL:
```
https://www.sanity.io/manage
```

### Steps:
1. Go to https://www.sanity.io/manage
2. Log in with your Sanity account
3. Click on your project (ID: `0rl1rny5`)
4. In the left sidebar, click on **"Vision"**
   - This is Sanity's data browser where you can view and query your content
   - You can test GROQ queries here
   - View all your documents

### To Create Schemas and Content:
You'll need to either:
- Use the Management Console to create schemas via the API
- Set up a local Sanity Studio (see Option 2 below)
- Deploy a hosted Studio

**For now, you can use Vision to explore your data and the Sanity client in your SvelteKit app to fetch content.**

---

## Option 2: Local Sanity Studio (Requires Node.js Update)

**Note:** Local Sanity Studio requires Node.js v22.13.0 or higher. You currently have v22.12.0.

### Update Node.js First:

Using nvm (recommended):
```bash
nvm install 22.13.0
nvm use 22.13.0
```

Or download from: https://nodejs.org/

### Then Install Sanity Studio:

If you want to run Sanity Studio locally within this project:

### Installation Steps:

1. **Install Sanity CLI globally:**
   ```bash
   npm install -g @sanity/cli
   ```

2. **Create a studio folder in your project:**
   ```bash
   mkdir studio
   cd studio
   ```

3. **Initialize Sanity Studio:**
   ```bash
   sanity init
   ```

   When prompted:
   - Select "Use existing project"
   - Choose project: `0rl1rny5`
   - Choose dataset: `production`
   - Select project path: current directory
   - Select project template: Choose based on your needs (or "Clean project")

4. **Start the local studio:**
   ```bash
   cd studio
   sanity dev
   ```

5. **Access at:**
   ```
   http://localhost:3333
   ```

### Deploying Your Local Studio:

Once you've customized your local studio, deploy it:

```bash
cd studio
sanity deploy
```

This will make your customized studio available at `https://jettaxservicecorp.sanity.studio`

---

## Getting Your API Tokens

You need to add your API tokens to the `.env` file. Here's how to get them:

1. Go to https://www.sanity.io/manage
2. Select your project (`0rl1rny5`)
3. Click on "API" in the left sidebar
4. Click "Tokens"
5. Click "+ Add API Token"
6. For the **Read Token**:
   - Name: "Frontend Read Token"
   - Permissions: "Viewer"
   - Copy the token and add to `.env` as `PUBLIC_SANITY_API_READ_TOKEN`

7. For the **Write Token**:
   - Name: "Backend Write Token"
   - Permissions: "Editor" or "Administrator"
   - Copy the token and add to `.env` as `SANITY_WRITE_TOKEN`

### Update your `.env` file:

```env
PUBLIC_SANITY_PROJECT_ID=0rl1rny5
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_READ_TOKEN=your_actual_read_token
SANITY_WRITE_TOKEN=your_actual_write_token
```

---

## Quick Start Checklist

- [ ] Get your API tokens from https://www.sanity.io/manage
- [ ] Update the `.env` file with your actual tokens
- [ ] Access Sanity Studio at https://0rl1rny5.sanity.studio or https://www.sanity.io/manage
- [ ] Create your content schemas (if not already done)
- [ ] Start adding content to your project
- [ ] Fetch content in your SvelteKit app using the examples in `/src/lib/sanityExamples.md`

---

## Need Help?

- **Sanity Documentation:** https://www.sanity.io/docs
- **Sanity Community:** https://www.sanity.io/exchange/community
- **GROQ Cheat Sheet:** https://www.sanity.io/docs/query-cheat-sheet
