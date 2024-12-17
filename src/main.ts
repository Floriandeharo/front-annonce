import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { appConfig } from './app/app.config';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { HttpClientModule } from '@angular/common/http';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  ...appConfig,
  // providers: [
  //   importProvidersFrom([HttpClientModule]), // Ajoutez le routage ici
  // ]
}).catch((err) =>
  console.error(err)
);
console.log('main.ts');
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
