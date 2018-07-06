import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { LoginService } from 'app/login.service';


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  public success : boolean = true;
  
  loggedIn = false;
  constructor(private router : Router, public service : LoginService) {
   
  }

 
  }
    


