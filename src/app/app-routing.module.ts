import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { FormComponent } from './form/form.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  {path:'',redirectTo:'form',pathMatch:"full"},
  {path:"form",component:FormComponent},
  {path:"images",component:ImagesComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
