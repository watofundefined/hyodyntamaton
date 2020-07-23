import { FsReq, FsResMeta } from './shared.types'

interface BaseReq {
  v: string // YYYYMMDD
  ll: string // format: lat,lng
  // it's either 'll' or 'near' but I don't plan to use 'near'
  // near?: string
  radius?: number // meters
  limit?: number // max 50
  categoryId?: string // csv
  llAcc?: number
  alt?: number
  altAcc?: number
  url?: string
  providerId?: string
  linkedId?: number
}

export type FsVenuesSearchReq = FsReq<BaseReq>

export interface FsVenuesSearchRes {
  meta: FsResMeta
  notifications?: FsNotification[]
  response: {
    venues: FsVenue[]
    confident?: boolean
  }
}

export interface FsNotification {
  type: string
  item: {
    unreadCount: number
  }
}

export enum FsVenueCategoryId {
  BeerBar = '56aa371ce4b08b9a8d57356c',
  BeerGarden = '4bf58dd8d48988d117941735',
  BeerStore = '5370f356bcbc57f1066c94c2',
  Brewery = '50327c8591d4c4b30a586d5d',
  Cidery = '5e189fd6eee47d000759bbfd',
}

export interface FsVenueCategory {
  // string for all the categories I don't care about now
  id: FsVenueCategoryId | string
  name: string
  pluralName: string
  shortName: string
  icon: {
    prefix: string
    suffix: string
  }
  primary: boolean
}

export interface FsVenue {
  id: string
  name: string
  contact?: {
    phone: string
    formattedPhone: string
    twitter: string
    instagram: string
    facebook: string
    facebookUsername: string
    facebookName: string
  }
  location: {
    address?: string
    crossStreet?: string
    lat: number
    lng: number
    labeledLatLngs: {
      label: string
      lat: number
      lng: number
    }[]
    distance: number
    postalCode?: string
    cc: string
    neighborhood?: string
    city?: string
    state?: string
    country: string
    formattedAddress: string[]
  }
  categories: FsVenueCategory[]
  verified?: boolean
  stats?: {
    tipCount: number
    usersCount: number
    checkinsCount: number
  }
  url?: string
  venueRatingBlacklisted?: boolean
  beenHere?: {
    lastCheckinExpiredAt: number
  }
  venuePage?: {
    id: string
  }
  storeId?: string
  hereNow?: {
    count: number
    summary: string
    groups: []
  }
  referralId: string
  hasPerk: boolean
  venueChains?: []
}
