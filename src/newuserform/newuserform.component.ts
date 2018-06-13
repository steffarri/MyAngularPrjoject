import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../app/login.service';
import { User } from '../app/user.model';
import { NgForm } from '@angular/forms';
import {MatInputModule, MatFormFieldModule} from '@angular/material';


@Component({
  selector: 'newuserform',
  templateUrl: './newuserform.component.html',
  styleUrls: ['./newuserform.component.scss']
})
export class NewUserFormComponent implements OnInit {
  user : User;

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  constructor(private router: Router, private service : LoginService) {

  }

  ngOnInit() {
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''}
  }

  resetForm(form?: NgForm) {
    if (form != null)
    form.reset();
    this.user = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
    
  }

  redirectToLogin() {
    this.router.navigate(['']);
  }

  loginSubmit() {
    this.service.show();
    this.router.navigate(['home']);
  }
  
}

