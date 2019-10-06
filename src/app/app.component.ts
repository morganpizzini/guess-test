import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'guess-test';
  /**
   *
   */
  constructor(
    translate: TranslateService) {
    // add langs
    translate.addLangs(['it', 'en']);

  }
}
