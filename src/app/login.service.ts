import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule, HttpParams } from '@angular/common/http';
import { Response, Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';




@Injectable()
export class LoginService {
  visible : boolean;
  private headers : HttpHeaders;
  private success : boolean = false;
  private smallernav : boolean = false;
  readonly rooturl = "http://localhost:49749/";
  public newData;


  constructor(private http : HttpClient, private gethttp : HttpClientModule)
   { 
      this.visible = false;
      this.headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
      
   }

   registerUser(user : User) {
      const body : User = {
        UserName : user.UserName,
        Password : user.Password,
        Email : user.Email,
        FirstName : user.FirstName,
        LastName : user.LastName
      }

      return this.http.post(this.rooturl + 'api/User/Register', body);
   }

   getUser(user : User) {
    const body : User = {
      UserName : user.UserName,
      Password : user.Password,
      Email : '',
      FirstName : '',
      LastName : ''
    }

    let params = new HttpParams();
    params = params.append('username', body.UserName.toString());

     
     
       return this.http.post(this.rooturl + 'api/User/GetUser', body);
   }


  hide(){
    this.visible = false;
  }

  show() {
    this.visible = true;
  }

  toggle() {
    this.visible = !this.visible;
  }
     
     
   }

   

