import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import {$} from 'jquery';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
i : any;
getTask : any;
taskObject : any;
theTask : string = "";


  constructor(private fm: FormsModule, private dialog: MatDialog, private el: ElementRef)
  {
    this.getTask = [];
    this.theTask = '';
    
  }
  @ViewChild('forEachTask') eachTask : any;
  
 
  public alertOn : boolean = false;
  public allDone = [];


 removeTask(i) {
    this.getTask.splice(i, 1);
 }




addingTask(i) {

  if(this.theTask === "")
  this.alertOn = true;
  else {

  this.taskObject = {
    theTask : this.theTask,
    completed : false
  }

      this.alertOn = false;
      this.getTask.push(this.taskObject);
      this.theTask = "";
  }

}



}

