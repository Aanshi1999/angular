import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HelpComponent } from './help/help.component';
import { CheckStatusComponent } from './check-status/check-status.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http'

const appRoutes :Routes=[
  {path:'',redirectTo:'login',pathMatch:'full' },
  {path:'login',component:LoginComponent },
  {path:'home',component:HomeComponent },
  {path:'about-us',component:AboutUsComponent },
  {path:'help',component:HelpComponent},
  {path:'check-status',component:CheckStatusComponent }
  
 

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    HelpComponent,
    CheckStatusComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
