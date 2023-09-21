import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModuleForGuests } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModuleForGuests)
  .catch(err => console.error(err));
