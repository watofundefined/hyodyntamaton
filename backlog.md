# Backlog

## Features

### Untappd Authenticaton/Authorization

Add API endpoint that will finalize the Untappd auth process.

## Security

### Validate login state

It has to be one of:

- token == null && loggedIn == false
- token == 'users-untappd-token' && loggedIn == true
- token == null && loggedIn == true && localhost == true
