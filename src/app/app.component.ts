import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { environment } from '../environments/environment';

@Component({
  selector: 'tt-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AngularSvgIconModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title: string = "SEO.TITLE";
  linkSVG = `assets/svg/icons.svg?v=${Date.now()}`;
  svgIconLink = `${environment.ASSETS_URL}${this.linkSVG}`;

  constructor() {}
}
