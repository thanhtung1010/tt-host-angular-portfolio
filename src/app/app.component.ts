import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { environment } from '../environments/environment';
import { AppConfigService, AppLoadingHelper, DeviceIdService, FirebaseService, LangService, MenuService } from 'tt-library-angular-porfolio';
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
    private appConfig: AppConfigService,
    private deviceIdSer: DeviceIdService,
    private menuService: MenuService,
    private firebaseService: FirebaseService,
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
    this.appConfig.initAppConfig();
    this.langSer.init();
    // this.deviceIdSer.init();
    this.menuService.init();
    this.firebaseService.init();
  }

  ngAfterViewInit(): void {
    const timeout = setTimeout(() => {
      AppLoadingHelper.Toggle(false);
      this.menuService.scrollBody(true);
      this.appConfig.appInit = true;
      clearTimeout(timeout);
    }, 3000);
  }
}
