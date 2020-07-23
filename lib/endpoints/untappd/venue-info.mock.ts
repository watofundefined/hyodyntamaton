import { rest } from 'msw'
import { url } from './venue-info'
import { UtVenueInfoResponse } from './venue-info.types'

export default rest.get(url + ':id', (req, res, ctx) => {
  const { id } = req.params
  return res(ctx.status(200), ctx.json(getMockedData(+id)))
})

function getMockedData(id: number): UtVenueInfoResponse {
  return {
    meta: {
      code: 200,
      response_time: {
        time: 0.366,
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
      venue: {
        venue_id: id,
        venue_name: "St. Urho's Pub",
        venue_slug: 'st-urho-s-pub',
        last_updated: 'Sun, 19 Jul 2020 12:06:06 +0000',
        primary_category: 'Nightlife Spot',
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
              category_key: 'nightclub',
              category_name: 'Nightclub',
              category_id: '4bf58dd8d48988d11f941735',
              is_primary: false,
            },
          ],
        },
        stats: {
          total_count: 6529,
          user_count: 0,
          total_user_count: 1604,
          monthly_count: 14,
          weekly_count: 0,
        },
        venue_icon: {
          sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
          md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
          lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
        },
        public_venue: true,
        location: {
          venue_address: 'Museokatu 10',
          venue_city: 'Helsinki',
          venue_state: 'Uusimaa',
          venue_country: 'Suomi',
          lat: 60.174,
          lng: 24.9315,
        },
        contact: {
          twitter: '',
          venue_url: 'http://www.urhospub.fi',
          facebook: '',
          yelp: 'st-urhos-helsinki',
        },
        foursquare: {
          foursquare_id: '4adcdb20f964a520cf5f21e3',
          foursquare_url: 'http://4sq.com/9vsroX',
        },
        media: {
          count: 10,
          items: [
            {
              photo_id: 305596890,
              photo: {
                photo_img_sm:
                  'https://untappd.akamaized.net/photos/2020_07_18/ff6b1438cadcab5136cbf88e3b559eea_200x200.jpg',
                photo_img_md:
                  'https://untappd.akamaized.net/photos/2020_07_18/ff6b1438cadcab5136cbf88e3b559eea_640x640.jpg',
                photo_img_lg:
                  'https://untappd.akamaized.net/photos/2020_07_18/ff6b1438cadcab5136cbf88e3b559eea_1280x1280.jpg',
                photo_img_og:
                  'https://untappd.akamaized.net/photos/2020_07_18/ff6b1438cadcab5136cbf88e3b559eea_raw.jpg',
              },
              created_at: 'Sat, 18 Jul 2020 19:42:54 +0000',
              checkin_id: 919392507,
              checkin_comment: null,
              beer: {
                bid: 421,
                beer_name: 'Twisted Thistle IPA',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-421_f71ef_sm.jpeg',
                beer_abv: 5.6,
                beer_ibu: 45,
                beer_slug: 'belhaven-brewery-twisted-thistle-ipa',
                beer_description:
                  "MALTS: 100% Scottish Pale and Crystal\nHOPS: Challenger, Cascade and Hersbrucker. A stunning India Pale Ale (IPA), don't think that Belhaven's Twisted Thistle has anything jaggy, spikey, prickly or otherwise pain-inflicting in its nature. Quite the opposite. Your taste buds will tingle with pleasure after a sip or two of this golden nectar. A real treat from our master brewers in Dunbar. ",
                is_in_production: 1,
                beer_style_id: 260,
                beer_style: 'IPA - International',
                rating_score: 3.411,
                rating_count: 81726,
                count: 81726,
                beer_active: 1,
                on_list: false,
                has_had: false,
              },
              brewery: {
                brewery_id: 98,
                brewery_name: 'Belhaven Brewery',
                brewery_slug: 'belhaven-brewery',
                brewery_page_url: '/BelhavenBrewery',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-BelhavenBrewery_98.jpeg',
                country_name: 'Scotland',
                contact: {
                  twitter: 'BelhavenBrews',
                  facebook: 'https://www.facebook.com/belhavenbrews',
                  url: 'http://www.belhaven.co.uk',
                },
                location: {
                  brewery_city: 'Dunbar',
                  brewery_state: 'East Lothian',
                  lat: 55.9933,
                  lng: -2.50964,
                },
                brewery_active: 1,
              },
              user: {
                uid: 12345,
                user_name: 'username1',
                first_name: 'User',
                last_name: 'B',
                user_avatar: 'https://picsum.photos/100/100',
                is_private: 0,
              },
              venue: {
                venue_id: id,
                venue_name: "St. Urho's Pub",
                venue_slug: 'st-urho-s-pub',
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
                      category_key: 'nightclub',
                      category_name: 'Nightclub',
                      category_id: '4bf58dd8d48988d11f941735',
                      is_primary: false,
                    },
                  ],
                },
                location: {
                  venue_address: 'Museokatu 10',
                  venue_city: 'Helsinki',
                  venue_state: 'Uusimaa',
                  venue_country: 'Suomi',
                  lat: 60.174,
                  lng: 24.9315,
                },
                contact: {
                  twitter: '',
                  venue_url: 'http://www.urhospub.fi',
                },
                foursquare: {
                  foursquare_id: '4adcdb20f964a520cf5f21e3',
                  foursquare_url: 'http://4sq.com/9vsroX',
                },
                venue_icon: {
                  sm: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_64.png',
                  md: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_88.png',
                  lg: 'https://ss3.4sqi.net/img/categories_v2/nightlife/pub_bg_512.png',
                },
                is_verified: false,
              },
            },
          ],
        },
        checkins: {
          count: 1,
          items: [
            {
              checkin_id: 919392507,
              created_at: 'Sat, 18 Jul 2020 19:42:37 +0000',
              rating_score: 3.5,
              checkin_comment: '',
              user: {
                uid: 12345,
                user_name: 'username1',
                first_name: 'User',
                last_name: 'B',
                relationship: 'none',
                is_supporter: 0,
                user_avatar: 'https://picsum.photos/100/100',
                is_private: 0,
              },
              beer: {
                bid: 421,
                beer_name: 'Twisted Thistle IPA',
                beer_abv: 5.6,
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-421_f71ef_sm.jpeg',
                beer_slug: 'belhaven-brewery-twisted-thistle-ipa',
                beer_style: 'IPA - International',
                beer_active: 1,
                has_had: false,
              },
              brewery: {
                brewery_id: 98,
                brewery_name: 'Belhaven Brewery',
                brewery_slug: 'belhaven-brewery',
                brewery_page_url: '/BelhavenBrewery',
                brewery_type: 'Micro Brewery',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-BelhavenBrewery_98.jpeg',
                country_name: 'Scotland',
                contact: {
                  twitter: 'BelhavenBrews',
                  facebook: 'https://www.facebook.com/belhavenbrews',
                  instagram: 'belhavenbrews',
                  url: 'http://www.belhaven.co.uk',
                },
                location: {
                  brewery_city: 'Dunbar',
                  brewery_state: 'East Lothian',
                  lat: 55.9933,
                  lng: -2.50964,
                },
                brewery_active: 1,
              },
              venue: {
                venue_id: id,
                venue_name: "St. Urho's Pub",
                venue_slug: 'st-urho-s-pub',
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
                      category_key: 'nightclub',
                      category_name: 'Nightclub',
                      category_id: '4bf58dd8d48988d11f941735',
                      is_primary: false,
                    },
                  ],
                },
                location: {
                  venue_address: 'Museokatu 10',
                  venue_city: 'Helsinki',
                  venue_state: 'Uusimaa',
                  venue_country: 'Suomi',
                  lat: 60.174,
                  lng: 24.9315,
                },
                contact: {
                  twitter: '',
                  venue_url: 'http://www.urhospub.fi',
                },
                foursquare: {
                  foursquare_id: '4adcdb20f964a520cf5f21e3',
                  foursquare_url: 'http://4sq.com/9vsroX',
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
                items: [
                  {
                    uid: 12345,
                    user: {
                      uid: 12345,
                      user_name: 'username1',
                      first_name: 'User',
                      last_name: 'B',
                      bio: '',
                      location: '',
                      relationship: 'none',
                      user_avatar: 'https://picsum.photos/100/100',
                      account_type: 'user',
                      venue_details: [],
                      brewery_details: [],
                    },
                    like_id: 12345,
                    like_owner: false,
                    created_at: 'Sun, 19 Jul 2020 12:53:58 +0000',
                  },
                ],
              },
              media: {
                count: 1,
                items: [
                  {
                    photo_id: 305596890,
                    photo: {
                      photo_img_sm:
                        'https://untappd.akamaized.net/photos/2020_07_18/ff6b1438cadcab5136cbf88e3b559eea_200x200.jpg',
                      photo_img_md:
                        'https://untappd.akamaized.net/photos/2020_07_18/ff6b1438cadcab5136cbf88e3b559eea_640x640.jpg',
                      photo_img_lg:
                        'https://untappd.akamaized.net/photos/2020_07_18/ff6b1438cadcab5136cbf88e3b559eea_1280x1280.jpg',
                      photo_img_og:
                        'https://untappd.akamaized.net/photos/2020_07_18/ff6b1438cadcab5136cbf88e3b559eea_raw.jpg',
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
                    badge_id: 133175,
                    user_badge_id: 701243929,
                    badge_name: '99 Bottles (Level 22)',
                    badge_description:
                      "99 bottles of beer on the wall, 99 bottles of beer. Take one down, pass it around.... That's 110 checkins with the serving style of Bottle. Try 5 more for Level 23!",
                    created_at: 'Sat, 18 Jul 2020 19:42:37 +0000',
                    badge_image: {
                      sm: 'https://untappd.akamaized.net/badges/bdg_99Bottles_sm.jpg',
                      md: 'https://untappd.akamaized.net/badges/bdg_99Bottles_md.jpg',
                      lg: 'https://untappd.akamaized.net/badges/bdg_99Bottles_lg.jpg',
                    },
                  },
                ],
              },
            },
          ],
          pagination: {
            since_url: 'https://api.untappd.com/v4/venue/checkins/33225?max_id=913868278',
            next_url: 'https://api.untappd.com/v4/venue/checkins/33225?max_id=913868278',
            max_id: 913868278,
          },
        },
        top_beers: {
          offset: 0,
          limit: 3,
          count: 3,
          items: [
            {
              created_at: 'Sat, 18 Jul 2020 19:27:40 +0000',
              total_count: 2,
              your_count: 0,
              beer: {
                bid: 3769329,
                beer_name: 'You’ve  Been Mango’d',
                beer_label:
                  'https://untappd.akamaized.net/site/assets/images/temp/badge-beer-default.png',
                beer_abv: 4.8,
                beer_ibu: 0,
                beer_slug: 'blacks-brewery-youu-ve-been-mango-d',
                beer_description: 'Mango IPA\r\n',
                is_in_production: 1,
                beer_style_id: 128,
                beer_style: 'IPA - American',
                rating_score: 3.217,
                rating_count: 70,
                count: 70,
                beer_active: 1,
                on_list: false,
                has_had: false,
              },
              brewery: {
                brewery_id: 80406,
                brewery_name: 'Blacks Brewery',
                brewery_slug: 'blacks-brewery',
                brewery_page_url: '/BlacksBrewery',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-80406_bf527.jpeg',
                country_name: 'Ireland',
                contact: {
                  twitter: 'blacksbrewery',
                  facebook: 'http://www.facebook.com/BlacksOfKinsale/',
                  url: 'http://www.blacksbrewery.com',
                },
                location: {
                  brewery_city: 'Kinsale',
                  brewery_state: 'Munster',
                  lat: 51.7131,
                  lng: -8.51533,
                },
                brewery_active: 1,
              },
              friends: {
                count: 0,
                items: [],
              },
            },
          ],
        },
        brewery_locations: {
          count: 0,
          items: [],
        },
        is_verified: false,
        is_closed: false,
      },
    },
  }
}
