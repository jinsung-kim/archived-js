# About

A digital fingerprint of where I'm at.

## Running Locally

Install react and packages within package.json file. Then simply run:

```shell
npm start
```

## Deploying to Firebase

- With the use of React, the changes must be built first.

```shell
npm run build
```

- Login to Firebase (if this has not been done already).

Select build as folder, don't overwrite index.html, and select yes to single page app.

```shell
firebase init && firebase deploy
```
