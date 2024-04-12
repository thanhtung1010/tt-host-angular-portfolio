import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { environment } from '../environments/environment';
import { AppLoadingHelper, LangService } from 'tt-library-angular-porfolio';
import { Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'tt-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AngularSvgIconModule
  ],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, AfterViewInit {
  title: string = "SEO.TITLE";
  linkSVG = `assets/svg/icons.svg?v=${Date.now()}`;
  svgIconLink = `${environment.assetsUrl}${this.linkSVG}`;

  constructor(
    private titleSer: Title,
    private translateSer: TranslateService,
    private langSer: LangService,
  ) {}

  ngOnInit(): void {
    this.initService();

    this.translateSer.onLangChange.subscribe(resp => {
      this.translateSer.get(this.title).subscribe(resp => {
        this.titleSer.setTitle(resp);
      });
    });
  }

  initService() {
    this.langSer.init();
  }

  ngAfterViewInit(): void {
    const timeout = setTimeout(() => {
      AppLoadingHelper.Toggle(false);
      clearTimeout(timeout);
    }, 1000);
  }
}
