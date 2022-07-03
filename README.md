**Structure**

- atomic design
  - common components
    - input boxes (atom), buttons (atom), dashboard display (individual boxes of data - molecules)
    - title, subtitle
  - components

**Creation**

- SSR - load data for dashboard on page
- Data - use JSON server to hold the data
  - incard balance, revenue, expenses
  - amount of money in each of the accounts
    - need 4 different views for each of these
  - fake data for the line chart
  - recommendations - maybe a guardian api?

**Tech Stack**

- Next.js
- Typescript
- Tailwind CSS
- Nivo Charts for the line chart
- Testing - Jest

**Tips**

- semantic HTML
  - sections
  - form - react hook form?

**DevX**

- linting
- would implement a component templating solution with plop/handlebars to generate new components
