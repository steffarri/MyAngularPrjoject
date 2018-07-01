import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';
import { LoginService } from '../app/login.service';
import { User } from '../app/user.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginFormComponent implements OnInit {
  getUser : User;
  user: User;
  public userobject : any;
  public username : string;
  public password: string;
  public error: boolean = false;

  constructor(private router : Router, private service: LoginService) {

  }
  ngOnInit() {
    this.getUser = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''}
  }

  resetForm(form?: NgForm) {
    if (form != null)
    form.reset();
    this.getUser = {
      UserName: '',
      Password: '',
      Email: '',
      FirstName: '',
      LastName: ''
    }
    
  }
  redirectToLogin() 
  {
    
    this.router.navigate(['']);
  }
  
  loginSubmit(form: NgForm) {
   
    
    this.service.getUser(form.value)
        .subscribe((data: any) => {
      try {
        console.log(data);
        if(data == null)
        {
          this.error = true;
          return;
        }
        if(data.UserName != null ) {
        this.resetForm();
        this.service.show();
    this.router.navigate(['home']);
        }
        else
        alert("something went wrong");
      } catch(ex) {
        var error = ex.toString();
        console.log(error);
      }
    });
  }
}

