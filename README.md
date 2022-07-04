# incard login and dashboard

### How to use

- login with the following details to gain access to the dashboard page: - email: jane@incard.com - password: fooBar123

## Creation

###### Tech stack

- Next.js
- Typescript
- Tailwind CSS
- Chart.js
- React-hook-forms

###### Structure

- atomic design (atoms, molecules, organisms and templates) split up into most commonly used components and regular components

###### DevX

- linting (ESLint) set up to better catch errors
- use of prettier to auto format
- use of form library to simplify form creation and handling of error messages
- use of named imports when importing components into parent component cuts down on code and makes for better readability

## To do

###### Tests

- have already set up jest etc for this 
- test that the 'api' call on the login page returns a token and this is stored correctly 
- test that logged in users have access to the dashboard page (auth context working as it should be)

###### Other

- implement context wrapper / hooks for dashboard data to avoid prop drilling
- use a component templating solution with plop/handlebars to generate new components for better dev experience
- add the alternate versions of the dashboard page
- esnure Nivo charts works with Next.js so I can use that instead of Chart.js
-fix forward ref error with react-hook-form on login page (this error shouldn't occur with native html inputs so would require more investigation) 
