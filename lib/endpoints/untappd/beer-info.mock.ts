import { rest } from 'msw'
import { url } from './beer-info'
import { UtBeerInfoResponse } from './beer-info.types'
import { makeBeerInfoToastUser, makeMediaUser, makeCheckinUser } from './mock-helpers'

export default rest.get(url + ':bid', (req, res, ctx) => {
  const { bid } = req.params
  return res(ctx.status(200), ctx.json(getMockedData(bid)))
})

function getMockedData(id: number): UtBeerInfoResponse {
  return {
    meta: {
      code: 200,
      response_time: {
        time: 0.218,
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
      beer: {
        bid: id,
        beer_name: 'Ma Mère Spéciale',
        beer_label:
          'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
        beer_label_hd: '',
        beer_abv: 6,
        beer_ibu: 72,
        beer_description: '',
        beer_style: 'Pale Ale - Belgian',
        is_in_production: 1,
        beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
        is_homebrew: 0,
        created_at: 'Tue, 25 Oct 2011 20:38:33 +0000',
        rating_count: 2460,
        rating_score: 3.22596,
        stats: {
          total_count: 2806,
          monthly_count: 26,
          total_user_count: 2678,
          user_count: 0,
        },
        brewery: {
          brewery_id: 9601,
          brewery_name: 'Brouwerij De Leite',
          brewery_slug: 'brouwerij-de-leite',
          brewery_type: 'Micro Brewery',
          brewery_page_url: '/w/brouwerij-de-leite/9601',
          brewery_label:
            'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
          country_name: 'Belgium',
          contact: {
            twitter: '',
            facebook: 'https://www.facebook.com/brouwerijdeleite/',
            url: 'http://www.deleite.be',
          },
          location: {
            brewery_city: 'Ruddervoorde',
            brewery_state: 'Vlaanderen',
            lat: 51.1016,
            lng: 3.22063,
          },
        },
        auth_rating: 0,
        wish_list: false,
        media: {
          count: 10,
          items: [
            {
              photo_id: 307518621,
              photo: {
                photo_img_sm:
                  'https://untappd.akamaized.net/photos/2020_07_27/eb19b74c91c13b61bda60e92ad7730c8_200x200.jpg',
                photo_img_md:
                  'https://untappd.akamaized.net/photos/2020_07_27/eb19b74c91c13b61bda60e92ad7730c8_640x640.jpg',
                photo_img_lg:
                  'https://untappd.akamaized.net/photos/2020_07_27/eb19b74c91c13b61bda60e92ad7730c8_1280x1280.jpg',
                photo_img_og:
                  'https://untappd.akamaized.net/photos/2020_07_27/eb19b74c91c13b61bda60e92ad7730c8_raw.jpg',
              },
              created_at: 'Mon, 27 Jul 2020 21:57:46 +0000',
              checkin_id: 923172292,
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                is_in_production: 1,
                beer_style_id: 9,
                beer_style: 'Pale Ale - Belgian',
                rating_score: 3.226,
                rating_count: 2460,
                count: 2460,
                beer_active: 1,
                on_list: false,
                has_had: false,
                auth_rating: 0,
                wish_list: false,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              user: makeMediaUser(),
              venue: [
                {
                  venue_id: 5099443,
                  venue_name: 'Rognstranda Camping',
                  venue_slug: 'rognstranda-camping',
                  primary_category: 'Travel & Transport',
                  parent_category_id: '4d4b7105d754a06379d81259',
                  categories: {
                    count: 1,
                    items: [
                      {
                        category_key: 'rv_park',
                        category_name: 'RV Park',
                        category_id: '52f2ab2ebcbc57f1066b8b53',
                        is_primary: true,
                      },
                    ],
                  },
                  location: {
                    venue_address: 'Rognstranda 145',
                    venue_city: 'Stathelle',
                    venue_state: 'Telemark',
                    lat: 59.0088,
                    lng: 9.70278,
                  },
                  contact: {
                    twitter: '',
                    venue_url: '',
                  },
                  foursquare: {
                    foursquare_id: '55d0b468498e3e16618ec0c7',
                    foursquare_url: 'http://4sq.com/1IVQTED',
                  },
                  venue_icon: {
                    sm:
                      'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/default_bg_64.png',
                    md:
                      'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/default_bg_88.png',
                    lg:
                      'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/default_bg_512.png',
                  },
                  is_verified: 0,
                },
              ],
            },
            {
              photo_id: 307496058,
              photo: {
                photo_img_sm:
                  'https://untappd.akamaized.net/photos/2020_07_27/35339d081ef12496f901bda8f8b443d7_200x200.jpg',
                photo_img_md:
                  'https://untappd.akamaized.net/photos/2020_07_27/35339d081ef12496f901bda8f8b443d7_640x640.jpg',
                photo_img_lg:
                  'https://untappd.akamaized.net/photos/2020_07_27/35339d081ef12496f901bda8f8b443d7_1280x1280.jpg',
                photo_img_og:
                  'https://untappd.akamaized.net/photos/2020_07_27/35339d081ef12496f901bda8f8b443d7_raw.jpg',
              },
              created_at: 'Mon, 27 Jul 2020 19:48:39 +0000',
              checkin_id: 923129391,
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                is_in_production: 1,
                beer_style_id: 9,
                beer_style: 'Pale Ale - Belgian',
                rating_score: 3.226,
                rating_count: 2460,
                count: 2460,
                beer_active: 1,
                on_list: false,
                has_had: false,
                auth_rating: 0,
                wish_list: false,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              user: makeMediaUser(),
              venue: [
                {
                  venue_id: 9917985,
                  venue_name: 'Untappd at Home',
                  venue_slug: 'untappd-at-home',
                  primary_category: 'Residence',
                  parent_category_id: '4e67e38e036454776db1fb3a',
                  categories: {
                    count: 1,
                    items: [
                      {
                        category_key: 'home_private',
                        category_name: 'Home (private)',
                        category_id: '4bf58dd8d48988d103941735',
                        is_primary: true,
                      },
                    ],
                  },
                  location: {
                    venue_address: '',
                    venue_city: '',
                    venue_state: 'Everywhere',
                    lat: 34.2347,
                    lng: -77.9482,
                  },
                  contact: {
                    twitter: '',
                    venue_url: '',
                  },
                  foursquare: {
                    foursquare_id: '5e7b4d99c91df60008e8b168',
                    foursquare_url: 'https://4sq.com/3bDWYuq',
                  },
                  venue_icon: {
                    sm:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_64.png',
                    md:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_88.png',
                    lg:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_176.png?v=1',
                  },
                  is_verified: 1,
                },
              ],
            },
            {
              photo_id: 307224578,
              photo: {
                photo_img_sm:
                  'https://untappd.akamaized.net/photos/2020_07_26/0091b922c48bd5ffe64209ae1cc124b7_200x200.jpg',
                photo_img_md:
                  'https://untappd.akamaized.net/photos/2020_07_26/0091b922c48bd5ffe64209ae1cc124b7_640x640.jpg',
                photo_img_lg:
                  'https://untappd.akamaized.net/photos/2020_07_26/0091b922c48bd5ffe64209ae1cc124b7_1280x1280.jpg',
                photo_img_og:
                  'https://untappd.akamaized.net/photos/2020_07_26/0091b922c48bd5ffe64209ae1cc124b7_raw.jpg',
              },
              created_at: 'Sun, 26 Jul 2020 10:49:19 +0000',
              checkin_id: 922611977,
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                is_in_production: 1,
                beer_style_id: 9,
                beer_style: 'Pale Ale - Belgian',
                rating_score: 3.226,
                rating_count: 2460,
                count: 2460,
                beer_active: 1,
                on_list: false,
                has_had: false,
                auth_rating: 0,
                wish_list: false,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              user: makeMediaUser(),
              venue: [[]],
            },
            {
              photo_id: 307029494,
              photo: {
                photo_img_sm:
                  'https://untappd.akamaized.net/photos/2020_07_25/6ab5fc5a260e3ec1ab799a27069737b8_200x200.jpg',
                photo_img_md:
                  'https://untappd.akamaized.net/photos/2020_07_25/6ab5fc5a260e3ec1ab799a27069737b8_640x640.jpg',
                photo_img_lg:
                  'https://untappd.akamaized.net/photos/2020_07_25/6ab5fc5a260e3ec1ab799a27069737b8_1280x1280.jpg',
                photo_img_og:
                  'https://untappd.akamaized.net/photos/2020_07_25/6ab5fc5a260e3ec1ab799a27069737b8_raw.jpg',
              },
              created_at: 'Sat, 25 Jul 2020 19:07:11 +0000',
              checkin_id: 922194113,
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                is_in_production: 1,
                beer_style_id: 9,
                beer_style: 'Pale Ale - Belgian',
                rating_score: 3.226,
                rating_count: 2460,
                count: 2460,
                beer_active: 1,
                on_list: false,
                has_had: false,
                auth_rating: 0,
                wish_list: false,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              user: makeMediaUser(),
              venue: [
                {
                  venue_id: 9917985,
                  venue_name: 'Untappd at Home',
                  venue_slug: 'untappd-at-home',
                  primary_category: 'Residence',
                  parent_category_id: '4e67e38e036454776db1fb3a',
                  categories: {
                    count: 1,
                    items: [
                      {
                        category_key: 'home_private',
                        category_name: 'Home (private)',
                        category_id: '4bf58dd8d48988d103941735',
                        is_primary: true,
                      },
                    ],
                  },
                  location: {
                    venue_address: '',
                    venue_city: '',
                    venue_state: 'Everywhere',
                    lat: 34.2347,
                    lng: -77.9482,
                  },
                  contact: {
                    twitter: '',
                    venue_url: '',
                  },
                  foursquare: {
                    foursquare_id: '5e7b4d99c91df60008e8b168',
                    foursquare_url: 'https://4sq.com/3bDWYuq',
                  },
                  venue_icon: {
                    sm:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_64.png',
                    md:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_88.png',
                    lg:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_176.png?v=1',
                  },
                  is_verified: 1,
                },
              ],
            },
            {
              photo_id: 306193191,
              photo: {
                photo_img_sm:
                  'https://untappd.akamaized.net/photos/2020_07_21/f14ce9461658c988eee5f796bd8295cf_200x200.jpg',
                photo_img_md:
                  'https://untappd.akamaized.net/photos/2020_07_21/f14ce9461658c988eee5f796bd8295cf_640x640.jpg',
                photo_img_lg:
                  'https://untappd.akamaized.net/photos/2020_07_21/f14ce9461658c988eee5f796bd8295cf_1280x1280.jpg',
                photo_img_og:
                  'https://untappd.akamaized.net/photos/2020_07_21/f14ce9461658c988eee5f796bd8295cf_raw.jpg',
              },
              created_at: 'Tue, 21 Jul 2020 21:17:41 +0000',
              checkin_id: 920583863,
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                is_in_production: 1,
                beer_style_id: 9,
                beer_style: 'Pale Ale - Belgian',
                rating_score: 3.226,
                rating_count: 2460,
                count: 2460,
                beer_active: 1,
                on_list: false,
                has_had: false,
                auth_rating: 0,
                wish_list: false,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              user: makeMediaUser(),
              venue: [[]],
            },
            {
              photo_id: 306161614,
              photo: {
                photo_img_sm:
                  'https://untappd.akamaized.net/photos/2020_07_21/b6ef11879f076d5653a9574ddf100ee0_200x200.jpg',
                photo_img_md:
                  'https://untappd.akamaized.net/photos/2020_07_21/b6ef11879f076d5653a9574ddf100ee0_640x640.jpg',
                photo_img_lg:
                  'https://untappd.akamaized.net/photos/2020_07_21/b6ef11879f076d5653a9574ddf100ee0_1280x1280.jpg',
                photo_img_og:
                  'https://untappd.akamaized.net/photos/2020_07_21/b6ef11879f076d5653a9574ddf100ee0_raw.jpg',
              },
              created_at: 'Tue, 21 Jul 2020 18:47:58 +0000',
              checkin_id: 920526681,
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                is_in_production: 1,
                beer_style_id: 9,
                beer_style: 'Pale Ale - Belgian',
                rating_score: 3.226,
                rating_count: 2460,
                count: 2460,
                beer_active: 1,
                on_list: false,
                has_had: false,
                auth_rating: 0,
                wish_list: false,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              user: makeMediaUser(),
              venue: [
                {
                  venue_id: 8483070,
                  venue_name: 'Relst',
                  venue_slug: 'relst',
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
                    venue_city: 'Kampenhout',
                    venue_state: 'Vlaams-Brabant',
                    lat: 50.9463,
                    lng: 4.58263,
                  },
                  contact: {
                    twitter: '',
                    venue_url: '',
                  },
                  foursquare: {
                    foursquare_id: '4ff95f97e4b054fbab58144d',
                    foursquare_url: 'http://4sq.com/NaKryB',
                  },
                  venue_icon: {
                    sm:
                      'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_64.png',
                    md:
                      'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_88.png',
                    lg:
                      'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/neighborhood_bg_512.png',
                  },
                  is_verified: 0,
                },
              ],
            },
            {
              photo_id: 306037330,
              photo: {
                photo_img_sm:
                  'https://untappd.akamaized.net/photos/2020_07_20/064970be2152e78f2392a23a9224baac_200x200.jpg',
                photo_img_md:
                  'https://untappd.akamaized.net/photos/2020_07_20/064970be2152e78f2392a23a9224baac_640x640.jpg',
                photo_img_lg:
                  'https://untappd.akamaized.net/photos/2020_07_20/064970be2152e78f2392a23a9224baac_1280x1280.jpg',
                photo_img_og:
                  'https://untappd.akamaized.net/photos/2020_07_20/064970be2152e78f2392a23a9224baac_raw.jpg',
              },
              created_at: 'Mon, 20 Jul 2020 19:41:10 +0000',
              checkin_id: 920276050,
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                is_in_production: 1,
                beer_style_id: 9,
                beer_style: 'Pale Ale - Belgian',
                rating_score: 3.226,
                rating_count: 2460,
                count: 2460,
                beer_active: 1,
                on_list: false,
                has_had: false,
                auth_rating: 0,
                wish_list: false,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              user: makeMediaUser(),
              venue: [
                {
                  venue_id: 9917985,
                  venue_name: 'Untappd at Home',
                  venue_slug: 'untappd-at-home',
                  primary_category: 'Residence',
                  parent_category_id: '4e67e38e036454776db1fb3a',
                  categories: {
                    count: 1,
                    items: [
                      {
                        category_key: 'home_private',
                        category_name: 'Home (private)',
                        category_id: '4bf58dd8d48988d103941735',
                        is_primary: true,
                      },
                    ],
                  },
                  location: {
                    venue_address: '',
                    venue_city: '',
                    venue_state: 'Everywhere',
                    lat: 34.2347,
                    lng: -77.9482,
                  },
                  contact: {
                    twitter: '',
                    venue_url: '',
                  },
                  foursquare: {
                    foursquare_id: '5e7b4d99c91df60008e8b168',
                    foursquare_url: 'https://4sq.com/3bDWYuq',
                  },
                  venue_icon: {
                    sm:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_64.png',
                    md:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_88.png',
                    lg:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_176.png?v=1',
                  },
                  is_verified: 1,
                },
              ],
            },
            {
              photo_id: 306035936,
              photo: {
                photo_img_sm:
                  'https://untappd.akamaized.net/photos/2020_07_20/7af3ae19ed27abe7936116d37707e8f9_200x200.jpg',
                photo_img_md:
                  'https://untappd.akamaized.net/photos/2020_07_20/7af3ae19ed27abe7936116d37707e8f9_640x640.jpg',
                photo_img_lg:
                  'https://untappd.akamaized.net/photos/2020_07_20/7af3ae19ed27abe7936116d37707e8f9_1280x1280.jpg',
                photo_img_og:
                  'https://untappd.akamaized.net/photos/2020_07_20/7af3ae19ed27abe7936116d37707e8f9_raw.jpg',
              },
              created_at: 'Mon, 20 Jul 2020 19:34:55 +0000',
              checkin_id: 920273750,
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                is_in_production: 1,
                beer_style_id: 9,
                beer_style: 'Pale Ale - Belgian',
                rating_score: 3.226,
                rating_count: 2460,
                count: 2460,
                beer_active: 1,
                on_list: false,
                has_had: false,
                auth_rating: 0,
                wish_list: false,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              user: makeMediaUser(),
              venue: [
                {
                  venue_id: 9917985,
                  venue_name: 'Untappd at Home',
                  venue_slug: 'untappd-at-home',
                  primary_category: 'Residence',
                  parent_category_id: '4e67e38e036454776db1fb3a',
                  categories: {
                    count: 1,
                    items: [
                      {
                        category_key: 'home_private',
                        category_name: 'Home (private)',
                        category_id: '4bf58dd8d48988d103941735',
                        is_primary: true,
                      },
                    ],
                  },
                  location: {
                    venue_address: '',
                    venue_city: '',
                    venue_state: 'Everywhere',
                    lat: 34.2347,
                    lng: -77.9482,
                  },
                  contact: {
                    twitter: '',
                    venue_url: '',
                  },
                  foursquare: {
                    foursquare_id: '5e7b4d99c91df60008e8b168',
                    foursquare_url: 'https://4sq.com/3bDWYuq',
                  },
                  venue_icon: {
                    sm:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_64.png',
                    md:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_88.png',
                    lg:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_176.png?v=1',
                  },
                  is_verified: 1,
                },
              ],
            },
            {
              photo_id: 305427938,
              photo: {
                photo_img_sm:
                  'https://untappd.akamaized.net/photos/2020_07_18/44452ae01e693541f70bd03009c7299e_200x200.jpg',
                photo_img_md:
                  'https://untappd.akamaized.net/photos/2020_07_18/44452ae01e693541f70bd03009c7299e_640x640.jpg',
                photo_img_lg:
                  'https://untappd.akamaized.net/photos/2020_07_18/44452ae01e693541f70bd03009c7299e_1280x1280.jpg',
                photo_img_og:
                  'https://untappd.akamaized.net/photos/2020_07_18/44452ae01e693541f70bd03009c7299e_raw.jpg',
              },
              created_at: 'Sat, 18 Jul 2020 07:08:49 +0000',
              checkin_id: 919082018,
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                is_in_production: 1,
                beer_style_id: 9,
                beer_style: 'Pale Ale - Belgian',
                rating_score: 3.226,
                rating_count: 2460,
                count: 2460,
                beer_active: 1,
                on_list: false,
                has_had: false,
                auth_rating: 0,
                wish_list: false,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              user: makeMediaUser(),
              venue: [
                {
                  venue_id: 9917985,
                  venue_name: 'Untappd at Home',
                  venue_slug: 'untappd-at-home',
                  primary_category: 'Residence',
                  parent_category_id: '4e67e38e036454776db1fb3a',
                  categories: {
                    count: 1,
                    items: [
                      {
                        category_key: 'home_private',
                        category_name: 'Home (private)',
                        category_id: '4bf58dd8d48988d103941735',
                        is_primary: true,
                      },
                    ],
                  },
                  location: {
                    venue_address: '',
                    venue_city: '',
                    venue_state: 'Everywhere',
                    lat: 34.2347,
                    lng: -77.9482,
                  },
                  contact: {
                    twitter: '',
                    venue_url: '',
                  },
                  foursquare: {
                    foursquare_id: '5e7b4d99c91df60008e8b168',
                    foursquare_url: 'https://4sq.com/3bDWYuq',
                  },
                  venue_icon: {
                    sm:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_64.png',
                    md:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_88.png',
                    lg:
                      'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_176.png?v=1',
                  },
                  is_verified: 1,
                },
              ],
            },
            {
              photo_id: 304897212,
              photo: {
                photo_img_sm:
                  'https://untappd.akamaized.net/photos/2020_07_15/1546daa52415b627ea40af09c8a1d61a_200x200.jpg',
                photo_img_md:
                  'https://untappd.akamaized.net/photos/2020_07_15/1546daa52415b627ea40af09c8a1d61a_640x640.jpg',
                photo_img_lg:
                  'https://untappd.akamaized.net/photos/2020_07_15/1546daa52415b627ea40af09c8a1d61a_1280x1280.jpg',
                photo_img_og:
                  'https://untappd.akamaized.net/photos/2020_07_15/1546daa52415b627ea40af09c8a1d61a_raw.jpg',
              },
              created_at: 'Wed, 15 Jul 2020 20:25:58 +0000',
              checkin_id: 918030638,
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                is_in_production: 1,
                beer_style_id: 9,
                beer_style: 'Pale Ale - Belgian',
                rating_score: 3.226,
                rating_count: 2460,
                count: 2460,
                beer_active: 1,
                on_list: false,
                has_had: false,
                auth_rating: 0,
                wish_list: false,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              user: makeMediaUser(),
              venue: [[]],
            },
          ],
        },
        checkins: {
          count: 15,
          items: [
            {
              checkin_id: 923172292,
              created_at: 'Mon, 27 Jul 2020 21:57:38 +0000',
              checkin_comment: '',
              rating_score: 3,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
                venue_id: 5099443,
                venue_name: 'Rognstranda Camping',
                venue_slug: 'rognstranda-camping',
                primary_category_key: 'Travel & Transport',
                primary_category: 'Travel & Transport',
                parent_category_id: '4d4b7105d754a06379d81259',
                categories: {
                  count: 1,
                  items: [
                    {
                      category_key: 'rv_park',
                      category_name: 'RV Park',
                      category_id: '52f2ab2ebcbc57f1066b8b53',
                      is_primary: true,
                    },
                  ],
                },
                location: {
                  venue_address: 'Rognstranda 145',
                  venue_city: 'Stathelle',
                  venue_state: 'Telemark',
                  venue_country: 'Norge',
                  lat: 59.0088,
                  lng: 9.70278,
                },
                contact: {
                  twitter: '',
                  venue_url: '',
                },
                foursquare: {
                  foursquare_id: '55d0b468498e3e16618ec0c7',
                  foursquare_url: 'http://4sq.com/1IVQTED',
                },
                venue_icon: {
                  sm:
                    'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/default_bg_64.png',
                  md:
                    'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/default_bg_88.png',
                  lg:
                    'https://ss3.4sqi.net/img/categories_v2/parks_outdoors/default_bg_512.png',
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
                    photo_id: 307518621,
                    photo: {
                      photo_img_sm:
                        'https://untappd.akamaized.net/photos/2020_07_27/eb19b74c91c13b61bda60e92ad7730c8_200x200.jpg',
                      photo_img_md:
                        'https://untappd.akamaized.net/photos/2020_07_27/eb19b74c91c13b61bda60e92ad7730c8_640x640.jpg',
                      photo_img_lg:
                        'https://untappd.akamaized.net/photos/2020_07_27/eb19b74c91c13b61bda60e92ad7730c8_1280x1280.jpg',
                      photo_img_og:
                        'https://untappd.akamaized.net/photos/2020_07_27/eb19b74c91c13b61bda60e92ad7730c8_raw.jpg',
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
              checkin_id: 923129391,
              created_at: 'Mon, 27 Jul 2020 19:48:31 +0000',
              checkin_comment: '',
              rating_score: 0,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
                venue_id: 9917985,
                venue_name: 'Untappd at Home',
                venue_slug: 'untappd-at-home',
                primary_category_key: 'Residence',
                primary_category: 'Residence',
                parent_category_id: '4e67e38e036454776db1fb3a',
                categories: {
                  count: 1,
                  items: [
                    {
                      category_key: 'home_private',
                      category_name: 'Home (private)',
                      category_id: '4bf58dd8d48988d103941735',
                      is_primary: true,
                    },
                  ],
                },
                location: {
                  venue_address: '',
                  venue_city: '',
                  venue_state: 'Everywhere',
                  venue_country: 'United States',
                  lat: 34.2347,
                  lng: -77.9482,
                },
                contact: {
                  twitter: '',
                  venue_url: '',
                },
                foursquare: {
                  foursquare_id: '5e7b4d99c91df60008e8b168',
                  foursquare_url: 'https://4sq.com/3bDWYuq',
                },
                venue_icon: {
                  sm:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_64.png',
                  md:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_88.png',
                  lg:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_176.png?v=1',
                },
                is_verified: true,
              },
              comments: {
                total_count: 0,
                count: 0,
                items: [],
              },
              toasts: {
                total_count: 5,
                count: 5,
                auth_toast: false,
                items: [],
              },
              media: {
                count: 1,
                items: [
                  {
                    photo_id: 307496058,
                    photo: {
                      photo_img_sm:
                        'https://untappd.akamaized.net/photos/2020_07_27/35339d081ef12496f901bda8f8b443d7_200x200.jpg',
                      photo_img_md:
                        'https://untappd.akamaized.net/photos/2020_07_27/35339d081ef12496f901bda8f8b443d7_640x640.jpg',
                      photo_img_lg:
                        'https://untappd.akamaized.net/photos/2020_07_27/35339d081ef12496f901bda8f8b443d7_1280x1280.jpg',
                      photo_img_og:
                        'https://untappd.akamaized.net/photos/2020_07_27/35339d081ef12496f901bda8f8b443d7_raw.jpg',
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
              checkin_id: 923032535,
              created_at: 'Mon, 27 Jul 2020 12:42:04 +0000',
              checkin_comment: '',
              rating_score: 0,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
                venue_id: 180323,
                venue_name: 'Janoinen Lohi',
                venue_slug: 'janoinen-lohi',
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
                  venue_address: 'Linnankoskenkatu 12',
                  venue_city: 'Helsinki',
                  venue_state: 'Uusimaa',
                  venue_country: 'Suomi',
                  lat: 60.185,
                  lng: 24.9169,
                },
                contact: {
                  twitter: '',
                  venue_url: 'http://www.kalaravintolat.fi/janoinenlohi',
                },
                foursquare: {
                  foursquare_id: '4adcdb21f964a520fa5f21e3',
                  foursquare_url: 'http://4sq.com/bUxSyU',
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
                app_name: 'Untappd for Android - (V2)',
                app_website: 'http://untpd.it/androidapp',
              },
              badges: {
                count: 0,
                items: [],
              },
            },
            {
              checkin_id: 922611977,
              created_at: 'Sun, 26 Jul 2020 10:49:04 +0000',
              checkin_comment: '',
              rating_score: 3,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              venue: [],
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
                    photo_id: 307224578,
                    photo: {
                      photo_img_sm:
                        'https://untappd.akamaized.net/photos/2020_07_26/0091b922c48bd5ffe64209ae1cc124b7_200x200.jpg',
                      photo_img_md:
                        'https://untappd.akamaized.net/photos/2020_07_26/0091b922c48bd5ffe64209ae1cc124b7_640x640.jpg',
                      photo_img_lg:
                        'https://untappd.akamaized.net/photos/2020_07_26/0091b922c48bd5ffe64209ae1cc124b7_1280x1280.jpg',
                      photo_img_og:
                        'https://untappd.akamaized.net/photos/2020_07_26/0091b922c48bd5ffe64209ae1cc124b7_raw.jpg',
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
                count: 2,
                items: [
                  {
                    badge_id: 34725,
                    user_badge_id: 704922238,
                    badge_name: 'Middle of the Road (Level 21)',
                    badge_description:
                      "Looking for more kick than a session beer, but want to be able to stay for a few rounds? You have to keep it in the middle. That's 105 beers with an ABV greater than 5% and less than 10%. Try 5 more for Level 22!",
                    created_at: 'Sun, 26 Jul 2020 10:49:04 +0000',
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
                    badge_id: 2250,
                    user_badge_id: 704922239,
                    badge_name: 'Belgian Holiday  (Level 24)',
                    badge_description:
                      "You obviously are a big fan of Belgian Beer, and rightfully so! Three cheers to the great Belgian beers and their uniquely crafted flavors!\r\n\r\nThat's 120 different beers from Belgium. Try 5 more for Level 25.",
                    created_at: 'Sun, 26 Jul 2020 10:49:04 +0000',
                    badge_image: {
                      sm:
                        'https://untappd.akamaized.net/badges/bdg_belgianHoliday_sm.jpg',
                      md:
                        'https://untappd.akamaized.net/badges/bdg_belgianHoliday_md.jpg',
                      lg:
                        'https://untappd.akamaized.net/badges/bdg_belgianHoliday_lg.jpg',
                    },
                  },
                ],
              },
            },
            {
              checkin_id: 922194113,
              created_at: 'Sat, 25 Jul 2020 19:07:03 +0000',
              checkin_comment: 'Human beer',
              rating_score: 2.5,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
                venue_id: 9917985,
                venue_name: 'Untappd at Home',
                venue_slug: 'untappd-at-home',
                primary_category_key: 'Residence',
                primary_category: 'Residence',
                parent_category_id: '4e67e38e036454776db1fb3a',
                categories: {
                  count: 1,
                  items: [
                    {
                      category_key: 'home_private',
                      category_name: 'Home (private)',
                      category_id: '4bf58dd8d48988d103941735',
                      is_primary: true,
                    },
                  ],
                },
                location: {
                  venue_address: '',
                  venue_city: '',
                  venue_state: 'Everywhere',
                  venue_country: 'United States',
                  lat: 34.2347,
                  lng: -77.9482,
                },
                contact: {
                  twitter: '',
                  venue_url: '',
                },
                foursquare: {
                  foursquare_id: '5e7b4d99c91df60008e8b168',
                  foursquare_url: 'https://4sq.com/3bDWYuq',
                },
                venue_icon: {
                  sm:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_64.png',
                  md:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_88.png',
                  lg:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_176.png?v=1',
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
                    photo_id: 307029494,
                    photo: {
                      photo_img_sm:
                        'https://untappd.akamaized.net/photos/2020_07_25/6ab5fc5a260e3ec1ab799a27069737b8_200x200.jpg',
                      photo_img_md:
                        'https://untappd.akamaized.net/photos/2020_07_25/6ab5fc5a260e3ec1ab799a27069737b8_640x640.jpg',
                      photo_img_lg:
                        'https://untappd.akamaized.net/photos/2020_07_25/6ab5fc5a260e3ec1ab799a27069737b8_1280x1280.jpg',
                      photo_img_og:
                        'https://untappd.akamaized.net/photos/2020_07_25/6ab5fc5a260e3ec1ab799a27069737b8_raw.jpg',
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
                    badge_id: 2174,
                    user_badge_id: 704454968,
                    badge_name: 'Pale as the Moon  (Level 28)',
                    badge_description:
                      "Ahh, the trusty pale ale; crisp, refreshing, and always a good choice in a bind. That's 140 different Pale Ales. Try 5 more for Level 29.",
                    created_at: 'Sat, 25 Jul 2020 19:07:03 +0000',
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
              checkin_id: 922179645,
              created_at: 'Sat, 25 Jul 2020 18:52:11 +0000',
              checkin_comment: '',
              rating_score: 3,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              venue: [],
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
                count: 0,
                items: [],
              },
            },
            {
              checkin_id: 921578987,
              created_at: 'Fri, 24 Jul 2020 19:27:54 +0000',
              checkin_comment: '',
              rating_score: 3.25,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
                venue_id: 189889,
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
                items: [
                  {
                    uid: 12345,
                    user: makeBeerInfoToastUser({ uid: 12345 }),
                    like_id: 858359239,
                    like_owner: false,
                    created_at: 'Sat, 25 Jul 2020 14:14:08 +0000',
                  },
                ],
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
              checkin_id: 921394983,
              created_at: 'Fri, 24 Jul 2020 12:09:32 +0000',
              checkin_comment: '',
              rating_score: 3,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
                venue_id: 9917985,
                venue_name: 'Untappd at Home',
                venue_slug: 'untappd-at-home',
                primary_category_key: 'Residence',
                primary_category: 'Residence',
                parent_category_id: '4e67e38e036454776db1fb3a',
                categories: {
                  count: 1,
                  items: [
                    {
                      category_key: 'home_private',
                      category_name: 'Home (private)',
                      category_id: '4bf58dd8d48988d103941735',
                      is_primary: true,
                    },
                  ],
                },
                location: {
                  venue_address: '',
                  venue_city: '',
                  venue_state: 'Everywhere',
                  venue_country: 'United States',
                  lat: 34.2347,
                  lng: -77.9482,
                },
                contact: {
                  twitter: '',
                  venue_url: '',
                },
                foursquare: {
                  foursquare_id: '5e7b4d99c91df60008e8b168',
                  foursquare_url: 'https://4sq.com/3bDWYuq',
                },
                venue_icon: {
                  sm:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_64.png',
                  md:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_88.png',
                  lg:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_176.png?v=1',
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
              checkin_id: 920747457,
              created_at: 'Wed, 22 Jul 2020 15:49:15 +0000',
              checkin_comment: '',
              rating_score: 2.5,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
                venue_id: 9917985,
                venue_name: 'Untappd at Home',
                venue_slug: 'untappd-at-home',
                primary_category_key: 'Residence',
                primary_category: 'Residence',
                parent_category_id: '4e67e38e036454776db1fb3a',
                categories: {
                  count: 1,
                  items: [
                    {
                      category_key: 'home_private',
                      category_name: 'Home (private)',
                      category_id: '4bf58dd8d48988d103941735',
                      is_primary: true,
                    },
                  ],
                },
                location: {
                  venue_address: '',
                  venue_city: '',
                  venue_state: 'Everywhere',
                  venue_country: 'United States',
                  lat: 34.2347,
                  lng: -77.9482,
                },
                contact: {
                  twitter: '',
                  venue_url: '',
                },
                foursquare: {
                  foursquare_id: '5e7b4d99c91df60008e8b168',
                  foursquare_url: 'https://4sq.com/3bDWYuq',
                },
                venue_icon: {
                  sm:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_64.png',
                  md:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_88.png',
                  lg:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_176.png?v=1',
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
                    badge_id: 2,
                    user_badge_id: 702771986,
                    badge_name: 'Apprentice',
                    badge_description:
                      "Looks like you're getting around. You've enjoyed at least 25 different beers!",
                    created_at: 'Wed, 22 Jul 2020 15:49:15 +0000',
                    badge_image: {
                      sm: 'https://untappd.akamaized.net/badges/bdg_check25_sm.jpg',
                      md: 'https://untappd.akamaized.net/badges/bdg_check25_md.jpg',
                      lg: 'https://untappd.akamaized.net/badges/bdg_check25_lg.jpg',
                    },
                  },
                  {
                    badge_id: 532,
                    user_badge_id: 702771987,
                    badge_name: 'Belgian Holiday (Level 5)',
                    badge_description:
                      "You obviously are a big fan of Belgian Beer, and rightfully so! Three cheers to the great Belgian beers and their uniquely crafted flavors!\r\n\r\nThat's 25 different beers from Belgium. Try 5 more for Level 6.",
                    created_at: 'Wed, 22 Jul 2020 15:49:15 +0000',
                    badge_image: {
                      sm:
                        'https://untappd.akamaized.net/badges/bdg_belgianHoliday_sm.jpg',
                      md:
                        'https://untappd.akamaized.net/badges/bdg_belgianHoliday_md.jpg',
                      lg:
                        'https://untappd.akamaized.net/badges/bdg_belgianHoliday_lg.jpg',
                    },
                  },
                ],
              },
            },
            {
              checkin_id: 920583863,
              created_at: 'Tue, 21 Jul 2020 21:17:30 +0000',
              checkin_comment: '',
              rating_score: 3.5,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              venue: [],
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
                    photo_id: 306193191,
                    photo: {
                      photo_img_sm:
                        'https://untappd.akamaized.net/photos/2020_07_21/f14ce9461658c988eee5f796bd8295cf_200x200.jpg',
                      photo_img_md:
                        'https://untappd.akamaized.net/photos/2020_07_21/f14ce9461658c988eee5f796bd8295cf_640x640.jpg',
                      photo_img_lg:
                        'https://untappd.akamaized.net/photos/2020_07_21/f14ce9461658c988eee5f796bd8295cf_1280x1280.jpg',
                      photo_img_og:
                        'https://untappd.akamaized.net/photos/2020_07_21/f14ce9461658c988eee5f796bd8295cf_raw.jpg',
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
              checkin_id: 920526681,
              created_at: 'Tue, 21 Jul 2020 18:47:52 +0000',
              checkin_comment: '',
              rating_score: 3,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
                venue_id: 8483070,
                venue_name: 'Relst',
                venue_slug: 'relst',
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
                  venue_city: 'Kampenhout',
                  venue_state: 'Vlaams-Brabant',
                  venue_country: 'België',
                  lat: 50.9463,
                  lng: 4.58263,
                },
                contact: {
                  twitter: '',
                  venue_url: '',
                },
                foursquare: {
                  foursquare_id: '4ff95f97e4b054fbab58144d',
                  foursquare_url: 'http://4sq.com/NaKryB',
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
                    photo_id: 306161614,
                    photo: {
                      photo_img_sm:
                        'https://untappd.akamaized.net/photos/2020_07_21/b6ef11879f076d5653a9574ddf100ee0_200x200.jpg',
                      photo_img_md:
                        'https://untappd.akamaized.net/photos/2020_07_21/b6ef11879f076d5653a9574ddf100ee0_640x640.jpg',
                      photo_img_lg:
                        'https://untappd.akamaized.net/photos/2020_07_21/b6ef11879f076d5653a9574ddf100ee0_1280x1280.jpg',
                      photo_img_og:
                        'https://untappd.akamaized.net/photos/2020_07_21/b6ef11879f076d5653a9574ddf100ee0_raw.jpg',
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
                    badge_id: 2159,
                    user_badge_id: 702521233,
                    badge_name: 'Pale as the Moon  (Level 13)',
                    badge_description:
                      "Ahh, the trusty pale ale; crisp, refreshing, and always a good choice in a bind. That's 65 different Pale Ales. Try 5 more for Level 14.",
                    created_at: 'Tue, 21 Jul 2020 18:47:52 +0000',
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
              checkin_id: 920276050,
              created_at: 'Mon, 20 Jul 2020 19:41:01 +0000',
              checkin_comment: '',
              rating_score: 2.75,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
                venue_id: 9917985,
                venue_name: 'Untappd at Home',
                venue_slug: 'untappd-at-home',
                primary_category_key: 'Residence',
                primary_category: 'Residence',
                parent_category_id: '4e67e38e036454776db1fb3a',
                categories: {
                  count: 1,
                  items: [
                    {
                      category_key: 'home_private',
                      category_name: 'Home (private)',
                      category_id: '4bf58dd8d48988d103941735',
                      is_primary: true,
                    },
                  ],
                },
                location: {
                  venue_address: '',
                  venue_city: '',
                  venue_state: 'Everywhere',
                  venue_country: 'United States',
                  lat: 34.2347,
                  lng: -77.9482,
                },
                contact: {
                  twitter: '',
                  venue_url: '',
                },
                foursquare: {
                  foursquare_id: '5e7b4d99c91df60008e8b168',
                  foursquare_url: 'https://4sq.com/3bDWYuq',
                },
                venue_icon: {
                  sm:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_64.png',
                  md:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_88.png',
                  lg:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_176.png?v=1',
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
                    photo_id: 306037330,
                    photo: {
                      photo_img_sm:
                        'https://untappd.akamaized.net/photos/2020_07_20/064970be2152e78f2392a23a9224baac_200x200.jpg',
                      photo_img_md:
                        'https://untappd.akamaized.net/photos/2020_07_20/064970be2152e78f2392a23a9224baac_640x640.jpg',
                      photo_img_lg:
                        'https://untappd.akamaized.net/photos/2020_07_20/064970be2152e78f2392a23a9224baac_1280x1280.jpg',
                      photo_img_og:
                        'https://untappd.akamaized.net/photos/2020_07_20/064970be2152e78f2392a23a9224baac_raw.jpg',
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
                    badge_id: 418009,
                    user_badge_id: 702238261,
                    badge_name: 'Untappd at Home (Level 15)',
                    badge_description:
                      "Thanks for staying at home, and checking in with Untappd! It allows us to stay connected to a community of beer lovers, just like you, even if we can't be in the same physical location. From our home to yours, cheers and stay safe!",
                    created_at: 'Mon, 20 Jul 2020 19:41:01 +0000',
                    badge_image: {
                      sm: 'https://untappd.akamaized.net/badges/bdg_untappdAtHome_sm.jpg',
                      md: 'https://untappd.akamaized.net/badges/bdg_untappdAtHome_md.jpg',
                      lg: 'https://untappd.akamaized.net/badges/bdg_untappdAtHome_lg.jpg',
                    },
                  },
                  {
                    badge_id: 133248,
                    user_badge_id: 702238262,
                    badge_name: '99 Bottles (Level 95)',
                    badge_description:
                      "99 bottles of beer on the wall, 99 bottles of beer. Take one down, pass it around.... That's 475 checkins with the serving style of Bottle. Try 5 more for Level 96!",
                    created_at: 'Mon, 20 Jul 2020 19:41:01 +0000',
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
              checkin_id: 920273750,
              created_at: 'Mon, 20 Jul 2020 19:34:51 +0000',
              checkin_comment: 'Lorem beersum',
              rating_score: 1.75,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
                venue_id: 9917985,
                venue_name: 'Untappd at Home',
                venue_slug: 'untappd-at-home',
                primary_category_key: 'Residence',
                primary_category: 'Residence',
                parent_category_id: '4e67e38e036454776db1fb3a',
                categories: {
                  count: 1,
                  items: [
                    {
                      category_key: 'home_private',
                      category_name: 'Home (private)',
                      category_id: '4bf58dd8d48988d103941735',
                      is_primary: true,
                    },
                  ],
                },
                location: {
                  venue_address: '',
                  venue_city: '',
                  venue_state: 'Everywhere',
                  venue_country: 'United States',
                  lat: 34.2347,
                  lng: -77.9482,
                },
                contact: {
                  twitter: '',
                  venue_url: '',
                },
                foursquare: {
                  foursquare_id: '5e7b4d99c91df60008e8b168',
                  foursquare_url: 'https://4sq.com/3bDWYuq',
                },
                venue_icon: {
                  sm:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_64.png',
                  md:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_88.png',
                  lg:
                    'https://untappd.akamaized.net/venuelogos/venue_9917985_b3a5d245_bg_176.png?v=1',
                },
                is_verified: true,
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
                    photo_id: 306035936,
                    photo: {
                      photo_img_sm:
                        'https://untappd.akamaized.net/photos/2020_07_20/7af3ae19ed27abe7936116d37707e8f9_200x200.jpg',
                      photo_img_md:
                        'https://untappd.akamaized.net/photos/2020_07_20/7af3ae19ed27abe7936116d37707e8f9_640x640.jpg',
                      photo_img_lg:
                        'https://untappd.akamaized.net/photos/2020_07_20/7af3ae19ed27abe7936116d37707e8f9_1280x1280.jpg',
                      photo_img_og:
                        'https://untappd.akamaized.net/photos/2020_07_20/7af3ae19ed27abe7936116d37707e8f9_raw.jpg',
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
              checkin_id: 919506768,
              created_at: 'Sat, 18 Jul 2020 21:40:23 +0000',
              checkin_comment: '',
              rating_score: 3.5,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
              venue: [],
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
                app_name: 'Untappd for iPhone - (V2)',
                app_website: 'http://untpd.it/iphoneapp',
              },
              badges: {
                count: 0,
                items: [],
              },
            },
            {
              checkin_id: 919434024,
              created_at: 'Sat, 18 Jul 2020 20:22:53 +0000',
              checkin_comment: '',
              rating_score: 3.75,
              user: makeCheckinUser(),
              beer: {
                bid: id,
                beer_name: 'Ma Mère Spéciale',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-_91989_7d6d9f7f8fe30856a076c111c8ab.jpeg',
                beer_abv: 6,
                beer_ibu: 72,
                beer_slug: 'brouwerij-de-leite-ma-mere-speciale',
                beer_description: '',
                beer_style: 'Pale Ale - Belgian',
                has_had: false,
                beer_active: 1,
              },
              brewery: {
                brewery_id: 9601,
                brewery_name: 'Brouwerij De Leite',
                brewery_slug: 'brouwerij-de-leite',
                brewery_page_url: '/w/brouwerij-de-leite/9601',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-9601_5675b.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brouwerijdeleite/',
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
                venue_id: 114898,
                venue_name: "L'Athénée",
                venue_slug: 'l-athenee',
                primary_category_key: 'Nightlife Spot',
                primary_category: 'Nightlife Spot',
                parent_category_id: '4d4b7105d754a06376d81259',
                categories: {
                  count: 1,
                  items: [
                    {
                      category_key: 'bar',
                      category_name: 'Bar',
                      category_id: '4bf58dd8d48988d116941735',
                      is_primary: true,
                    },
                  ],
                },
                location: {
                  venue_address: 'Rue Jules Bouillonstraat 2',
                  venue_city: 'Elsene',
                  venue_state: 'Brussels Hoofdstedelijk Gewest',
                  venue_country: 'België',
                  lat: 50.8351,
                  lng: 4.36639,
                },
                contact: {
                  twitter: '',
                  venue_url: '',
                },
                foursquare: {
                  foursquare_id: '4b0d9031f964a520264b23e3',
                  foursquare_url: 'http://4sq.com/cUB383',
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
                app_name: 'Untappd for iPhone - (V2)',
                app_website: 'http://untpd.it/iphoneapp',
              },
              badges: {
                retro_status: false,
                count: 1,
                items: [
                  {
                    badge_id: 289,
                    user_badge_id: 701291603,
                    badge_name: 'Pale as the Moon (Level 4)',
                    badge_description:
                      "Ahh, the trusty pale ale; crisp, refreshing, and always a good choice in a bind. That's 20 different Pale Ales. Try 5 more for Level 5.",
                    created_at: 'Sat, 18 Jul 2020 20:22:53 +0000',
                    badge_image: {
                      sm: 'https://untappd.akamaized.net/badges/bdg_PaleMoon_sm.jpg',
                      md: 'https://untappd.akamaized.net/badges/bdg_PaleMoon_md.jpg',
                      lg: 'https://untappd.akamaized.net/badges/bdg_PaleMoon_lg.jpg',
                    },
                  },
                ],
              },
            },
          ],
          pagination: {
            since_url: 'https://api.untappd.com/v4/beer/checkins/id?max_id=919434024',
            next_url: 'https://api.untappd.com/v4/beer/checkins/id?max_id=919434024',
            max_id: 919434024,
          },
        },
        similar: {
          method: 'es',
          count: 5,
          items: [
            {
              rating_score: 3.19018,
              beer: {
                bid: 1777638,
                beer_name: 'Farmhouse',
                beer_abv: 6.5,
                beer_ibu: 40,
                beer_slug: 'open-water-brewery-farmhouse',
                beer_style: 'Farmhouse Ale - Saison',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-1777638_c5350_sm.jpeg',
                has_had: false,
              },
              brewery: {
                brewery_id: 262169,
                brewery_name: 'Open Water Brewery',
                brewery_slug: 'open-water-brewery',
                brewery_page_url: '/OpenWaterBrewery',
                brewery_type: 'Micro Brewery',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-262169_807c9.jpeg',
                country_name: 'Aland Islands',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/openwaterbrewery/',
                  instagram: 'openwaterbrewery',
                  url: 'http://www.openwaterbrewery.com',
                },
                location: {
                  brewery_city: 'Knutsboda',
                  brewery_state: 'Åland',
                  lat: 60.0685,
                  lng: 20.0319,
                },
                brewery_active: 1,
              },
              friends: {
                items: [],
                count: 0,
              },
            },
            {
              rating_score: 3.02621,
              beer: {
                bid: 27888,
                beer_name: 'Hellekapelle',
                beer_abv: 5,
                beer_ibu: 0,
                beer_slug: 'brouwerij-de-bie-hellekapelle',
                beer_style: 'Pale Ale - Belgian',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-Hellekapelle_27888.jpeg',
                has_had: false,
              },
              brewery: {
                brewery_id: 3072,
                brewery_name: 'Brouwerij de Bie',
                brewery_slug: 'brouwerij-de-bie',
                brewery_page_url: '/w/brouwerij-de-bie/3072',
                brewery_type: 'Micro Brewery',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-BrouwerijdeBie_3072.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brijdebie',
                  instagram: '',
                  url: 'http://www.brijdebie.be',
                },
                location: {
                  brewery_city: 'Wakken',
                  brewery_state: 'Vlaanderen',
                  lat: 50.9248,
                  lng: 3.41592,
                },
                brewery_active: 1,
              },
              friends: {
                items: [],
                count: 0,
              },
            },
            {
              rating_score: 3.70987,
              beer: {
                bid: 3364996,
                beer_name: 'Aestatis Cashasa Rum Reserva',
                beer_abv: 11.5,
                beer_ibu: 59,
                beer_slug: 'de-struise-brouwers-aestatis-cashasa-rum-reserva',
                beer_style: 'Farmhouse Ale - Saison',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-3364996_0a918_sm.jpeg',
                has_had: false,
              },
              brewery: {
                brewery_id: 433,
                brewery_name: 'De Struise Brouwers',
                brewery_slug: 'de-struise-brouwers',
                brewery_page_url: '/struise',
                brewery_type: 'Micro Brewery',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-DeStruiseBrouwers_433.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: 'struise',
                  facebook:
                    'https://www.facebook.com/pages/De-Struise-Brouwers/58796459632',
                  instagram: 'struisebreweries',
                  url: 'http://struise.com',
                },
                location: {
                  brewery_city: 'Oostvleteren',
                  brewery_state: 'Vlaanderen',
                  lat: 50.9319,
                  lng: 2.73768,
                },
                brewery_active: 1,
              },
              friends: {
                items: [],
                count: 0,
              },
            },
            {
              rating_score: 3.22589,
              beer: {
                bid: 1833251,
                beer_name: 'Avena Saison Bio',
                beer_abv: 5.5,
                beer_ibu: 0,
                beer_slug: 'brasserie-deseveaux-avena-saison-bio',
                beer_style: 'Farmhouse Ale - Saison',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-1833251_aeb40_sm.jpeg',
                has_had: false,
              },
              brewery: {
                brewery_id: 48716,
                brewery_name: 'Brasserie Deseveaux',
                brewery_slug: 'brasserie-deseveaux',
                brewery_page_url: '/BrasserieDeseveaux',
                brewery_type: 'Nano Brewery',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-48716_3b05d.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: '',
                  facebook: 'https://www.facebook.com/brasserie.deseveaux',
                  instagram: 'brasseriedeseveaux',
                  url: 'http://www.brasserie-deseveaux.be',
                },
                location: {
                  brewery_city: 'Boussu',
                  brewery_state: 'Wallonie',
                  lat: 50.4268,
                  lng: 3.79499,
                },
                brewery_active: 1,
              },
              friends: {
                items: [],
                count: 0,
              },
            },
            {
              rating_score: 3.39627,
              beer: {
                bid: 3830806,
                beer_name: 'Florita',
                beer_abv: 6,
                beer_ibu: 20,
                beer_slug: 'brasserie-atrium-florita',
                beer_style: 'Farmhouse Ale - Saison',
                beer_label:
                  'https://untappd.akamaized.net/site/beer_logos/beer-3830806_293c5_sm.jpeg',
                has_had: false,
              },
              brewery: {
                brewery_id: 415379,
                brewery_name: 'Brasserie Atrium',
                brewery_slug: 'brasserie-atrium',
                brewery_page_url: '/brasserieatrium',
                brewery_type: 'Nano Brewery',
                brewery_label:
                  'https://untappd.akamaized.net/site/brewery_logos/brewery-415379_8531d.jpeg',
                country_name: 'Belgium',
                contact: {
                  twitter: 'atriumbrasserie',
                  facebook: 'https://www.facebook.com/atriumbrasserie/',
                  instagram: 'brasserie.atrium',
                  url: 'http://www.brasserieatrium.be',
                },
                location: {
                  brewery_city: 'Marche-en-Famenne',
                  brewery_state: 'Wallonie',
                  lat: 50.2274,
                  lng: 5.34544,
                },
                brewery_active: 1,
              },
              friends: {
                items: [],
                count: 0,
              },
            },
          ],
        },
        friends: {
          count: 0,
          items: [],
        },
        weighted_rating_score: 3.26749,
        beer_active: 1,
        vintages: {
          count: 0,
          items: [],
        },
        brewed_by: {
          count: 0,
          items: [],
        },
      },
    },
  }
}
