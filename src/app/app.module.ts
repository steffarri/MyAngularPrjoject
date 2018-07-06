import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { allResolved } from 'q';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { LoginFormComponent } from '../loginform/loginform.component';
import { NewUserFormComponent } from '../newuserform/newuserform.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { LoginService } from '../app/login.service';
import { AboutComponent } from '../about/about.component';
import { DestinationsComponent } from '../destinations/destinations.component';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { MarkersInfoComponent } from '../destinations/markersinfo';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpHeaders, HttpClient} from '@angular/common/http';





const allRoutes : Routes = [
{path: '', component: LoginComponent},
{path: 'login', component: LoginFormComponent},
{path: 'home', component: HomeComponent},
{path: 'newuser', component: NewUserFormComponent},
{path: 'about', component: AboutComponent},
{path: 'destinations', component: DestinationsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LoginFormComponent,
    NewUserFormComponent,
    NavigationComponent,
    AboutComponent,
    DestinationsComponent,
    MarkersInfoComponent
    
    
  ],
  imports: [
    RouterModule.forRoot(allRoutes, {enableTracing: true}),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
   
    
    CommonModule,
    BrowserAnimationsModule,
    MaterialAppModule,
   
    AgmCoreModule.forRoot({ 
      apiKey: 'AIzaSyDgn91x_6QI4Ui5ER8olgGHguHlL82FHVY'
    })
   
  ],
  providers: [LoginService, MarkersInfoComponent, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
