import { rest } from 'msw'
import { url } from './local'
import { UtLocalResponse } from './local.types'

export default rest.get(new RegExp('^' + url), (_, res, ctx) => {
  return res(ctx.status(200), ctx.json(getMockedData()))
})

function getMockedData(): UtLocalResponse {
  return {
    meta: {
      code: 200,
      response_time: {
        time: 0.393,
        measure: 'seconds',
      },
      init_time: {
        time: 0,
        measure: 'seconds',
      },
    },
    notifications: {
      type: 'notifications',
      unread_count: {
        comments: 0,
        toasts: 0,
        friends: 0,
        messages: 0,
        venues: 0,
        veunes: 0,
        others: 0,
        news: 0,
      },
    },
    response: {
      limit: 25,
      offset: 0,
      type: 'mg_norm',
      pagination: {
        next_url:
          'https://api.untappd.com/v4/thepub/local?max_id=917770575&lat=60.192059&lng=24.945831',
        max_id: 917770575,
        since_url:
          'https://api.untappd.com/v4/thepub/local?min_id=917890413&lat=60.192059&lng=24.945831',
      },
      radius: 5,
      dist_pref: 'm',
      checkins: {
        count: 25,
        items: [
          {
            checkin_id: 917890413,
            created_at: 'Wed, 15 Jul 2020 09:46:43 +0000',
            rating_score: 4,
            checkin_comment: '',
            user: {
              uid: 1234,
              user_name: 'test1234',
              first_name: 'Name',
              last_name: 'Surname',
              relationship: 'none',
              location: '',
              is_supporter: 1,
              url: '',
              bio: '',
              user_avatar: 'https://picsum.photos/100/100',
              is_private: 0,
            },
            beer: {
              bid: 3156510,
              beer_name: 'IPA',
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-3156510_0a36e_sm.jpeg',
              beer_label_hd:
                'https://untappd.akamaized.net/site/beer_logos_hd/beer-3156510_8e968_hd.jpeg',
              beer_style: 'IPA - New England',
              beer_abv: 6,
              has_had: false,
              beer_active: 1,
            },
            brewery: {
              brewery_id: 189896,
              brewery_name: 'Cloudwater Brew Co.',
              brewery_slug: 'cloudwater-brew-co',
              brewery_page_url: '/CloudwaterBrewCo',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-189896_5bcbc.jpeg',
              country_name: 'England',
              contact: {
                twitter: 'cloudwaterbrew',
                facebook: 'https://www.facebook.com/cloudwaterbrew/',
                instagram: 'cloudwaterbrew',
                url: 'http://cloudwaterbrew.co',
              },
              location: {
                brewery_city: 'Manchester',
                brewery_state: 'Greater Manchester',
                lat: 53.4779,
                lng: -2.22181,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: 5214359,
              venue_name: 'Pien Shop & Bar',
              venue_slug: 'pien-shop-and-bar',
              primary_category_key: 'Shop & Service',
              primary_category: 'Shop & Service',
              parent_category_id: '4d4b7105d754a06378d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_store',
                    category_name: 'Beer Store',
                    category_id: '5370f356bcbc57f1066c94c2',
                    is_primary: true,
                  },
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Ateneuminkuja',
                venue_city: 'HKI',
                venue_state: 'Uusimaa',
                venue_country: 'Suomi',
                lat: 60.1698,
                lng: 24.9454,
              },
              contact: {
                twitter: '@pienhki',
                venue_url: 'https://www.pien.fi/',
              },
              foursquare: {
                foursquare_id: '57ab4c95498ef8003be05e61',
                foursquare_url: 'http://4sq.com/2aVWjFK',
              },
              venue_icon: {
                sm:
                  'https://untappd.akamaized.net/venuelogos/venue_5214359_944860ed_bg_64.png',
                md:
                  'https://untappd.akamaized.net/venuelogos/venue_5214359_944860ed_bg_88.png',
                lg:
                  'https://untappd.akamaized.net/venuelogos/venue_5214359_944860ed_bg_176.png?v=1',
              },
              is_verified: true,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 0,
              count: 0,
              auth_toast: false,
              items: [],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 304816302,
                  photo: {
                    photo_img_sm: 'https://picsum.photos/200/200',
                    photo_img_md: 'https://picsum.photos/640/640',
                    photo_img_lg: 'https://picsum.photos/1280/1280',
                    photo_img_og: 'https://picsum.photos/1280/1280',
                  },
                },
              ],
            },
            source: {
              app_name: 'Untappd for iPhone - (V2)',
              app_website: 'http://untpd.it/iphoneapp',
            },
            badges: {
              retro_status: false,
              count: 1,
              items: [
                {
                  badge_id: 93427,
                  user_badge_id: 699498498,
                  badge_name: 'God Save the Queen (Level 92)',
                  badge_description:
                    "Had enough tea and biscuits? Head to the pub for a pint! That's at least 460 different beers from the UK. Try 5 more for Level 93!",
                  created_at: 'Wed, 15 Jul 2020 09:46:44 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_godSaveTheQueen_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_godSaveTheQueen_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_godSaveTheQueen_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 917890275,
            created_at: 'Wed, 15 Jul 2020 09:42:28 +0000',
            rating_score: 3.75,
            checkin_comment: 'Good time!',
            user: {
              uid: 1235,
              user_name: 'user1235',
              first_name: 'Name',
              last_name: 'S.',
              relationship: 'none',
              location: '',
              is_supporter: 0,
              url: '',
              bio: '',
              user_avatar: 'https://picsum.photos/100/100',
              is_private: 0,
            },
            beer: {
              bid: 4509,
              beer_name: 'IPA',
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-4509_1ce65_sm.jpeg',
              beer_label_hd:
                'https://untappd.akamaized.net/site/beer_logos_hd/beer-4509_3d0a8_hd.jpeg',
              beer_style: 'IPA - American',
              beer_abv: 6.2,
              has_had: false,
              beer_active: 1,
            },
            brewery: {
              brewery_id: 765,
              brewery_name: 'Lagunitas Brewing Company',
              brewery_slug: 'lagunitas-brewing-company',
              brewery_page_url: '/LagunitasBrewingCo',
              brewery_type: 'Macro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-765_b53eb.jpeg',
              country_name: 'United States',
              contact: {
                twitter: 'lagunitasbeer',
                facebook: 'https://www.facebook.com/LagunitasBrewingCo',
                instagram: 'lagunitasbeer',
                url: 'http://www.LAGUNITAS.com/',
              },
              location: {
                brewery_city: 'Petaluma',
                brewery_state: 'CA',
                lat: 38.2724,
                lng: -122.662,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: 8848572,
              venue_name: 'Britannia Gastro Pub',
              venue_slug: 'britannia-gastro-pub',
              primary_category_key: 'Food',
              primary_category: 'Food',
              parent_category_id: '4d4b7105d754a06374d81259',
              categories: {
                count: 1,
                items: [
                  {
                    category_key: 'gastropub',
                    category_name: 'Gastropub',
                    category_id: '4bf58dd8d48988d155941735',
                    is_primary: true,
                  },
                ],
              },
              location: {
                venue_address: '',
                venue_city: 'Helsinki',
                venue_state: 'Uusimaa',
                venue_country: 'Suomi',
                lat: 60.2413,
                lng: 24.8845,
              },
              contact: {
                twitter: '',
                venue_url: '',
              },
              foursquare: {
                foursquare_id: '5cb1e58c6adbf5002c15de03',
                foursquare_url: 'https://4sq.com/2VJ150W',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/food/gastropub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/food/gastropub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/food/gastropub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 0,
              count: 0,
              auth_toast: false,
              items: [],
            },
            media: {
              count: 0,
              items: [],
            },
            source: {
              app_name: 'Untappd for Android - (V2)',
              app_website: 'http://untpd.it/androidapp',
            },
            badges: {
              retro_status: false,
              count: 1,
              items: [
                {
                  badge_id: 12067,
                  user_badge_id: 699498364,
                  badge_name: 'Beer Foodie (Level 10)',
                  badge_description:
                    "Wine isn't the only beverage worthy of pairing with a delicious meal. With so many styles widely available, there’s a perfect pint for any cuisine of your choosing. That's a beer at 50 different venues categorized as a Restaurant. Try 5 more for Level 11!",
                  created_at: 'Wed, 15 Jul 2020 09:42:28 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_BeerFoodie_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_BeerFoodie_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_BeerFoodie_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 917889993,
            created_at: 'Wed, 15 Jul 2020 09:34:59 +0000',
            rating_score: 3.25,
            checkin_comment: 'Hmm',
            user: {
              uid: 1236,
              user_name: 'user1236',
              first_name: 'Test',
              last_name: 'Su',
              relationship: 'none',
              location: 'Helsinki',
              is_supporter: 0,
              url: '',
              bio: '',
              user_avatar: 'https://picsum.photos/100/100',
              is_private: 0,
            },
            beer: {
              bid: 3724537,
              beer_name: 'Alexander Unfiltered',
              beer_label:
                'https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png',
              beer_label_hd: '',
              beer_style: 'Lager - Amber',
              beer_abv: 5,
              has_had: false,
              beer_active: 1,
            },
            brewery: {
              brewery_id: 11970,
              brewery_name: 'A. Le Coq',
              brewery_slug: 'a-le-coq',
              brewery_page_url: '/w/a-le-coq/11970',
              brewery_type: 'Macro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-11970_da804.jpeg',
              country_name: 'Estonia',
              contact: {
                twitter: '',
                facebook: 'https://www.facebook.com/elusonmaitset/',
                instagram: 'elusonmaitset',
                url: 'http://www.alecoq.ee',
              },
              location: {
                brewery_city: 'Tartu',
                brewery_state: 'Tartu',
                lat: 58.3857,
                lng: 26.7069,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: 613363,
              venue_name: 'Jollas',
              venue_slug: 'jollas',
              primary_category_key: 'Outdoors & Recreation',
              primary_category: 'Outdoors & Recreation',
              parent_category_id: '4d4b7105d754a06377d81259',
              categories: {
                count: 1,
                items: [
                  {
                    category_key: 'neighborhood',
                    category_name: 'Neighborhood',
                    category_id: '4f2a25ac4b909258e854f55f',
                    is_primary: true,
                  },
                ],
              },
              location: {
                venue_address: '',
                venue_city: 'Helsinki',
                venue_state: 'Uusimaa',
                venue_country: 'Suomi',
                lat: 60.1642,
                lng: 25.07,
              },
              contact: {
                twitter: '',
                venue_url: 'http://fi.wikipedia.org/wiki/jollas',
              },
              foursquare: {
                foursquare_id: '4c718ee60e23b1f76b921bdc',
                foursquare_url: 'http://4sq.com/d8HLYo',
              },
              venue_icon: {
                sm:
                  'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_64.png',
                md:
                  'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_88.png',
                lg:
                  'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 0,
              count: 0,
              auth_toast: false,
              items: [],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 304816061,
                  photo: {
                    photo_img_sm: 'https://picsum.photos/200/200',
                    photo_img_md: 'https://picsum.photos/640/640',
                    photo_img_lg: 'https://picsum.photos/1280/1280',
                    photo_img_og: 'https://picsum.photos/1280/1280',
                  },
                },
              ],
            },
            source: {
              app_name: 'Untappd for iPhone - (V2)',
              app_website: 'http://untpd.it/iphoneapp',
            },
            badges: {
              retro_status: false,
              count: 3,
              items: [
                {
                  badge_id: 133365,
                  user_badge_id: 699498034,
                  badge_name: 'For the Can (Level 12)',
                  badge_description:
                    "Canning is all the rage and it's not hard to see why - travels well, more environmentally friendly, and no need to carry your bottle opener. That's 60 checkins with the serving style of Can. Try 5 more for Level 13!",
                  created_at: 'Wed, 15 Jul 2020 09:34:59 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_GloryCan_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_GloryCan_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_GloryCan_lg.jpg',
                  },
                },
                {
                  badge_id: 2125,
                  user_badge_id: 699498035,
                  badge_name: 'Lager Jack  (Level 19)',
                  badge_description:
                    "After a long day, what better way to kick back than with a crisp and refreshing lager? You're already feeling more relaxed, aren't you?. That's 95 different Lagers! Try 5 more to unlock Level 20.",
                  created_at: 'Wed, 15 Jul 2020 09:34:59 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_LagerJack_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_LagerJack_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_LagerJack_lg.jpg',
                  },
                },
                {
                  badge_id: 3576,
                  user_badge_id: 699498036,
                  badge_name: 'Paint the Town Red (Level 4)',
                  badge_description:
                    'Get out there and raise a ruckus with your favorite Amber or Red Ale! That is 20 different beers with the style of American Amber / Red Ale, American Amber / Red Lager, Irish Red Ale, Imperial / Double Red Ale, Red Ale - Other or IPA - Red. Try 5 more for Level 5!',
                  created_at: 'Wed, 15 Jul 2020 09:34:59 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_PaintRed_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_PaintRed_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_PaintRed_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 917889886,
            created_at: 'Wed, 15 Jul 2020 09:31:57 +0000',
            rating_score: 0,
            checkin_comment: '',
            user: {
              uid: 1237,
              user_name: 'user1237',
              first_name: 'Joe',
              last_name: 'S.',
              relationship: 'none',
              location: '',
              is_supporter: 0,
              url: '',
              bio: 'Earthling',
              user_avatar: 'https://picsum.photos/100/100',
              is_private: 0,
            },
            beer: {
              bid: 3364825,
              beer_name: 'Double Headed DDH West Coast IPA',
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-3364825_0783d_sm.jpeg',
              beer_label_hd:
                'https://untappd.akamaized.net/site/beer_logos_hd/beer-3364825_01f13_hd.jpeg',
              beer_style: 'IPA - American',
              beer_abv: 6.5,
              has_had: false,
              beer_active: 1,
            },
            brewery: {
              brewery_id: 56652,
              brewery_name: 'Stigbergets Bryggeri',
              brewery_slug: 'stigbergets-bryggeri',
              brewery_page_url: '/stigbergetsbryggeri',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-56652_15a32.jpeg',
              country_name: 'Sweden',
              contact: {
                twitter: '',
                facebook: 'https://www.facebook.com/stigbergets/',
                instagram: 'stigbergetsbryggeri',
                url: 'http://www.stigbergetsbryggeri.se/',
              },
              location: {
                brewery_city: 'Gothenburg',
                brewery_state: 'Västra Götalands län',
                lat: 57.6986,
                lng: 11.9309,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: 5214359,
              venue_name: 'Pien Shop & Bar',
              venue_slug: 'pien-shop-and-bar',
              primary_category_key: 'Shop & Service',
              primary_category: 'Shop & Service',
              parent_category_id: '4d4b7105d754a06378d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_store',
                    category_name: 'Beer Store',
                    category_id: '5370f356bcbc57f1066c94c2',
                    is_primary: true,
                  },
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Ateneuminkuja',
                venue_city: 'HKI',
                venue_state: 'Uusimaa',
                venue_country: 'Suomi',
                lat: 60.1698,
                lng: 24.9454,
              },
              contact: {
                twitter: '@pienhki',
                venue_url: 'https://www.pien.fi/',
              },
              foursquare: {
                foursquare_id: '57ab4c95498ef8003be05e61',
                foursquare_url: 'http://4sq.com/2aVWjFK',
              },
              venue_icon: {
                sm:
                  'https://untappd.akamaized.net/venuelogos/venue_5214359_944860ed_bg_64.png',
                md:
                  'https://untappd.akamaized.net/venuelogos/venue_5214359_944860ed_bg_88.png',
                lg:
                  'https://untappd.akamaized.net/venuelogos/venue_5214359_944860ed_bg_176.png?v=1',
              },
              is_verified: true,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 2,
              count: 2,
              auth_toast: false,
              items: [
                {
                  uid: 1236,
                  user: {
                    uid: 1236,
                    user_name: 'user1236',
                    first_name: 'Test',
                    last_name: 'Su',
                    relationship: 'none',
                    location: 'Helsinki',
                    is_supporter: 0,
                    url: '',
                    bio: '',
                    user_avatar: 'https://picsum.photos/100/100',
                    is_private: 0,
                    account_type: 'user',
                    venue_details: [],
                    brewery_details: [],
                  },
                  like_id: 12345678,
                  like_owner: false,
                  created_at: 'Wed, 15 Jul 2020 09:38:54 +0000',
                },
              ],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 23456789,
                  photo: {
                    photo_img_sm: 'https://picsum.photos/200/200',
                    photo_img_md: 'https://picsum.photos/640/640',
                    photo_img_lg: 'https://picsum.photos/1280/1280',
                    photo_img_og: 'https://picsum.photos/1280/1280',
                  },
                },
              ],
            },
            source: {
              app_name: 'Untappd for Android - (V2)',
              app_website: 'http://untpd.it/androidapp',
            },
            badges: {
              retro_status: false,
              count: 3,
              items: [
                {
                  badge_id: 90653,
                  user_badge_id: 699497912,
                  badge_name: 'Verified Adventure (Level 68)',
                  badge_description:
                    "While spontaneity can be fun, sometimes you want to make sure your adventure will rock. Checkout the menu at an Untappd Verified Venue before visiting and know exactly what’s on tap! That's 340 check-ins at venue that is verified.  Try 5 more for Level 69!",
                  created_at: 'Wed, 15 Jul 2020 09:31:57 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_VerifiedVenue_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_VerifiedVenue_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_VerifiedVenue_lg.jpg',
                  },
                },
                {
                  badge_id: 3375,
                  user_badge_id: 699497913,
                  badge_name: 'Hopped Up (Level 18)',
                  badge_description:
                    "Load up those hops, watch the IBU grow and drink it down! Now you’re all hopped up. The more bitter, the better. That's 90 different beers with an IBU of 65 or higher. Try 5 more for Level 19!",
                  created_at: 'Wed, 15 Jul 2020 09:31:57 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_HoppedUp_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_HoppedUp_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_HoppedUp_lg.jpg',
                  },
                },
                {
                  badge_id: 133287,
                  user_badge_id: 699497914,
                  badge_name: 'Draft City (Level 34)',
                  badge_description:
                    "Fresh from the tap is one of the best ways to enjoy a beer. Just try to use a glass and not drink directly from the tap, as tempting as it may be. That's 170 checkins with the serving style of Draft. Try 5 more for Level 35!",
                  created_at: 'Wed, 15 Jul 2020 09:31:58 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_DraftCity_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_DraftCity_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_DraftCity_lg.jpg',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  }
}
