import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { ToltalsalesComponent } from './toltalsales/toltalsales.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'showproducts',component:ShowproductsComponent},
  {path:'totalsales',component:ToltalsalesComponent},
  {path:'login',component:LoginReactiveFormComponent},
  {path:'Home',component:HomeComponent},

  //To handle error pages
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
