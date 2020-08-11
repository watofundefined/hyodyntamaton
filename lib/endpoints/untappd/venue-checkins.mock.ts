import { rest } from 'msw'
import { url } from './foursquare-lookup'
import { UtVenueCheckinsResponse } from './venue-checkins.types'
import { makeVenueInfoUser } from './mock-helpers'
import { UtVenueInfoComment } from './venue-info.types'
import { UtToastUser } from './shared.types'

export default rest.get(url + ':fsId', (req, res, ctx) => {
  const { fsId } = req.params
  return res(ctx.status(200), ctx.json(getMockedData(fsId)))
})

function makeComment(): UtVenueInfoComment {
  return {
    user: {
      uid: 1234555,
      user_name: 'user1234555',
      first_name: 'User',
      last_name: 'Name',
      bio: '',
      location: '',
      relationship: 'none',
      is_supporter: 0,
      user_avatar: 'https://picsum.photos/50/50',
      account_type: 'user',
      venue_details: [],
      brewery_details: [],
    },
    checkin_id: 55555555,
    comment_id: 55555556,
    comment_owner: false,
    comment_editor: false,
    comment: 'Human beer',
    created_at: 'Fri, 03 Jul 2020 23:38:04 +0000',
    comment_source: 'API',
  }
}

function makeVenueCheckinToastUser(overrides: Partial<UtToastUser> = {}): UtToastUser {
  return {
    uid: 11111,
    user_name: 'walterqwerty',
    first_name: 'Walter',
    last_name: 'W',
    location: '',
    url: '',
    is_supporter: 0,
    bio: '',
    relationship: 'none',
    user_avatar: 'https://picsum.photos/50/50',
    is_private: 0,
    account_type: 'user',
    brewery_details: [],
    venue_details: [],
    contact: null,
    ...overrides,
  }
}

