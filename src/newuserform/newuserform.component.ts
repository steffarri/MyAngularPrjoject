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
  public usernameError : boolean = false;
  public loading: boolean = false;
  public regexPattern = '^[a-zA-Z0-9._-]+$';
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

  OnSubmit(form : NgForm) {
    debugger;
    this.loading = true;
    this.service.registerUser(form.value)
    .subscribe((data:any) => {
      try {
      if(data.Succeeded == true)
      {
      this.resetForm();
      this.service.show();
      this.router.navigate(['home']);
      }
    }catch(ex) {
      if(this.user.UserName != '')
      this.usernameError = true;
    }
      this.loading = false;
    });
  }
  
}

