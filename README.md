# Design System
This is Bits of Good's Design System, which is an internal collection of components to standardize our designs.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Viewing Our Components

First, run the development server from the root directory:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using Our Components

The code for all of our components is in `src/components`.

## Linter/Prettier

These commands will run the formatter (prettier) and linter (ESLint) for the whole respository:

- `yarn run lint` - runs ESLint and reports all linting errors without fixing them
- `yarn run lint:fix` - runs ESLint and reports all linting errors, attempting to fix any auto-fixable ones
- `yarn run format` - runs Prettier and automatically formats the entire codebase
- `yarn run format:check` - runs Prettier and reports formatting errors without fixing them