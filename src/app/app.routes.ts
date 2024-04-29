import { Routes } from '@angular/router';
import { NotFoundComponent, ROUTE } from 'tt-library-angular-porfolio';

export const routes: Routes = [
  {
    path: ROUTE.PORTFOLIO,
    loadChildren: () => import('@tt-portfolio/module').then(c => c.AppModule),
  },
  // {
  //   path: ROUTE.MANAGEMENT,
  //   loadChildren: () => import('@tt-auth/module').then(c => c.AppModule),
  // },
  // {
  //   path: ROUTE.MANAGEMENT,
  //   loadComponent: () => import('management/component').then(c => c.AppComponent),
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
