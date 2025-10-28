# Design System
This is Bits of Good's Design System, which is an internal collection of components to standardize our designs.

## Viewing Our Components
View our component preview page [here](https://bog-design-system.netlify.app/).

View our Figma page [here](https://www.figma.com/design/3ZrnHZLADWKkgFDBxN10hc/Bits-of-Good-Sunset--Design-System?node-id=412-4101&p=f&t=5LHFyd2ELEjVZLR3-0).

## Local Setup

Run the development server from the root directory:

First time:
```bash
npm i
npm run dev
```

Otherwise:
```bash
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) with your browser to see a page with all of the components on it.

## Using Our Design System

### Designers
Designers can access our Figma page [here](https://www.figma.com/design/3ZrnHZLADWKkgFDBxN10hc/Bits-of-Good-Sunset--Design-System?node-id=412-4101&p=f&t=5LHFyd2ELEjVZLR3-0). You can get edit permissions from BoG design exec if necessary, but you can copy and paste any of our components from that link.

### Developers
Developers interact with our design system through the [bog-cli](https://github.com/GTBitsOfGood/bog-cli). There will be instructions there for local setup, but it will also be accessible as an npm package. After adding our components and style to your project, you can customize them using one of three methods:
- Direct source code editing
  - This will work, just be careful with this, because when using the cli to manage the components, you may overwrite your changes. That's why one of the methods below is recommended
- Use the `style` attribute:
  - Each component takes in a style attribute, which allows you to put your own CSS styles on the component to customize it to fit your application's design requirements
- Use the `className` attribute:
  - Each component also takes in a className attribute, which allows you to apply your own CSS classes or Tailwind CSS classes to your component to customize its style

If you'd like to add more to the functionality of the component, I'd recommend reaching out to BoG exec about adding that as a feature to the base component itself, but you can also use our source code to make your own component if desired.

## Linter/Prettier

These commands will run the formatter (prettier) and linter (ESLint) for the whole respository:

- `npm run lint` - runs ESLint and reports all linting errors without fixing them
- `npm run lint:fix` - runs ESLint and reports all linting errors, attempting to fix any auto-fixable ones
- `yarn run format` - runs Prettier and automatically formats the entire codebase
- `yarn run format:check` - runs Prettier and reports formatting errors without fixing them