function getMockedData(utId: number): UtVenueCheckinsResponse {
  return {
    meta: {
      code: 200,
      response_time: {
        time: 0.662,
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
      mem: false,
      type: 'full',
      pagination: {
        since_url: 'https://api.untappd.com/v4/venue/checkins/189889?max_id=912857400',
        next_url: 'https://api.untappd.com/v4/venue/checkins/189889?max_id=912857400',
        max_id: 912857400,
      },
      checkins: {
        count: 25,
        items: [
          {
            checkin_id: 918232894,
            created_at: 'Thu, 16 Jul 2020 16:03:03 +0000',
            rating_score: 3.5,
            checkin_comment:
              'Strong body, malty, slightly hoppy, mildly bitter finish. 9% ABV quite well hidden. Ok, but not the best of its type.',
            user: makeVenueInfoUser(),
            beer: {
              bid: 3845423,
              beer_name: 'DIPA',
              beer_abv: 9,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-3845423_893f0_sm.jpeg',
              beer_slug: 'maku-brewing-dipa',
              beer_style: 'IPA - Imperial / Double',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 144063,
              brewery_name: 'Maku Brewing',
              brewery_slug: 'maku-brewing',
              brewery_page_url: '/MakuBrewing',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-144063_cc16c.jpeg',
              country_name: 'Finland',
              contact: {
                twitter: 'makubrewing',
                facebook: 'https://www.facebook.com/MakuBrewing',
                instagram: 'makubrewing',
                url: 'http://www.makubrewing.com',
              },
              location: {
                brewery_city: 'Tuusula',
                brewery_state: '',
                lat: 53.8539,
                lng: 22.9703,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
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
                  uid: 34444,
                  user: makeVenueCheckinToastUser({ uid: 34444 }),
                  like_id: 853481060,
                  like_owner: false,
                  created_at: 'Thu, 16 Jul 2020 19:21:13 +0000',
                },
                {
                  uid: 214355,
                  user: makeVenueCheckinToastUser({ uid: 214355 }),
                  like_id: 853467203,
                  like_owner: false,
                  created_at: 'Thu, 16 Jul 2020 18:59:48 +0000',
                },
              ],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 304996175,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_16/31d36b19ecb87fd7efc4a5fadea0de3f_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_16/31d36b19ecb87fd7efc4a5fadea0de3f_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_16/31d36b19ecb87fd7efc4a5fadea0de3f_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_16/31d36b19ecb87fd7efc4a5fadea0de3f_raw.jpg',
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
              count: 1,
              items: [
                {
                  badge_id: 4648,
                  user_badge_id: 699896707,
                  badge_name: 'Never Finnished! (Level 40)',
                  badge_description:
                    'Brewing in Finland dates back to the Middle Ages, so one would assume they know a thing or two about beer. With the 9th per capita in the world for beer consumption, you truly are never finished. Try 5 more for Level 41!',
                  created_at: 'Thu, 16 Jul 2020 16:03:04 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_finnished_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_finnished_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_finnished_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 918215064,
            created_at: 'Thu, 16 Jul 2020 14:34:17 +0000',
            rating_score: 3.5,
            checkin_comment:
              'Slightly malty, citrusy notes, mellow bitter finish. Would happily drink again. 👍',
            user: makeVenueInfoUser(),
            beer: {
              bid: 383088,
              beer_name: 'Delta IPA',
              beer_abv: 6.5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-383088_ff6a4_sm.jpeg',
              beer_slug: 'brussels-beer-project-delta-ipa',
              beer_style: 'IPA - Belgian',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 68062,
              brewery_name: 'Brussels Beer Project',
              brewery_slug: 'brussels-beer-project',
              brewery_page_url: '/BeerProject_Bxl',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-68062_274e4.jpeg',
              country_name: 'Belgium',
              contact: {
                twitter: 'BeerProject_Bxl',
                facebook: 'https://www.facebook.com/brusselsbeerproject',
                instagram: 'BrusselsBeerProject',
                url: 'http://www.beerproject.be',
              },
              location: {
                brewery_city: 'Brussels',
                brewery_state:
                  'Région de Bruxelles-Capitale - Brussels Hoofdstedelijk Gewest',
                lat: 50.8528,
                lng: 4.34191,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 4,
              count: 4,
              auth_toast: false,
              items: [],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 304985235,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_16/0d36ca37872068b1f3e5c4f7b8b4245d_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_16/0d36ca37872068b1f3e5c4f7b8b4245d_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_16/0d36ca37872068b1f3e5c4f7b8b4245d_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_16/0d36ca37872068b1f3e5c4f7b8b4245d_raw.jpg',
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
                  badge_id: 113,
                  user_badge_id: 699874639,
                  badge_name: 'New Brew Thursday (Level 7)',
                  badge_description:
                    "It's New Brew Thursday! Drink any beer you have never had before on three different Thursdays in a 20 day period.",
                  created_at: 'Thu, 16 Jul 2020 14:34:18 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_NewNewBrewThurs_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_NewNewBrewThurs_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_NewNewBrewThurs_lg.jpg',
                  },
                },
                {
                  badge_id: 2606,
                  user_badge_id: 699874640,
                  badge_name: 'I Believe in IPA! (Level 20)',
                  badge_description:
                    "We believe in IPA and you should too. You certainly have a taste for the hops! That's 100 different IPAs. Try 5 more for Level 21!",
                  created_at: 'Thu, 16 Jul 2020 14:34:18 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_hoptopia_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_hoptopia_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_hoptopia_lg.jpg',
                  },
                },
                {
                  badge_id: 530,
                  user_badge_id: 699874641,
                  badge_name: 'Belgian Holiday (Level 3)',
                  badge_description:
                    "You obviously are a big fan of Belgian Beer, and rightfully so! Three cheers to the great Belgian beers and their uniquely crafted flavors!\r\n\r\nThat's 15 different beers from Belgium. Try 5 more for Level 4.",
                  created_at: 'Thu, 16 Jul 2020 14:34:18 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_belgianHoliday_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_belgianHoliday_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_belgianHoliday_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 917916226,
            created_at: 'Wed, 15 Jul 2020 14:52:44 +0000',
            rating_score: 3.75,
            checkin_comment: 'Voimakas belgifiba',
            user: makeVenueInfoUser(),
            beer: {
              bid: 383088,
              beer_name: 'Delta IPA',
              beer_abv: 6.5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-383088_ff6a4_sm.jpeg',
              beer_slug: 'brussels-beer-project-delta-ipa',
              beer_style: 'IPA - Belgian',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 68062,
              brewery_name: 'Brussels Beer Project',
              brewery_slug: 'brussels-beer-project',
              brewery_page_url: '/BeerProject_Bxl',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-68062_274e4.jpeg',
              country_name: 'Belgium',
              contact: {
                twitter: 'BeerProject_Bxl',
                facebook: 'https://www.facebook.com/brusselsbeerproject',
                instagram: 'BrusselsBeerProject',
                url: 'http://www.beerproject.be',
              },
              location: {
                brewery_city: 'Brussels',
                brewery_state:
                  'Région de Bruxelles-Capitale - Brussels Hoofdstedelijk Gewest',
                lat: 50.8528,
                lng: 4.34191,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 1,
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
              count: 2,
              items: [
                {
                  badge_id: 93342,
                  user_badge_id: 699527808,
                  badge_name: 'I Believe in IPA! (Level 57)',
                  badge_description:
                    "We believe in IPA and you should too. You certainly have a taste for the hops! That's 285 different IPAs. Try 5 more for Level 58!",
                  created_at: 'Wed, 15 Jul 2020 14:52:45 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_hoptopia_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_hoptopia_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_hoptopia_lg.jpg',
                  },
                },
                {
                  badge_id: 2246,
                  user_badge_id: 699527810,
                  badge_name: 'Belgian Holiday  (Level 20)',
                  badge_description:
                    "You obviously are a big fan of Belgian Beer, and rightfully so! Three cheers to the great Belgian beers and their uniquely crafted flavors!\r\n\r\nThat's 100 different beers from Belgium. Try 5 more for Level 21.",
                  created_at: 'Wed, 15 Jul 2020 14:52:45 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_belgianHoliday_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_belgianHoliday_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_belgianHoliday_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 916632007,
            created_at: 'Sat, 11 Jul 2020 19:56:22 +0000',
            rating_score: 4,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 2480090,
              beer_name: 'Blueberry Sour Ale',
              beer_abv: 5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-2480090_67058_sm.jpeg',
              beer_slug: 'mallaskoski-brewery-blueberry-sour-ale',
              beer_style: 'Sour - Other',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 9339,
              brewery_name: 'Mallaskoski Brewery',
              brewery_slug: 'mallaskoski-brewery',
              brewery_page_url: '/MallaskoskiBrewery',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-9339_2ecb4.jpeg',
              country_name: 'Finland',
              contact: {
                twitter: '',
                facebook: 'http://www.facebook.com/pages/Kuohu/93921682419',
                instagram: '',
                url: 'http://www.mallaskoski.fi',
              },
              location: {
                brewery_city: 'Seinäjoki',
                brewery_state: 'Länsi-Suomi',
                lat: 62.7817,
                lng: 22.8362,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
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
              app_name: 'Untappd for iPhone - (V2)',
              app_website: 'http://untpd.it/iphoneapp',
            },
            badges: {
              retro_status: false,
              count: 4,
              items: [
                {
                  badge_id: 419988,
                  user_badge_id: 698051078,
                  badge_name: 'Pride Month (2020)',
                  badge_description:
                    'Raise your glass and join Untappd this Pride Month as we recognize the impact the LGBTQIA+ community has had on the beer industry.\n',
                  created_at: 'Sat, 11 Jul 2020 19:56:22 +0000',
                  badge_image: {
                    sm:
                      'https://untappd.akamaized.net/badges/bdg_prideMonth2020_update_sm.jpg',
                    md:
                      'https://untappd.akamaized.net/badges/bdg_prideMonth2020_update_md.jpg',
                    lg:
                      'https://untappd.akamaized.net/badges/bdg_prideMonth2020_update_lg.jpg',
                  },
                },
                {
                  badge_id: 34605,
                  user_badge_id: 698051079,
                  badge_name: 'Hopped Down',
                  badge_description:
                    "One cannot live on dank hops alone. Tone down the bitterness and enjoy some smooth flavor. That's 5 different beers with an IBU of 20 or below. Try 5 more for Level 2!",
                  created_at: 'Sat, 11 Jul 2020 19:56:22 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_HoppedDown_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_HoppedDown_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_HoppedDown_lg.jpg',
                  },
                },
                {
                  badge_id: 345817,
                  user_badge_id: 698051080,
                  badge_name: 'Beer of the World',
                  badge_description:
                    "Traveling the world is hard, but not for you. It's as easy as cracking open a new brew! You have had a beer from at least 5 different regions around the world. Try 5 more for Level 2!\n",
                  created_at: 'Sat, 11 Jul 2020 19:56:22 +0000',
                  badge_image: {
                    sm:
                      'https://untappd.akamaized.net/badges/bdg_beers-of-the-world_sm.jpg',
                    md:
                      'https://untappd.akamaized.net/badges/bdg_beers-of-the-world_md.jpg',
                    lg:
                      'https://untappd.akamaized.net/badges/bdg_beers-of-the-world_lg.jpg',
                  },
                },
                {
                  badge_id: 133055,
                  user_badge_id: 698051081,
                  badge_name: '99 Bottles',
                  badge_description:
                    "99 bottles of beer on the wall, 99 bottles of beer. Take one down, pass it around.... That's 5 checkins with the serving style of Bottle. Try 5 more for Level 2!",
                  created_at: 'Sat, 11 Jul 2020 19:56:22 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_99Bottles_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_99Bottles_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_99Bottles_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 916012792,
            created_at: 'Fri, 10 Jul 2020 20:05:13 +0000',
            rating_score: 3.5,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 2965810,
              beer_name: 'Craft Pils',
              beer_abv: 5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-2965810_4d031_sm.jpeg',
              beer_slug: 'mallaskoski-brewery-craft-pils',
              beer_style: 'Pilsner - Other',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 9339,
              brewery_name: 'Mallaskoski Brewery',
              brewery_slug: 'mallaskoski-brewery',
              brewery_page_url: '/MallaskoskiBrewery',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-9339_2ecb4.jpeg',
              country_name: 'Finland',
              contact: {
                twitter: '',
                facebook: 'http://www.facebook.com/pages/Kuohu/93921682419',
                instagram: '',
                url: 'http://www.mallaskoski.fi',
              },
              location: {
                brewery_city: 'Seinäjoki',
                brewery_state: 'Länsi-Suomi',
                lat: 62.7817,
                lng: 22.8362,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
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
                  photo_id: 303876530,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_10/cee7b2ae18a59be92409f2fe37769287_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_10/cee7b2ae18a59be92409f2fe37769287_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_10/cee7b2ae18a59be92409f2fe37769287_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_10/cee7b2ae18a59be92409f2fe37769287_raw.jpg',
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
              count: 1,
              items: [
                {
                  badge_id: 94345,
                  user_badge_id: 697321348,
                  badge_name: 'Photogenic Brew (Level 60)',
                  badge_description:
                    "It takes the perfect amount of light, the right framing and a touch of creative love to get the perfect picture of your brew. Now it’s time to drink it! That's 300 check-ins with a photo.  Try 5 more for Level 61!",
                  created_at: 'Fri, 10 Jul 2020 20:05:13 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_beertography_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_beertography_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_beertography_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 915963924,
            created_at: 'Fri, 10 Jul 2020 19:05:05 +0000',
            rating_score: 3,
            checkin_comment: 'Maitua',
            user: makeVenueInfoUser(),
            beer: {
              bid: 3430180,
              beer_name: 'Milky IPA',
              beer_abv: 5.3,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-3430180_bc5aa_sm.jpeg',
              beer_slug: 'maku-brewing-milky-ipa',
              beer_style: 'IPA - Milkshake',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 144063,
              brewery_name: 'Maku Brewing',
              brewery_slug: 'maku-brewing',
              brewery_page_url: '/MakuBrewing',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-144063_cc16c.jpeg',
              country_name: 'Finland',
              contact: {
                twitter: 'makubrewing',
                facebook: 'https://www.facebook.com/MakuBrewing',
                instagram: 'makubrewing',
                url: 'http://www.makubrewing.com',
              },
              location: {
                brewery_city: 'Tuusula',
                brewery_state: '',
                lat: 53.8539,
                lng: 22.9703,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
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
              items: [],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 303848514,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_10/12e195f0d1910d33ed4a39f5794f109c_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_10/12e195f0d1910d33ed4a39f5794f109c_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_10/12e195f0d1910d33ed4a39f5794f109c_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_10/12e195f0d1910d33ed4a39f5794f109c_raw.jpg',
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
                  badge_id: 34709,
                  user_badge_id: 697260494,
                  badge_name: 'Middle of the Road (Level 5)',
                  badge_description:
                    "Looking for more kick than a session beer, but want to be able to stay for a few rounds? You have to keep it in the middle. That's 25 beers with an ABV greater than 5% and less than 10%. Try 5 more for Level 6!",
                  created_at: 'Fri, 10 Jul 2020 19:05:06 +0000',
                  badge_image: {
                    sm:
                      'https://untappd.akamaized.net/badges/bdg_middle-of-the-road_sm.jpg',
                    md:
                      'https://untappd.akamaized.net/badges/bdg_middle-of-the-road_md.jpg',
                    lg:
                      'https://untappd.akamaized.net/badges/bdg_middle-of-the-road_lg.jpg',
                  },
                },
                {
                  badge_id: 60,
                  user_badge_id: 697260495,
                  badge_name: 'I Believe in IPA!',
                  badge_description:
                    "We believe in IPA and you should too. You certainly have a taste for the hops! That's 5 different IPAs. Try 5 more for Level 2!\n",
                  created_at: 'Fri, 10 Jul 2020 19:05:06 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_hoptopia_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_hoptopia_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_hoptopia_lg.jpg',
                  },
                },
                {
                  badge_id: 4611,
                  user_badge_id: 697260496,
                  badge_name: 'Never Finnished! (Level 3)',
                  badge_description:
                    'Brewing in Finland dates back to the Middle Ages, so one would assume they know a thing or two about beer. With the 9th per capita in the world for beer consumption, you truly are never finished. Try 5 more for Level 4!',
                  created_at: 'Fri, 10 Jul 2020 19:05:06 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_finnished_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_finnished_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_finnished_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 915835588,
            created_at: 'Fri, 10 Jul 2020 14:57:40 +0000',
            rating_score: 0,
            checkin_comment:
              'Maistoin myös Katariinalta kuusenkerkkä-variksenmarja -sour alea. Tuoksuu vessanraikastimelta, maistuu kuusenkerkkälimulta.',
            user: makeVenueInfoUser(),
            beer: {
              bid: 2815723,
              beer_name: 'Mitä Humalan Jälkeen?',
              beer_abv: 6.7,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-2815723_9974d_sm.jpeg',
              beer_slug: 'hiisi-mita-humalan-jalkeen',
              beer_style: 'Sour - Other',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 78852,
              brewery_name: 'HIISI',
              brewery_slug: 'hiisi',
              brewery_page_url: '/hiisibeer',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-78852_3e7bf.jpeg',
              country_name: 'Finland',
              contact: {
                twitter: 'hiisi_beer',
                facebook: 'https://www.facebook.com/hiisi.beer',
                instagram: 'hiisi.beer',
                url: 'https://hiisi.beer',
              },
              location: {
                brewery_city: 'Jyvaskyla',
                brewery_state: 'Länsi-Suomi',
                lat: 62.2856,
                lng: 25.7635,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 1,
              count: 1,
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
              count: 0,
              items: [],
            },
          },
          {
            checkin_id: 915834452,
            created_at: 'Fri, 10 Jul 2020 14:53:14 +0000',
            rating_score: 0,
            checkin_comment: 'Kuiva, kevyehkö dubbel.',
            user: makeVenueInfoUser(),
            beer: {
              bid: 78470,
              beer_name: 'Bon Homme',
              beer_abv: 6.5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-_78470_1823d8ff182bacdd3462b22978d9.jpeg',
              beer_slug: 'brouwerij-de-leite-bon-homme',
              beer_style: 'Belgian Dubbel',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 9601,
              brewery_name: 'Brouwerij De Leite',
              brewery_slug: 'brouwerij-de-leite',
              brewery_page_url: '/w/brouwerij-de-leite/9601',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
              country_name: 'Belgium',
              contact: {
                twitter: '',
                facebook: 'https://www.facebook.com/brouwerijdeleite/',
                instagram: 'deleitebe',
                url: 'http://www.deleite.be',
              },
              location: {
                brewery_city: 'Ruddervoorde',
                brewery_state: 'Vlaanderen',
                lat: 51.1016,
                lng: 3.22063,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 1,
              count: 1,
              auth_toast: false,
              items: [],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 303773746,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_10/732ef8a38191605988f59262244329c6_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_10/732ef8a38191605988f59262244329c6_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_10/732ef8a38191605988f59262244329c6_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_10/732ef8a38191605988f59262244329c6_raw.jpg',
                  },
                },
              ],
            },
            source: {
              app_name: 'Untappd for Android - (V2)',
              app_website: 'http://untpd.it/androidapp',
            },
            badges: {
              count: 0,
              items: [],
            },
          },
          {
            checkin_id: 915826384,
            created_at: 'Fri, 10 Jul 2020 14:16:21 +0000',
            rating_score: 0,
            checkin_comment:
              'Kesäloma käyntiin vadelmalambicilla Dworpista. Kuiva, todella hapan, mutta silti oikein toimiva.',
            user: makeVenueInfoUser(),
            beer: {
              bid: 2218670,
              beer_name: 'Framboos',
              beer_abv: 6,
              beer_label:
                'https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png',
              beer_slug: 'hanssens-artisanaal-framboos',
              beer_style: 'Lambic - Framboise',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 630,
              brewery_name: 'Hanssens Artisanaal',
              brewery_slug: 'hanssens-artisanaal',
              brewery_page_url: '/w/hanssens-artisanaal/630',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-630_188d2.jpeg',
              country_name: 'Belgium',
              contact: {
                twitter: '',
                facebook:
                  'https://www.facebook.com/pages/Geuze-Hanssens-Artisanaal/53662941860',
                instagram: '',
                url:
                  'http://users.belgacom.net/gc762821/NL/brouwers/hanssens/hanssens.htm',
              },
              location: {
                brewery_city: 'Dworp',
                brewery_state: 'Vlaanderen',
                lat: 50.7288,
                lng: 4.29719,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
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
              items: [],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 303768901,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_10/048a6cdb5650ba3cf51c99f23a9c6155_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_10/048a6cdb5650ba3cf51c99f23a9c6155_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_10/048a6cdb5650ba3cf51c99f23a9c6155_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_10/048a6cdb5650ba3cf51c99f23a9c6155_raw.jpg',
                  },
                },
              ],
            },
            source: {
              app_name: 'Untappd for Android - (V2)',
              app_website: 'http://untpd.it/androidapp',
            },
            badges: {
              count: 0,
              items: [],
            },
          },
          {
            checkin_id: 915488367,
            created_at: 'Thu, 09 Jul 2020 14:34:23 +0000',
            rating_score: 3.25,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 3672442,
              beer_name: 'Semla',
              beer_abv: 8,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-3672442_1cd7b_sm.jpeg',
              beer_slug: 'coolhead-brew-semla',
              beer_style: 'Sour - Fruited',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 258054,
              brewery_name: 'CoolHead Brew',
              brewery_slug: 'coolhead-brew',
              brewery_page_url: '/CoolHeadBrew',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-258054_3a94f.jpeg',
              country_name: 'Finland',
              contact: {
                twitter: 'coolheadbrew',
                facebook: 'https://www.facebook.com/coolheadbrew',
                instagram: 'coolheadbrew',
                url: 'http://www.coolhead.fi',
              },
              location: {
                brewery_city: 'Tuusula',
                brewery_state: 'Uusimaa',
                lat: 60.396,
                lng: 24.9665,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
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
              items: [],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 303596311,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_09/14b6369b6a4b88f28a1a64c3ed65c3a6_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_09/14b6369b6a4b88f28a1a64c3ed65c3a6_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_09/14b6369b6a4b88f28a1a64c3ed65c3a6_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_09/14b6369b6a4b88f28a1a64c3ed65c3a6_raw.jpg',
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
                  badge_id: 91516,
                  user_badge_id: 696668676,
                  badge_name: 'Never Finnished! (Level 81)',
                  badge_description:
                    'Brewing in Finland dates back to the Middle Ages, so one would assume they know a thing or two about beer. With the 9th per capita in the world for beer consumption, you truly are never finished.  Try 5 more for Level 82!',
                  created_at: 'Thu, 09 Jul 2020 14:34:23 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_finnished_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_finnished_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_finnished_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 915310182,
            created_at: 'Wed, 08 Jul 2020 20:09:57 +0000',
            rating_score: 2.5,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 519015,
              beer_name: 'Piccolo',
              beer_abv: 8.5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-519015_01f31_sm.jpeg',
              beer_slug: 'de-circus-brouwerij-piccolo',
              beer_style: 'Spiced / Herbed Beer',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 171782,
              brewery_name: 'De Circus Brouwerij',
              brewery_slug: 'de-circus-brouwerij',
              brewery_page_url: '/DeCircusBrouwerij',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-171782_8a58d.jpeg',
              country_name: 'Belgium',
              contact: {
                twitter: '',
                facebook: 'http://www.facebook.com/circusbrouwerij',
                instagram: '',
                url: 'http://www.circusbrouwerij.be/',
              },
              location: {
                brewery_city: '',
                brewery_state: '',
                lat: 0,
                lng: 0,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 1,
              count: 1,
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
              count: 0,
              items: [],
            },
          },
          {
            checkin_id: 915277302,
            created_at: 'Wed, 08 Jul 2020 18:47:25 +0000',
            rating_score: 2.5,
            checkin_comment: 'Not my cup of tea',
            user: makeVenueInfoUser(),
            beer: {
              bid: 800757,
              beer_name: 'Delirium Argentum',
              beer_abv: 7,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-800757_2f02e_sm.jpeg',
              beer_slug: 'huyghe-brewery-delirium-argentum',
              beer_style: 'Belgian Strong Golden Ale',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 285,
              brewery_name: 'Huyghe Brewery',
              brewery_slug: 'huyghe-brewery',
              brewery_page_url: '/BrouwerijHuyghe',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-285_5020c.jpeg',
              country_name: 'Belgium',
              contact: {
                twitter: 'deliriumbrewery',
                facebook: 'http://www.facebook.com/Deliriumbrewery',
                instagram: 'delirium_brewery',
                url: 'http://www.delirium.be',
              },
              location: {
                brewery_city: 'Melle',
                brewery_state: 'Vlaanderen',
                lat: 51.0003,
                lng: 3.80508,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 1,
              count: 1,
              auth_toast: false,
              items: [],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 303493704,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_08/e8dd1c4d5244f072c614c16fa41c38a9_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_08/e8dd1c4d5244f072c614c16fa41c38a9_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_08/e8dd1c4d5244f072c614c16fa41c38a9_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_08/e8dd1c4d5244f072c614c16fa41c38a9_raw.jpg',
                  },
                },
              ],
            },
            source: {
              app_name: 'Untappd for iPhone - (V2)',
              app_website: 'http://untpd.it/iphoneapp',
            },
            badges: {
              count: 0,
              items: [],
            },
          },
          {
            checkin_id: 915269637,
            created_at: 'Wed, 08 Jul 2020 18:27:38 +0000',
            rating_score: 3.5,
            checkin_comment: 'Finally got to taste this - worth the waiting!',
            user: makeVenueInfoUser(),
            beer: {
              bid: 3659823,
              beer_name: 'Hulk Juice',
              beer_abv: 8,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-3659823_99ba7_sm.jpeg',
              beer_slug: 'coolhead-brew-hulk-juice',
              beer_style: 'IPA - Imperial / Double',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 258054,
              brewery_name: 'CoolHead Brew',
              brewery_slug: 'coolhead-brew',
              brewery_page_url: '/CoolHeadBrew',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-258054_3a94f.jpeg',
              country_name: 'Finland',
              contact: {
                twitter: 'coolheadbrew',
                facebook: 'https://www.facebook.com/coolheadbrew',
                instagram: 'coolheadbrew',
                url: 'http://www.coolhead.fi',
              },
              location: {
                brewery_city: 'Tuusula',
                brewery_state: 'Uusimaa',
                lat: 60.396,
                lng: 24.9665,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 2,
              count: 1,
              auth_toast: false,
              items: [],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 303489338,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_08/2dac217ac9c3d72df1a7ec23f86640a5_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_08/2dac217ac9c3d72df1a7ec23f86640a5_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_08/2dac217ac9c3d72df1a7ec23f86640a5_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_08/2dac217ac9c3d72df1a7ec23f86640a5_raw.jpg',
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
                  badge_id: 3411,
                  user_badge_id: 696410219,
                  badge_name: 'Better Together (Level 4)',
                  badge_description:
                    "What happens when you take two or more amazing breweries, throw them into the tank and let them ferment together? An amazing collaboration beer, that’s what! Cheers to working together to create the perfect flavor. That's 20 different beers that have been brewed as a collaboration. Try 5 more for Level 5!",
                  created_at: 'Wed, 08 Jul 2020 18:27:38 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_BetterTogether_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_BetterTogether_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_BetterTogether_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 915263197,
            created_at: 'Wed, 08 Jul 2020 18:10:14 +0000',
            rating_score: 3.5,
            checkin_comment: 'Lovely lightness and crispiness!',
            user: makeVenueInfoUser(),
            beer: {
              bid: 3709069,
              beer_name: 'The Crystal Ship',
              beer_abv: 4.5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-3709069_42793_sm.jpeg',
              beer_slug: 'thornbridge-brewery-the-crystal-ship',
              beer_style: 'Sour - Other',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 2047,
              brewery_name: 'Thornbridge Brewery',
              brewery_slug: 'thornbridge-brewery',
              brewery_page_url: '/thornbridgebrewery',
              brewery_type: 'Regional Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-2047_019fb.jpeg',
              country_name: 'England',
              contact: {
                twitter: 'thornbridge',
                facebook: 'https://www.facebook.com/thornbridgebrewery',
                instagram: 'thornbridge',
                url: 'http://www.thornbridgebrewery.co.uk',
              },
              location: {
                brewery_city: 'Bakewell',
                brewery_state: 'Derbyshire',
                lat: 53.2161,
                lng: -1.67814,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 1,
              count: 0,
              auth_toast: false,
              items: [],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 303485816,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_08/4ab2439a9a88de3d4578124bd26710c9_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_08/4ab2439a9a88de3d4578124bd26710c9_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_08/4ab2439a9a88de3d4578124bd26710c9_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_08/4ab2439a9a88de3d4578124bd26710c9_raw.jpg',
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
              count: 2,
              items: [
                {
                  badge_id: 94351,
                  user_badge_id: 696402531,
                  badge_name: 'Photogenic Brew (Level 66)',
                  badge_description:
                    "It takes the perfect amount of light, the right framing and a touch of creative love to get the perfect picture of your brew. Now it’s time to drink it! That's 330 check-ins with a photo.  Try 5 more for Level 67!",
                  created_at: 'Wed, 08 Jul 2020 18:10:14 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_beertography_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_beertography_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_beertography_lg.jpg',
                  },
                },
                {
                  badge_id: 345831,
                  user_badge_id: 696402532,
                  badge_name: 'Beer of the World (Level 15)',
                  badge_description:
                    "Traveling the world is hard, but not for you. It's as easy as cracking open a new brew! You have had a beer from at least 5 different regions around the world. Try 5 more for Level 16!",
                  created_at: 'Wed, 08 Jul 2020 18:10:14 +0000',
                  badge_image: {
                    sm:
                      'https://untappd.akamaized.net/badges/bdg_beers-of-the-world_sm.jpg',
                    md:
                      'https://untappd.akamaized.net/badges/bdg_beers-of-the-world_md.jpg',
                    lg:
                      'https://untappd.akamaized.net/badges/bdg_beers-of-the-world_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 915224771,
            created_at: 'Wed, 08 Jul 2020 15:52:18 +0000',
            rating_score: 4,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 800757,
              beer_name: 'Delirium Argentum',
              beer_abv: 7,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-800757_2f02e_sm.jpeg',
              beer_slug: 'huyghe-brewery-delirium-argentum',
              beer_style: 'Belgian Strong Golden Ale',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 285,
              brewery_name: 'Huyghe Brewery',
              brewery_slug: 'huyghe-brewery',
              brewery_page_url: '/BrouwerijHuyghe',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-285_5020c.jpeg',
              country_name: 'Belgium',
              contact: {
                twitter: 'deliriumbrewery',
                facebook: 'http://www.facebook.com/Deliriumbrewery',
                instagram: 'delirium_brewery',
                url: 'http://www.delirium.be',
              },
              location: {
                brewery_city: 'Melle',
                brewery_state: 'Vlaanderen',
                lat: 51.0003,
                lng: 3.80508,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
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
                  photo_id: 303464079,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_08/97835a22264f764cbd1d11de8ef8f3cf_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_08/97835a22264f764cbd1d11de8ef8f3cf_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_08/97835a22264f764cbd1d11de8ef8f3cf_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_08/97835a22264f764cbd1d11de8ef8f3cf_raw.jpg',
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
              count: 1,
              items: [
                {
                  badge_id: 133255,
                  user_badge_id: 696355592,
                  badge_name: 'Draft City (Level 2)',
                  badge_description:
                    "Fresh from the tap is one of the best ways to enjoy a beer. Just try to use a glass and not drink directly from the tap, as tempting as it may be. That's 10 checkins with the serving style of Draft. Try 5 more for Level 3!",
                  created_at: 'Wed, 08 Jul 2020 15:52:18 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_DraftCity_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_DraftCity_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_DraftCity_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 915022317,
            created_at: 'Tue, 07 Jul 2020 18:28:58 +0000',
            rating_score: 3.5,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 800757,
              beer_name: 'Delirium Argentum',
              beer_abv: 7,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-800757_2f02e_sm.jpeg',
              beer_slug: 'huyghe-brewery-delirium-argentum',
              beer_style: 'Belgian Strong Golden Ale',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 285,
              brewery_name: 'Huyghe Brewery',
              brewery_slug: 'huyghe-brewery',
              brewery_page_url: '/BrouwerijHuyghe',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-285_5020c.jpeg',
              country_name: 'Belgium',
              contact: {
                twitter: 'deliriumbrewery',
                facebook: 'http://www.facebook.com/Deliriumbrewery',
                instagram: 'delirium_brewery',
                url: 'http://www.delirium.be',
              },
              location: {
                brewery_city: 'Melle',
                brewery_state: 'Vlaanderen',
                lat: 51.0003,
                lng: 3.80508,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
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
                  photo_id: 303364555,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_07/55154c4f353f8fbf89014b6d0755c35c_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_07/55154c4f353f8fbf89014b6d0755c35c_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_07/55154c4f353f8fbf89014b6d0755c35c_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_07/55154c4f353f8fbf89014b6d0755c35c_raw.jpg',
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
              count: 2,
              items: [
                {
                  badge_id: 243496,
                  user_badge_id: 696117804,
                  badge_name: 'Brewery Pioneer',
                  badge_description:
                    "There's beer in them thar hills! You're setting off on your journey through the world of beer, but be sure to take a little time to get to know each brewery as you go. That's a beer from 5 different breweries. Try 5 more for Level 2!",
                  created_at: 'Tue, 07 Jul 2020 18:28:58 +0000',
                  badge_image: {
                    sm:
                      'https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg',
                    md:
                      'https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg',
                    lg:
                      'https://untappd.akamaized.net/badges/bdg_brewery_prioneer_sm.jpg',
                  },
                },
                {
                  badge_id: 345817,
                  user_badge_id: 696117805,
                  badge_name: 'Beer of the World',
                  badge_description:
                    "Traveling the world is hard, but not for you. It's as easy as cracking open a new brew! You have had a beer from at least 5 different regions around the world. Try 5 more for Level 2!\n",
                  created_at: 'Tue, 07 Jul 2020 18:28:58 +0000',
                  badge_image: {
                    sm:
                      'https://untappd.akamaized.net/badges/bdg_beers-of-the-world_sm.jpg',
                    md:
                      'https://untappd.akamaized.net/badges/bdg_beers-of-the-world_md.jpg',
                    lg:
                      'https://untappd.akamaized.net/badges/bdg_beers-of-the-world_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 914543931,
            created_at: 'Sun, 05 Jul 2020 19:37:33 +0000',
            rating_score: 4,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 3709069,
              beer_name: 'The Crystal Ship',
              beer_abv: 4.5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-3709069_42793_sm.jpeg',
              beer_slug: 'thornbridge-brewery-the-crystal-ship',
              beer_style: 'Sour - Other',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 2047,
              brewery_name: 'Thornbridge Brewery',
              brewery_slug: 'thornbridge-brewery',
              brewery_page_url: '/thornbridgebrewery',
              brewery_type: 'Regional Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-2047_019fb.jpeg',
              country_name: 'England',
              contact: {
                twitter: 'thornbridge',
                facebook: 'https://www.facebook.com/thornbridgebrewery',
                instagram: 'thornbridge',
                url: 'http://www.thornbridgebrewery.co.uk',
              },
              location: {
                brewery_city: 'Bakewell',
                brewery_state: 'Derbyshire',
                lat: 53.2161,
                lng: -1.67814,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
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
              app_name: 'Untappd for iPhone - (V2)',
              app_website: 'http://untpd.it/iphoneapp',
            },
            badges: {
              count: 0,
              items: [],
            },
          },
          {
            checkin_id: 914543238,
            created_at: 'Sun, 05 Jul 2020 19:36:26 +0000',
            rating_score: 3.75,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 366526,
              beer_name: "Bloody 'Ell",
              beer_abv: 5.5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-366526_5b208_sm.jpeg',
              beer_slug: 'beavertown-bloody-ell',
              beer_style: 'IPA - American',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 24735,
              brewery_name: 'Beavertown',
              brewery_slug: 'beavertown',
              brewery_page_url: '/BeavertownBeer',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-24735_98b0c.jpeg',
              country_name: 'England',
              contact: {
                twitter: 'BeavertownBeer',
                facebook:
                  'http://www.facebook.com/pages/Beavertown-Brewery/236784039691522',
                instagram: 'beavertownbeer',
                url: 'http://www.beavertownbrewery.co.uk',
              },
              location: {
                brewery_city: 'Tottenham Hale',
                brewery_state: 'London',
                lat: 51.5908,
                lng: -0.0571249,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
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
              app_name: 'Untappd for iPhone - (V2)',
              app_website: 'http://untpd.it/iphoneapp',
            },
            badges: {
              retro_status: false,
              count: 3,
              items: [
                {
                  badge_id: 133267,
                  user_badge_id: 695537886,
                  badge_name: 'Draft City (Level 14)',
                  badge_description:
                    "Fresh from the tap is one of the best ways to enjoy a beer. Just try to use a glass and not drink directly from the tap, as tempting as it may be. That's 70 checkins with the serving style of Draft. Try 5 more for Level 15!",
                  created_at: 'Sun, 05 Jul 2020 19:36:27 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_DraftCity_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_DraftCity_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_DraftCity_lg.jpg',
                  },
                },
                {
                  badge_id: 2603,
                  user_badge_id: 695537887,
                  badge_name: 'I Believe in IPA! (Level 17)',
                  badge_description:
                    "We believe in IPA and you should too. You certainly have a taste for the hops! That's 85 different IPAs. Try 5 more for Level 18!",
                  created_at: 'Sun, 05 Jul 2020 19:36:27 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_hoptopia_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_hoptopia_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_hoptopia_lg.jpg',
                  },
                },
                {
                  badge_id: 168109,
                  user_badge_id: 695537888,
                  badge_name: 'Tower of Beer (Level 23)',
                  badge_description:
                    "While a pint of traditional English ale will always remain a staple, the craft beer scene in England, much like the rest of the world, has continued to grow at a rapid rate! That's 115 different beers from a brewery from England! Try 5 more for Level 24!",
                  created_at: 'Sun, 05 Jul 2020 19:36:27 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_TowerOfBeer_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_TowerOfBeer_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_TowerOfBeer_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 914506276,
            created_at: 'Sun, 05 Jul 2020 18:31:45 +0000',
            rating_score: 3.5,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 3169383,
              beer_name: 'Skin Deep',
              beer_abv: 4.2,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-3169383_912ae_sm.jpeg',
              beer_slug: 'anarchy-brew-co-skin-deep',
              beer_style: 'Pale Ale - International',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 39646,
              brewery_name: 'Anarchy Brew Co.',
              brewery_slug: 'anarchy-brew-co',
              brewery_page_url: '/AnarchyBrewCo',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-39646_e3a10.jpeg',
              country_name: 'England',
              contact: {
                twitter: 'anarchybrewco',
                facebook: 'http://www.facebook.com/anarchybrewco',
                instagram: 'anarchybrewco',
                url: 'http://anarchybrewco.com',
              },
              location: {
                brewery_city: 'Newcastle upon Tyne',
                brewery_state: 'Tyne and Wear',
                lat: 54.9852,
                lng: -1.56313,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
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
              app_name: 'Untappd for iPhone - (V2)',
              app_website: 'http://untpd.it/iphoneapp',
            },
            badges: {
              retro_status: false,
              count: 2,
              items: [
                {
                  badge_id: 90408,
                  user_badge_id: 695490826,
                  badge_name: 'Riding Steady (Level 73)',
                  badge_description:
                    "Want to enjoy a day of brews, but need to keep your wits sharp? There are plenty of delicious brews under 5% for you to sip on throughout the day. That's 365 different beers with an ABV of 5% and lower. ",
                  created_at: 'Sun, 05 Jul 2020 18:31:45 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_RidingSteady_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_RidingSteady_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_RidingSteady_lg.jpg',
                  },
                },
                {
                  badge_id: 2178,
                  user_badge_id: 695490827,
                  badge_name: 'Pale as the Moon  (Level 32)',
                  badge_description:
                    "Ahh, the trusty pale ale; crisp, refreshing, and always a good choice in a bind. That's 160 different Pale Ales. Try 5 more for Level 33.",
                  created_at: 'Sun, 05 Jul 2020 18:31:46 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_PaleMoon_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_PaleMoon_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_PaleMoon_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 913477296,
            created_at: 'Fri, 03 Jul 2020 22:38:21 +0000',
            rating_score: 3.25,
            checkin_comment:
              'Raikas ja kevyen hedelmäinen lager tuhdin viljaisella mallaspohjalla.',
            user: makeVenueInfoUser(),
            beer: {
              bid: 3802492,
              beer_name: 'Sommer Helles - Unfiltered',
              beer_abv: 5.5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-3802492_0a296_sm.jpeg',
              beer_slug: 'mallaskoski-brewery-sommer-helles-unfiltered',
              beer_style: 'Lager - Helles',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 9339,
              brewery_name: 'Mallaskoski Brewery',
              brewery_slug: 'mallaskoski-brewery',
              brewery_page_url: '/MallaskoskiBrewery',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-9339_2ecb4.jpeg',
              country_name: 'Finland',
              contact: {
                twitter: '',
                facebook: 'http://www.facebook.com/pages/Kuohu/93921682419',
                instagram: '',
                url: 'http://www.mallaskoski.fi',
              },
              location: {
                brewery_city: 'Seinäjoki',
                brewery_state: 'Länsi-Suomi',
                lat: 62.7817,
                lng: 22.8362,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 1,
              count: 1,
              items: [makeComment()],
            },
            toasts: {
              total_count: 1,
              count: 1,
              auth_toast: false,
              items: [
                {
                  uid: 555522,
                  user: makeVenueCheckinToastUser({ uid: 555522 }),
                  like_id: 846894798,
                  like_owner: false,
                  created_at: 'Fri, 03 Jul 2020 23:38:06 +0000',
                },
              ],
            },
            media: {
              count: 1,
              items: [
                {
                  photo_id: 302599427,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_03/bfac138481b91ecc223bc217e2354b7c_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_03/bfac138481b91ecc223bc217e2354b7c_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_03/bfac138481b91ecc223bc217e2354b7c_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_03/bfac138481b91ecc223bc217e2354b7c_raw.jpg',
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
              count: 1,
              items: [
                {
                  badge_id: 12309,
                  user_badge_id: 694120304,
                  badge_name: 'Hella Delicious! (Level 2)',
                  badge_description:
                    "Hell yea helles! This traditional German pale lager is typically full-bodied, mildly sweet, and light-colored, making it a perfect go to for any occasion. That's 10 different beers with the style of Lager - Helles or Bock - Maibock / Heller (Helles) / Lentebock. Try 5 more for Level 3!\n",
                  created_at: 'Fri, 03 Jul 2020 22:38:22 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_HellaDelicious_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_HellaDelicious_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_HellaDelicious_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 913450643,
            created_at: 'Fri, 03 Jul 2020 22:05:40 +0000',
            rating_score: 2.75,
            checkin_comment: 'Kuivaa ja raikasta pilssiä',
            user: makeVenueInfoUser(),
            beer: {
              bid: 2965810,
              beer_name: 'Craft Pils',
              beer_abv: 5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-2965810_4d031_sm.jpeg',
              beer_slug: 'mallaskoski-brewery-craft-pils',
              beer_style: 'Pilsner - Other',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 9339,
              brewery_name: 'Mallaskoski Brewery',
              brewery_slug: 'mallaskoski-brewery',
              brewery_page_url: '/MallaskoskiBrewery',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-9339_2ecb4.jpeg',
              country_name: 'Finland',
              contact: {
                twitter: '',
                facebook: 'http://www.facebook.com/pages/Kuohu/93921682419',
                instagram: '',
                url: 'http://www.mallaskoski.fi',
              },
              location: {
                brewery_city: 'Seinäjoki',
                brewery_state: 'Länsi-Suomi',
                lat: 62.7817,
                lng: 22.8362,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 1,
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
                  badge_id: 133341,
                  user_badge_id: 694080282,
                  badge_name: 'Draft City (Level 88)',
                  badge_description:
                    "Fresh from the tap is one of the best ways to enjoy a beer. Just try to use a glass and not drink directly from the tap, as tempting as it may be. That's 440 checkins with the serving style of Draft. Try 5 more for Level 89!",
                  created_at: 'Fri, 03 Jul 2020 22:05:41 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_DraftCity_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_DraftCity_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_DraftCity_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 913415589,
            created_at: 'Fri, 03 Jul 2020 21:25:01 +0000',
            rating_score: 2.75,
            checkin_comment: 'Maltainen ja pehmeä lager',
            user: makeVenueInfoUser(),
            beer: {
              bid: 1719228,
              beer_name: 'Amber Lager',
              beer_abv: 5.5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-1719228_0c02a_sm.jpeg',
              beer_slug: 'mallaskoski-brewery-amber-lager',
              beer_style: 'Lager - American Amber / Red',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 9339,
              brewery_name: 'Mallaskoski Brewery',
              brewery_slug: 'mallaskoski-brewery',
              brewery_page_url: '/MallaskoskiBrewery',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-9339_2ecb4.jpeg',
              country_name: 'Finland',
              contact: {
                twitter: '',
                facebook: 'http://www.facebook.com/pages/Kuohu/93921682419',
                instagram: '',
                url: 'http://www.mallaskoski.fi',
              },
              location: {
                brewery_city: 'Seinäjoki',
                brewery_state: 'Länsi-Suomi',
                lat: 62.7817,
                lng: 22.8362,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
              },
              is_verified: false,
            },
            comments: {
              total_count: 0,
              count: 0,
              items: [],
            },
            toasts: {
              total_count: 1,
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
              count: 0,
              items: [],
            },
          },
          {
            checkin_id: 913126753,
            created_at: 'Fri, 03 Jul 2020 14:45:29 +0000',
            rating_score: 4,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 3214308,
              beer_name: 'Hanssens Oudbeitje (2018)',
              beer_abv: 6,
              beer_label:
                'https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png',
              beer_slug: 'hanssens-artisanaal-hanssens-oudbeitje-2018',
              beer_style: 'Lambic - Fruit',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 630,
              brewery_name: 'Hanssens Artisanaal',
              brewery_slug: 'hanssens-artisanaal',
              brewery_page_url: '/w/hanssens-artisanaal/630',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-630_188d2.jpeg',
              country_name: 'Belgium',
              contact: {
                twitter: '',
                facebook:
                  'https://www.facebook.com/pages/Geuze-Hanssens-Artisanaal/53662941860',
                instagram: '',
                url:
                  'http://users.belgacom.net/gc762821/NL/brouwers/hanssens/hanssens.htm',
              },
              location: {
                brewery_city: 'Dworp',
                brewery_state: 'Vlaanderen',
                lat: 50.7288,
                lng: 4.29719,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
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
                  photo_id: 302415363,
                  photo: {
                    photo_img_sm:
                      'https://untappd.akamaized.net/photos/2020_07_03/2650b3b0cbaf09c205bcd8b31d09a6c0_200x200.jpg',
                    photo_img_md:
                      'https://untappd.akamaized.net/photos/2020_07_03/2650b3b0cbaf09c205bcd8b31d09a6c0_640x640.jpg',
                    photo_img_lg:
                      'https://untappd.akamaized.net/photos/2020_07_03/2650b3b0cbaf09c205bcd8b31d09a6c0_1280x1280.jpg',
                    photo_img_og:
                      'https://untappd.akamaized.net/photos/2020_07_03/2650b3b0cbaf09c205bcd8b31d09a6c0_raw.jpg',
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
              count: 2,
              items: [
                {
                  badge_id: 3790,
                  user_badge_id: 693615450,
                  badge_name: 'Bar Explorer (Level 8)',
                  badge_description:
                    "Your quest to quench your thirst leaves no stone unturned! That's at least 40 distinct venues!",
                  created_at: 'Fri, 03 Jul 2020 14:45:30 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_goingPlaces_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_goingPlaces_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_goingPlaces_lg.jpg',
                  },
                },
                {
                  badge_id: 2209,
                  user_badge_id: 693615451,
                  badge_name: 'Pucker Up (Level 23)',
                  badge_description:
                    "Right about now you’re feeling your face tighten and your taste buds explode. The full pucker is quickly setting in and you can’t get enough. This is the wonder of the sour. That's 115 different Sour Beers. Try 5 more for Level 24.",
                  created_at: 'Fri, 03 Jul 2020 14:45:30 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_SourBrew_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_SourBrew_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_SourBrew_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 912872455,
            created_at: 'Thu, 02 Jul 2020 20:54:50 +0000',
            rating_score: 3.25,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 6284,
              beer_name: 'Pale Ale',
              beer_abv: 5.6,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-6284_5418f_sm.jpeg',
              beer_slug: 'sierra-nevada-brewing-co-pale-ale',
              beer_style: 'Pale Ale - American',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 1142,
              brewery_name: 'Sierra Nevada Brewing Co.',
              brewery_slug: 'sierra-nevada-brewing-co',
              brewery_page_url: '/SierraNevada',
              brewery_type: 'Regional Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-1142_ddcfe.jpeg',
              country_name: 'United States',
              contact: {
                twitter: 'SierraNevada',
                facebook: 'http://www.facebook.com/sierranevadabeer',
                instagram: 'sierranevada',
                url: 'http://www.sierranevada.com/',
              },
              location: {
                brewery_city: 'Chico',
                brewery_state: 'CA',
                lat: 39.7242,
                lng: -121.815,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
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
              app_name: 'Untappd for iPhone - (V2)',
              app_website: 'http://untpd.it/iphoneapp',
            },
            badges: {
              retro_status: false,
              count: 1,
              items: [
                {
                  badge_id: 397498,
                  user_badge_id: 693290631,
                  badge_name: 'Drinking Socially (2020) (Level 2)',
                  badge_description:
                    'Congrats from Drinking Socially!  Listen to the official Untappd Podcast to hear Jon and Harrison talk about beer, brewing, Untappd and more. Check-in beers along with them to level up! <a href="http://untp.beer/DSBadge" rel="link-out">Check out the podcast today</a>!',
                  created_at: 'Thu, 02 Jul 2020 20:54:51 +0000',
                  badge_image: {
                    sm: 'https://untappd.akamaized.net/badges/bdg_utp_sm.jpg',
                    md: 'https://untappd.akamaized.net/badges/bdg_utp_md.jpg',
                    lg: 'https://untappd.akamaized.net/badges/bdg_utp_lg.jpg',
                  },
                },
              ],
            },
          },
          {
            checkin_id: 912857400,
            created_at: 'Thu, 02 Jul 2020 20:25:54 +0000',
            rating_score: 3.5,
            checkin_comment: '',
            user: makeVenueInfoUser(),
            beer: {
              bid: 366526,
              beer_name: "Bloody 'Ell",
              beer_abv: 5.5,
              beer_label:
                'https://untappd.akamaized.net/site/beer_logos/beer-366526_5b208_sm.jpeg',
              beer_slug: 'beavertown-bloody-ell',
              beer_style: 'IPA - American',
              beer_active: 1,
              has_had: false,
            },
            brewery: {
              brewery_id: 24735,
              brewery_name: 'Beavertown',
              brewery_slug: 'beavertown',
              brewery_page_url: '/BeavertownBeer',
              brewery_type: 'Micro Brewery',
              brewery_label:
                'https://untappd.akamaized.net/site/brewery_logos/brewery-24735_98b0c.jpeg',
              country_name: 'England',
              contact: {
                twitter: 'BeavertownBeer',
                facebook:
                  'http://www.facebook.com/pages/Beavertown-Brewery/236784039691522',
                instagram: 'beavertownbeer',
                url: 'http://www.beavertownbrewery.co.uk',
              },
              location: {
                brewery_city: 'Tottenham Hale',
                brewery_state: 'London',
                lat: 51.5908,
                lng: -0.0571249,
              },
              brewery_active: 1,
            },
            venue: {
              venue_id: utId,
              venue_name: 'Kaunis Kampela',
              venue_slug: 'kaunis-kampela',
              primary_category_key: 'Nightlife Spot',
              primary_category: 'Nightlife Spot',
              parent_category_id: '4d4b7105d754a06376d81259',
              categories: {
                count: 2,
                items: [
                  {
                    category_key: 'beer_bar',
                    category_name: 'Beer Bar',
                    category_id: '56aa371ce4b08b9a8d57356c',
                    is_primary: true,
                  },
                  {
                    category_key: 'whisky_bar',
                    category_name: 'Whisky Bar',
                    category_id: '4bf58dd8d48988d122941735',
                    is_primary: false,
                  },
                ],
              },
              location: {
                venue_address: 'Lauttasaarentie 10',
                venue_city: 'Helsinki',
                venue_state: '',
                venue_country: 'Suomi',
                lat: 60.1609,
                lng: 24.889,
              },
              contact: {
                twitter: '',
                venue_url: 'https://kalaravintolat.fi/ravintola/kaunis-kampela/',
              },
              foursquare: {
                foursquare_id: '4adcdb21f964a520ff5f21e3',
                foursquare_url: 'http://4sq.com/99MR7j',
              },
              venue_icon: {
                sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
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
              app_name: 'Untappd for iPhone - (V2)',
              app_website: 'http://untpd.it/iphoneapp',
            },
            badges: {
              count: 0,
              items: [],
            },
          },
        ],
      },
    },
  }
}
