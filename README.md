# AngularSentryExample

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Getting started

1. Install Angular-cli: `npm install -g @angular/cli`

2. Run `npm install`

3. Setup new Sentry Angular project on [Sentry.io](Sentry.io)

4. Copy the DSN key from the Sentry Angular project and paste it in /src/app/app.modules.ts

`Sentry.init({
  dsn: "<REPLACE DSN HERE>"
})`

5. To start the dev server run `ng serve --open`
