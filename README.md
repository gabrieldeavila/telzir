<h1 align="center">Telzir</h1>

## Project Description

<p align="justify">This project was built using NodeJS and ReactJS.

It is structured in two folders: the first one is the backend, where all code is related to business rules, and the last one is the frontend, where all design was created. </p>

# Content

- [Mockups](#mockups)
  - [Mobile](#mobile)
  - [Desktop](#desktop)
- [Setup](#setup)
  - [Backend](#backend)
    - [Testing](#testing)
  - [Frontend](#frontend)
  <!--te-->

## Mockups

### Mobile

<h1 align="center">
  <img alt="Mobile Telzir" title="Mobile Telzir" src="./mockups/Home Telzir.png" />
</h1>

### Desktop

<h1 align="center">
  <img alt="Desktop Telzir" title="Desktop Telzir" src="./mockups/Telzir- main.png" />
</h1>

## Setup

### Backend

<h2 align="center">Follow this commands:</h2>

```js
// Verify if node and yarn are installed

node - v;
yarn - v;
```

<p> 
Open 
</p>

```
backend\application\.env copy
```

<p> 
And change to:
</p>

```js
//configure with yours credentials

backend\application\.env
```

<p>Create a database called <strong>telzir</strong> in MYSQL, or if you want another name, change it in .env file and then create it.</p>

<p>Go to </p>

```
backend\application
```

<p>And run</p>

```
yarn install
```

<p>Now, run migrations and seeders</p>

```
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

<p>And that's it! Only run</p>

```
yarn run start:dev
```

<p>And the app is listening on the port:5000</p>

#### Testing

<p>Run the following commands:</p>

```
yarn build
yarn test
```

<p>
  Now you should receive the results to this tests:
</p>

| From | To  | Time | Plan          | With  | Without |
| ---- | --- | ---- | ------------- | ----- | ------- |
| 011  | 016 | 20   | Fale mais 30  | 0     | 38      |
| 011  | 017 | 80   | Fale mais 60  | 37.4  | 136     |
| 018  | 011 | 200  | Fale mais 120 | 167.2 | 380     |
| 018  | 017 | 100  | Fale mais 30  | -     | -       |

### Frontend

<p>Go to</p>

```js
frontend\application
```

<p>Run</p>

```js
yarn install
yarn run
```

<p>Frontend is running on port:3000!</p>
