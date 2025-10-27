// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { App } from './app/app';

// bootstrapApplication(App, appConfig)
//   .catch((err) => console.error(err));

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App } from './app/app';

platformBrowserDynamic().bootstrapModule(App);