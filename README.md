# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)

# calendar-app

## **Task Description**

Create a calendar grid with the ability to create and organize tasks. The calendar must be implemented without using calendar libraries.

## **Required Functionality**

- [ ] Create and edit tasks inside calendar cells (days) in an inline manner.
- [ ] Reassign tasks between days (calendar cells) using drag and drop.
- [ ] Reorder task in one cell using drag and drop.
- [ ] Filter tasks in the calendar by searching text.
- [ ] Show worldwide holidays for each day in the calendar.
- [ ] Holiday name must be fixed at of the cell and must not participate in re-ordering.

## **API**

- https://date.nager.at/swagger/index.html

## **Required Technologies**

- TypeScript
- React
- React Hooks
- CSS-in-JS (Emotion/Styled-Components/Stitches)
