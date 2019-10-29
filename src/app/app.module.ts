import { registerLocaleData } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import localeIt from '@angular/common/locales/it';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PerfumeModule } from 'perfume.js/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Perfume.js config, supports AOT and DI
export const PerfumeConfig = {
  firstContentfulPaint: true,
  firstPaint: true,
  firstInputDelay: true,
  dataConsumption: true,
  navigationTiming: true,
  // analytics
  browserTracker: true,
  // logging
  warning: true
};

// registerLocaleData(localeIt, 'it');

/**
 * translation loader
 */
// export function createTranslateLoader(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/locales/', '.json');
// }

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PerfumeModule.forRoot(PerfumeConfig),
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: createTranslateLoader,
    //     deps: [HttpClient]
    //   }
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
