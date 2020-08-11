import { UtMediaUser } from './beer-info.types'
import { UtUser } from './shared.types'
import { UtVenueInfoCheckinUser } from './venue-info.types'

export function makeMediaUser(overrides: Partial<UtMediaUser> = {}): UtMediaUser {
  return {
    uid: 222222,
    user_name: 'alice22',
    first_name: 'Alice',
    last_name: 'W',
    user_avatar: 'https://picsum.photos/50/50',
    is_private: 0,
    ...overrides,
  }
}

export function makeCheckinUser(overrides: Partial<UtUser> = {}): UtUser {
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
    ...overrides,
  }
}

export function makeBeerInfoToastUser(overrides: Partial<UtUser> = {}): UtUser {
  return makeCheckinUser(overrides)
}

export function makeVenueInfoUser(): UtVenueInfoCheckinUser {
  return {
    uid: 333333,
    user_name: 'wat',
    first_name: 'Wat',
    last_name: 'Undefined',
    relationship: 'none',
    is_supporter: 0,
    user_avatar: 'https://picsum.photos/50/50',
    is_private: 0,
  }
}
