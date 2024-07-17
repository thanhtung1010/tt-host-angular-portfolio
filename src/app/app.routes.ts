import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import {
  NotFoundComponent,
  ROUTE,
  authActiveGuard,
  managementActiveGuard,
  winfitOnlineActiveGuard,
} from 'tt-library-angular-porfolio';
import { environment } from '../environments/environment';

export const routes: Routes = [
  {
    path: ROUTE.PORTFOLIO,
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8081/remoteEntry.js',
      exposedModule: './module'
    })
    .then(m => m.AppModule)
    .catch(error => {
      console.log(error);
      location.href = `${environment.assetsUrl}not-found`;
    }),
  },
  {
    path: ROUTE.AUTH,
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8082/remoteEntry.js',
      exposedModule: './module'
    })
    .then(m => m.AppModule)
    .catch(error => {
      console.log(error);
      location.href = `${environment.assetsUrl}not-found`;
    }),
    canActivate: [authActiveGuard]
  },
  {
    path: ROUTE.CMS,
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8083/remoteEntry.js',
      exposedModule: './module'
    })
    .then(m => m.AppModule)
    .catch(error => {
      console.log(error);
      location.href = `${environment.assetsUrl}not-found`;
    }),
    canActivate: [managementActiveGuard],
  },
  {
    path: ROUTE.WINFIT_ONLINE,
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8085/remoteEntry.js',
      exposedModule: './module'
    })
    .then(m => m.AppModule)
    .catch(error => {
      console.log(error);
      location.href = `${environment.assetsUrl}not-found`;
    }),
    canActivate: [winfitOnlineActiveGuard]
  },
  {
    path: ROUTE.ANIMATION_PORTFOLIO,
    loadChildren: () => import('./_modules/vue-app/vue-app.module')
    .then(m => m.VueAppModule)
    .catch(error => {
      console.log(error);
      location.href = `${environment.assetsUrl}not-found`;
    }),
  },
  {
    path: ROUTE.NOT_FOUND,
    component: NotFoundComponent,
  },
  // {
  //   path: ROUTE.NOT_FOUND,
  //   loadComponent: () => loadRemoteModule({
  //     type: 'script',
  //     remoteEntry: 'http://localhost:8084/remoteEntry.js',
  //     remoteName: 'NotFound',
  //     exposedModule: './component',
  //   })
  //   .then(m => {
  //     console.log(m.default?.component);
  //     return m.default?.component ? createApp(m.default?.component) as any : NotFoundComponent;
  //   })
  //   .catch(error => {
  //     console.log(error)
  //     return NotFoundComponent;
  //   }),
  // },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: ROUTE.PORTFOLIO,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ROUTE.NOT_FOUND,
  },
];
