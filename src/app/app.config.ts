import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { environment } from '../environments/environment';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { StandarloneHttpLogInterceptor, SharedModule } from 'tt-library-angular-porfolio';

export function HTTPLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom([
      BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      Title,

      SharedModule.forRoot(environment),
      AngularSvgIconModule.forRoot(),
      TranslateModule.forRoot({
        defaultLanguage: environment.defaultLang,
        loader: {
          provide: TranslateLoader,
          useFactory: HTTPLoaderFactory,
          deps: [HttpClient],
        },
      }),
    ]),
    provideHttpClient(withInterceptors([StandarloneHttpLogInterceptor])),
  ]
};
