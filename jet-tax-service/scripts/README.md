# Import Scripts

## Importing Services

To import the initial services data into your Sanity Studio:

1. Create a `.env` file in the root directory (copy from `.env.example`)
2. Get a Sanity API token with write permissions from: https://www.sanity.io/manage/personal/tokens
3. Add the token to your `.env` file:
   ```
   SANITY_TOKEN=your_token_here
   ```
4. Install dependencies:
   ```bash
   pnpm install
   ```
5. Run the import script:
   ```bash
   pnpm run import:services
   ```

The script will create 15 service documents in your Sanity dataset.
