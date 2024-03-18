import { Routes } from '@angular/router';
import { ROUTE } from './_config/_enums/route.constant';

export const routes: Routes = [
  {
    path: ROUTE.PORTFOLIO,
    loadChildren: () => import('@tt-portfolio/module').then(c => c.AppModule),
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
