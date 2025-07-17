# Fastify API

A boilerplate for creating a RESTful API using Fastify, TypeScript, and Mongoose.

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/rnyll-pntnr/fastify-node-boilerplate.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd fastify-node-boilerplate
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Environment Variables

Create a `.env.development` file in the root of the project and add the following environment variables. You can use the `.env.sample` file as a template.

```
NODE_ENV=development
PORT=3000

DB_STRING=
DB_COLLECTION_NAME=
DB_USERNAME=
DB_PASSWORD=
```

## Project Structure

The project follows a standard structure for a Node.js application:

```
.
├── public/               # Contains static assets
├── src/                  # Contains the source code
│   ├── __tests__/        # Contains test files
│   │   └── index.test.ts
│   ├── config/           # Contains configuration files
│   │   └── database.config.ts
│   ├── controllers/      # Contains request handlers
│   │   └── user.controller.ts
│   ├── models/           # Contains database models
│   │   └── user.model.ts
│   ├── routes/           # Contains API routes
│   │   ├── index.ts
│   │   └── user.route.ts
│   ├── utils/            # Contains utility functions
│   │   └── logger.utils.ts
│   └── index.ts          # The entry point of the application
├── .env.sample
├── .gitignore
├── .prettierignore
├── .prettierrc
├── jest.config.ts
├── package.json
└── tsconfig.json
```

## Available Scripts

-   `npm start`: Starts the application in production mode.
-   `npm run build`: Compiles the TypeScript code to JavaScript.
-   `npm run dev`: Starts the application in development mode with hot-reloading.
-   `npm test`: Runs the test suite.
-   `npm run format`: Formats the code using Prettier.
