# Hyödyntämätön

Doesn't do much yet - WIP after the initial POC attempt.

## Goals

Minimalist beer app powered by Untappd API.  
Main goal is to **translate all content that user doesn't understand**.  
Users specify languages they understand and their primary language.
Then if a beer/pub review is written in language they don't understand, it will be automatically translated to their primary language.

## Constraints

Each user in prod can make max 100 requests / hour to Untappd API.

**[You will need to apply for access to Untappd API to get the app up and running locally](https://untappd.com/api/register?register=new)**.

## Local Development

### Config

Create `.env.local` in the root of the project.  
Add `UNTAPPD_CLIENT_SECRET=<secret-you-got-from-untappd>`.

Update the `NEXT_PUBLIC_UNTAPPD_CLIENT_ID` in `.env` with the Id from Untappd.

Test the config (won't work on Windows out of the box, rename file to .sh, etc.):

```sh
cd scripts/curl
# Calls the API endpoint described here: https://untappd.com/api/docs#theppublocal
./untappd-local
# ~~> Shouldn't error out
```

### Run

Terminal 1: `npm run dev`  
Terminal 2: `npm run test:watch`

## Global Dependecies

- Node.js (14.x)
- npm (6.x)
- curl, bash, awk (only for `/scripts/curl`)

## Thanks

Powered by Untappd API.

Thanks to all OSS creators.

Developed with Next.js / React.

Bootstrapped with:
`npx create-next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app`
