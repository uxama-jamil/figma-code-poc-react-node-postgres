# Node-Express-Sequelize-API Boilerplate <!-- omit in toc -->

Simple boilerplate code base for creating APIs with `Node.js Express` framework using `Sequelize` with `PostgreSQL` database.

## 📚 Contents <!-- omit in toc -->

- [Includes](#includes)
- [Prerequisite](#prerequisite)
- [Getting Started](#getting-started)
- [Local Setup](#local-setup)
- [Tests \& Coverage](#tests--coverage)
- [Migrations](#migrations)
- [Environment Variables](#environment-variables)
- [`ESDoc`](#esdoc)
- [Endpoints](#endpoints)
- [References](#references)

## Includes

- **ES6** `import/export` implemented with `type: "module"` in `package.json`
- **Error handling** middlewares implemented
- `Tests` added with `mocha` configuration
- Code-coverage using Node.js' built in functionality `c8`
- `Eslint`
- `winston` logger

## 😊 Prerequisite

- Install `nodemon` globally using below command if not installed already

  ```sh
  npm i -g nodemon
  ```

- **PostgreSQL**

## 🚀 Getting Started

## ⚙️ Local Setup

- Install dependencies

  ```sh
  npm install
  ```

- Create file called `.env`
  ```sh
  cp .env.example .env
  ```

- Run locally

  ```sh
  npm run local
  ```

## 🧪 Tests & Coverage

- Run tests *(unit/integration)*

  ```sh
  npm test
  ```

- Run tests with coverage

  ```sh
  npm run coverage
  ```

## 🗃️ Migrations

- Running Migrations

  ```sh
  npm run migration
  ```

- Undoing Migrations

  ```sh
  npm run migration:undo
  ```

## ℹ️ Environment Variables

| Variable | Description              | Default Value |
| -------- | ------------------------ | ------------- |
| DB_HOST  | Database connection host | `localhost`   |
| DB_PORT  | Database port            | `5432`        |
| DB_NAME  | Database name            | `postgres`    |
| DB_USER  | Database username        | `postgres`    |
| DB_PASS  | Database password        | `postgres`    |

> NOTE: These environment variables are already passed to `npm run local` and `npm test` scripts under `package.json` with their default values. You can update as per your need.

## 🗒️ `ESDoc`

- Documention is created out of comments added for functions using `esdoc`.


## 📚 References

- [Sequelize ORM](https://sequelize.org/v6/)
