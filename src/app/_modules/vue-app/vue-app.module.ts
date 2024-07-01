import { NgModule } from "@angular/core";
import { VueAppComponent } from "./vue-app.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: VueAppComponent,
    children: []
  },
];

@NgModule({
  declarations: [VueAppComponent],
  imports: [RouterModule.forChild(routes)]
})

export class VueAppModule {}
