# Instabug Login

This is a simple app made as a part of [Instabug](https://instabug.com/)'s screening process for their Front-End Internship.

## Overview

This is a responsive app with login mock functionality consisting of 3 pages:

- Login: has a carousel and a login form with the following functionality:

  - Checks if the user's email is valid.
  - Checks if the password is at least 8 characters long, with at least 1 capital letter and 1 number, and that it also does not contain the user's email.
  - Validates the entered email and password via an existing array of users.
  - Redirects to the `/welcome` page when the user logs in, or if they are already logged in.

- Welcome:

  - Greets the user by their email.
  - Redirects to the `/login` page when the user logs out, or if they are not logged in.

- 404:
  - Shows a 404 Not Found error.
  - Any other route, other than `/login` and `/welcome`, will redirect to `/404`.

## Getting Started

Make sure to have `node.js` and `yarn`installed and that you are in the root directory of the project, then simply run:

```bash
yarn
```

To run the development server, execute:

```bash
yarn start
```

### Testing

Automation tests are made using [Cypress](https://www.cypress.io/) for the following scenarios:

- Scenario 1:

  1. Enter an email address that doesn’t exist in the login list.
  2. Enter any password.
  3. Click on the login button.
  4. Validate that the error message `Your email and/or password are incorrect` shows.

- Scenario 2:

  1. Enter an email address that exists in the login list.
  2. Enter any wrong password.
  3. Click on the login button.
  4. Validate that the error message `Your email and/or password are incorrect` shows.

- Scenario 3:
  1. Enter an email address that exists in the login list.
  2. Enter the right password.
  3. Click on login button.
  4. Validate that the browser will redirect to the welcome page.
