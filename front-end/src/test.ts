// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
<<<<<<< HEAD
const context = require.context('app-chat', true, /\.component.spec\.ts$/);
=======
const context = require.context('./', true, /login\.component\.spec\.ts$/);
>>>>>>> 6b92b1e0b7a2f19d99490415130cd55bb5603bdf
// And load the modules.
context.keys().map(context);
