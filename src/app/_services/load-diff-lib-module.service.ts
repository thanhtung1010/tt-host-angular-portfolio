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
import { Observable, Subscriber, from } from "rxjs";

@Injectable({
  providedIn: 'root',
})

export class LoadDiffLibService {

  constructor(
    private appConfig: AppConfigService,
    private router: Router,
  ) {}

  loadRemoteModule(info: LoadRemoteModuleScriptOptions | LoadRemoteModuleEsmOptions | LoadRemoteModuleManifestOptions): Observable<any> {
    return new Observable<any>((subs: Subscriber<any>) => {
      from(loadRemoteModule(info)).subscribe({
        next: resp => {
          subs.next(resp);
          subs.complete();
        },
        error: error => {
          subs.error(error);
          subs.complete();
        }
      });
    });
  }

  createAppLoaded(componentLoaded: IComponentLoaded, name: string): any {
    try {
      if (componentLoaded.framework === 'vue' && componentLoaded.component.length) {
        return this.createVueApp(componentLoaded.component.find(elm => elm.name === name)?.renderer);
      }
      return undefined
    } catch (error) {
      console.log('error loadRemoteModule', error);
      return undefined;
    }
  }

  createVueApp(componentLoaded: any): App<Element> | undefined {
    try {
      return createApp(componentLoaded);
    } catch (error) {
      console.log('error loadRemoteModule', error);
      return undefined;
    }
  }
}

interface IComponentLoaded {
  framework: 'vue' | 'react';
  component: Array<{
    name: string,
    renderer: any
  }>;
}
