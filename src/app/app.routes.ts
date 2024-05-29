import { loadRemoteModule } from '@angular-architects/module-federation';
import { inject } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { NotFoundComponent, ROUTE } from 'tt-library-angular-porfolio';

export const routes: Routes = [
  {
    path: ROUTE.PORTFOLIO,
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:8081/remoteEntry.js',
      exposedModule: './module'
    })
    .then(m => m.AppModule)
    .catch(error => inject(Router).navigate([ROUTE.NOT_FOUND])),
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
      console.log(error)
      inject(Router).navigate([ROUTE.NOT_FOUND]);
    }),
  },
  // {
  //   path: ROUTE.PORTFOLIO,
  //   loadChildren: () => import('@tt-portfolio/module').then(c => c.AppModule),
  // },
  {
    path: ROUTE.NOT_FOUND,
    component: NotFoundComponent,
  },
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
