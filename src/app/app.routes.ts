import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { NotFoundComponent, ROUTE } from 'tt-library-angular-porfolio';
import { createApp } from 'vue';

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
      location.href = `http://${location.host}/not-found`;
    }),
  },
  {
    path: ROUTE.MANAGEMENT,
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8082/remoteEntry.js',
      exposedModule: './module'
    })
    .then(m => m.AppModule)
    .catch(error => {
      console.log(error);
      location.href = `http://${location.host}/not-found`;
    }),
  },
  {
    path: ROUTE.ANIMATION_PORTFOLIO,
    loadChildren: () => import('./_modules/vue-app/vue-app.module')
    .then(m => m.VueAppModule)
    .catch(error => {
      console.log(error);
      location.href = `http://${location.host}/not-found`;
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
