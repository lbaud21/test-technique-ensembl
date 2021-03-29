# Technical test Ensembl

## Technologies used

### [Create React App](https://github.com/facebook/create-react-app)

- For fast and complete react app setup

### React-router-dom

- Easy and efficient React routing library

### Styled components

- CSS in JS library which makes css easy to maintain with no Classnames conflicts and make it easy to work with style props

### Axios

- Library to make http request which performs automatic transform of JSON data

## Reflexion on the solution

### Technical and architectural choices

- Classic react project architecture:
  - A page folder containing the pages calling the container/components.
  - A Container folder used to inject logic into componnts.
  - A Components folder used to write react components.
  - Components are divided regarding the page structure: header, content, footer.
  - Logic is completly extracted from the flow of the application in custom hooks stored in a hook folder.
  - App component located in the app folder call the pages and handle routing.

## Improvements

- Add a button to fetch more program results
- Add more animations
- Implement a Redux store (it is the best option to handle and organize app state if the app grows)

### Tests

- Regarding the main functionalities, 5 tests are implemented:
  - checking the correct redirection to movies page
  - checking the correct redirection to series page
  - checking the correct title of the home page
  - checking the correct title of the movies page
  - checking the correct title of the series page
