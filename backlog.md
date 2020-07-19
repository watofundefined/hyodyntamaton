# Backlog

## Features

### Google Maps intergration

### Get local pubs from Untappd

### Get users location on the server as a fallback if client-side geolocation fails

## Security

### Validate login state

It has to be one of:

- token == null && loggedIn == false
- token == 'users-untappd-token** && loggedIn == true

### Make sure there's no way secrets can get into final bundle (maybe Next handles it)
