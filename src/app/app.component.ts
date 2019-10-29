import { AfterViewInit, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PerfumeAfterViewInit } from 'perfume.js/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// @PerfumeAfterViewInit('MainLayout')
export class AppComponent implements AfterViewInit {
  /**
   *
   */
  constructor(
    // translate: TranslateService
  ) {
    // add langs
    // translate.addLangs(['it', 'en']);
  }
  title = 'guess-test';
  ngAfterViewInit() {}
}
