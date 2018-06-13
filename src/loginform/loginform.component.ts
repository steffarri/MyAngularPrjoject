import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { LoginService } from '../app/login.service';


@Component({
  selector: 'loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginFormComponent {

  constructor(private router : Router, private service: LoginService) {

  }
  ngOnInit() {
    
  }
  redirectToLogin() 
  {
    
    this.router.navigate(['']);
  }

  loginSubmit() {
    this.service.show();
    this.router.navigate(['home']);
    
  
  }
}

