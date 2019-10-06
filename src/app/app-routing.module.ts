import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  LocalizeParser,
  LocalizeRouterModule,
  LocalizeRouterSettings
} from '@gilsdav/ngx-translate-router';
import { LocalizeRouterHttpLoader } from '@gilsdav/ngx-translate-router-http-loader';
import { TranslateService } from '@ngx-translate/core';

/**
 * Http loader function for i18n
 */
export function HttpLoaderFactory(
  translate: TranslateService,
  location: Location,
  settings: LocalizeRouterSettings,
  http: HttpClient
) {
  return new LocalizeRouterHttpLoader(
    translate,
    location,
    { ...settings, alwaysSetPrefix: true },
    http
  );
}

const routes: Routes = [
  {
    path: 'first',
    loadChildren: () => import('./modules/first/first.module').then(m => m.FirstModule)
  },
  {
    path: 'second',
    loadChildren: () => import('./modules/second/second.module').then(m => m.SecondModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'first'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: HttpLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
      }
    })
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class AppRoutingModule {}
