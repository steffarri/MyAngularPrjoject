import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Route } from '@angular/router/src/config';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public imagepath = "/assets/travel2.jpg";
  constructor(private router : Router) {

  }

 
}

