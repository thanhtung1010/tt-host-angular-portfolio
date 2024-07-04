import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { LoadDiffLibService } from '../../_services';
import { App } from 'vue';
import { AppConfigService } from 'tt-library-angular-porfolio';

@Component({
  selector: 'tt-vue-app',
  templateUrl: './vue-app.component.html',
})
export class VueAppComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('vueContent', { static: false }) vueContent!: ElementRef<HTMLDivElement>;
  vueApp: App<Element> | undefined;
  vueAppName: string = 'animation-vue-component';

  constructor(
    private loadLibService: LoadDiffLibService,
    private appConfigService: AppConfigService
  ) { }

  ngOnInit() { }

  ngAfterViewInit(): void {
    this.loadLibService.loadRemoteModule({
      type: 'script',
      remoteEntry: 'http://localhost:8084/remoteEntry.js',
      remoteName: 'VueApp',
      exposedModule: './component',
    }).subscribe({
      next: resp => {
        const _default = resp?.default;
        if (_default) {
          this.vueApp = this.loadLibService.createAppLoaded(_default, this.vueAppName);
        }

        if (this.vueApp) {
          this.vueApp.mount(this.vueContent.nativeElement);
        }
      },
      error: error => {
        console.log(error);
        location.href = `${this.appConfigService.appConfig.assetsUrl}/not-found`;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.vueApp) {
      this.vueApp.unmount();
    }
  }

}
