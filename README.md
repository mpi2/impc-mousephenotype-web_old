<img alt="logo-impc" src="https://www.mousephenotype.org/wp-content/themes/impc/images/IMPC_logo.svg" width="250">

# IMPC - Mouse Phenotype Web

React components library, web application and widgets library for the mousephenotype.org website.

# How to contribute

## Fork and clone this repository

1. Fork this repository to your personal GitHub account
2. Clone your fork:

   ```
   git clone https://github.com/<YOUR_USERNAME>/impc-mousephenotype-web.git
   ```

3. Go to the project directory:
   ```
   cd impc-mousephenotype-web
   ```
4. Add the original repo as a remote:
   ```
   git remote add upstream https://github.com/mpi2/impc-mousephenotype-web.git
   ```

## Set up your development environment

1. Install [node and npm](https://nodejs.org/en/download/). If you already have node/npm installed, update it to the latest version.

   > :information_source:&nbsp;&nbsp;We recommend you to use [nvm](https://github.com/nvm-sh/nvm) to manage your node/npm installation

2. Go to the project directory
   ```
   cd impc-mousephenotype-org
   ```
3. Install [yarn](https://yarnpkg.com/getting-started/install):
   ```
   npm install -g yarn
   ```
   > :warning:&nbsp;&nbsp;This project runs runs using yarn classic. We tested out Yarn 2 (Beta 1) but there is still some conflicts and issues with other project dependencies
4. Run yarn install:

   ```
    yarn
   ```

5. Open your project on VS Code:

   ```
   code .
   ```

6. [**OPTIONAL**] Install VS Code recommended extensions

   ![Screen-Shot-2019-08-14-at-2 53 11-PM-1](https://user-images.githubusercontent.com/2343039/109700706-0a184c80-7b8a-11eb-8816-fa7850faa3f4.png)

7. Running storybook:
   ```
   yarn storybook
   ```
8. Edit/add your components at `packages/components/src`
9. Commit your changes
   ```
   git add .
   git commit -m "Really important commit message"
   ```
10. Pull the upstream repository:

    ```
    git pull upstream main
    ```

11. Push to your fork:
    ```
    git push origin main
    ```

## Project architecture

This project is configured using [yarn workspaces](https://yarnpkg.com/features/workspaces) and [lerna](https://lerna.js.org/) to support the monorepo pattern, making it easier to produce both a full Single Page Application and a set of self contained widgets that can be used independently in any website (e.g. the CMS pages use to present static content at mousephenotype.org). The source code is distributed in the following structure:

```
packages
├── components
│   ├── package.json
│   ├── public
│   ├── src
│   ├── tsconfig.esm.json
│   └── tsconfig.json
├── web-app
│   ├── README.md
│   ├── package.json
│   ├── public
│   ├── src
│   └── tsconfig.json
└── widgets
    └── late-adult-heatmap
            ├── package.json
            ├── src
            └── tsconfig.json
```

The components package is where most of our could should reside and it's a dependency of the web-app package and the different widgets package.

### Components package

The components package is our component library, is supposed to be a presentation layer that knows the minimum about our domain and data sources as possible. A component shouldn't get data directly from any of our data sources, that responsibility should be delegated to the components wrapping our singular rendering unit, like the widget components in the widgets packages or the pages components in our web-app package.

The components library is powered by [Storybook](https://storybook.js.org/).

Just remember, keep your components simple, as simple as possible.

### Adding new components
