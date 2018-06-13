import { Injectable } from '@angular/core';



@Injectable()
export class LoginService {
  visible : boolean;
  private success : boolean = false;
  private smallernav : boolean = false;

  constructor()
   { 
      this.visible = false;
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

   

