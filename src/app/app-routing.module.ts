import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

/**
 * Http loader function for i18n
 */
// export function HttpLoaderFactory(
//   translate: TranslateService,
//   location: Location,
//   settings: LocalizeRouterSettings,
//   http: HttpClient
// ) {
//   return new LocalizeRouterHttpLoader(
//     translate,
//     location,
//     { ...settings, alwaysSetPrefix: true },
//     http
//   );
// }

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: 'second',
        loadChildren: () => import('./modules/second/second.module').then(m => m.SecondModule)
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'first',
        loadChildren: () => import('./modules/first/first.module').then(m => m.FirstModule)
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'first'
      },
      {
        path: '**',
        component: AppComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
    // LocalizeRouterModule.forRoot(routes, {
    //   parser: {
    //     provide: LocalizeParser,
    //     useFactory: HttpLoaderFactory,
    //     deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient]
    //   }
    // })
  ],
  exports: [
    RouterModule
    // LocalizeRouterModule
  ]
})
export class AppRoutingModule {}
