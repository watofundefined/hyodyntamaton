# Backlog

## Features

### Get users location on the server as a fallback if client-side geolocation fails

### Let user search pubs by name too

### Simple share - copy coordinates 

Or generate links - GMap / ...

https://www.google.com/maps/search/60.192059,+24.945831

## Security

### Validate login state

It has to be one of:

- token == null && loggedIn == false
- token == 'users-untappd-token** && loggedIn == true

### Make sure there's no way secrets can get into final bundle (maybe Next handles it)
