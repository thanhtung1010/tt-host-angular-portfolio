import { NgModule } from "@angular/core";
import { VueAppComponent } from "./vue-app.component";
import { RouterModule, Routes } from "@angular/router";
import { PageLayoutComponent } from "tt-library-angular-porfolio";

const routes: Routes = [
  {
    path: '',
    component: VueAppComponent,
    children: []
  },
];

@NgModule({
  declarations: [VueAppComponent],
  imports: [
    RouterModule.forChild(routes),
    PageLayoutComponent,
  ]
})

export class VueAppModule {}
