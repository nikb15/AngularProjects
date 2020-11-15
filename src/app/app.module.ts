import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';
import { ShowproductsComponent } from './showproducts/showproducts.component';
import { ToltalsalesComponent } from './toltalsales/toltalsales.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginReactiveFormComponent,
    ShowproductsComponent,
    ToltalsalesComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
