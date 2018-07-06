import { Component } from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {LoginService} from '../app/login.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
//loggedInn : boolean = false;

constructor(private service : LoginService, private router : Router) {
if (service.isLoggedIn == false)
  this.router.navigate(['']);


}
}


