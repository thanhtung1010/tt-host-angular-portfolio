import { ElementRef, Injectable } from "@angular/core";
import { AppConfigService } from "tt-library-angular-porfolio";
import {
  LoadRemoteModuleEsmOptions,
  LoadRemoteModuleManifestOptions,
  LoadRemoteModuleScriptOptions,
  loadRemoteModule,
} from '@angular-architects/module-federation';
import { Router } from "@angular/router";
import { App, createApp } from "vue";

@Injectable({
  providedIn: 'root',
})

export class LoadDiffLibService {

  constructor(
    private appConfig: AppConfigService,
    private router: Router,
  ) {}

  loadRemoteModule(info: LoadRemoteModuleScriptOptions | LoadRemoteModuleEsmOptions | LoadRemoteModuleManifestOptions): any {
    return loadRemoteModule(info)
      .then(m => m)
      .catch(error => {
        console.log('error loadRemoteModule', error);
        return undefined;
      });
  }

  createVueApp(component: any): App<Element> | undefined {
    try {
      return createApp(component);
    } catch (error) {
      console.log('error loadRemoteModule', error);
      return undefined;
    }
  }
}
