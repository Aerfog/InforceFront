import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModuleForUsers } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModuleForUsers)
  .catch(err => console.error(err));
