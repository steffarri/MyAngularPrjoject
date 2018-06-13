import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService } from '../app/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loggedIn : boolean = false;
  constructor(private router: Router, private service : LoginService) {

  }


  redirectToLoginForm()
  {
    this.router.navigate(['/login']);
  }
  redirectToNewUserForm() 
  {
    this.router.navigate(['newuser']);
  }
  
}

