# Hyödyntämätön

A beer web app with minimalistic UI.  
It **will** translate user reviews written in a language that you don't understand.

Powered by Foursquare and Untappd APIs.

Work in progress.

Available at: [hyodyntamaton.site](https://hyodyntamaton.site)

## Roadmap

### ~~Nearby Venues~~

- ~~display nearby venues on a map~~
- ~~when user clicks on a map marker display venue details and last checkins from that place~~
- ~~user can find more reviews of that beer~~

### Beer Search

- user can search for beer by name
- user can find recent beer reviews

### Translate Reviews

- app notifies users that they don't have languages configured - only once
- user enters languages that he speaks and a primary language
- all the reviews which are in different languages are translated to the primary language
- settings are under Acctoung page

## Local Development

```sh
git clone git@github.com:watofundefined/hyodyntamaton.git
cd hyodyntamaton
npm i
```

### Google Maps Token

Part of the app uses a map from Google so to get it running you'll need to [get a free API token](https://developers.google.com/maps/documentation/embed/get-api-key).  
(You want the `Maps JavaScript API`)

Once you have the key, create or edit `.env.local` file and add:  
`NEXT_PUBLIC_GOOGLE_MAPS_KEY=<YOUR-KEY-HERE>`.

### Up and running (mocked APIs)

```sh
npm run dev:mocked
```

### Tests

```shsh
npm run test:watch
```

## Constraints

Each Untappd user can make max 100 requests / hour to Untappd API.

## Conventions

Interfaces starting with `Ut<Name>` describe Untappd domain models.  
`Fs<Name>` describe Foursquare domain models.

## Global Dependecies (tested with)

- Node.js (14.x)
- npm (6.x)
- curl, bash, awk (only for `/scripts/curl`)

## Thanks

Powered by Foursquare and Untappd API.

Thanks to all OSS creators.

Developed with Next.js / React.

Bootstrapped with:
`npx create-next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app`
