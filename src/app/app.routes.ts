import { Routes } from '@angular/router';
import { ROUTE } from './_config/_enums/route.constant';

export const routes: Routes = [
  {
    path: ROUTE.PORTFOLIO,
    loadComponent: () => import('portfolio/component').then(c => c.AppComponent),
  },
  // {
  //   path: ROUTE.MANAGEMENT,
  //   loadComponent: () => import('management/component').then(c => c.AppComponent),
  // },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ROUTE.PORTFOLIO,
  },
];
