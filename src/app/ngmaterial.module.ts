import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatButtonToggleChange, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatCheckboxModule, MatIconModule, MatButtonToggleModule, MatMenuModule, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule],
  exports: [MatButtonModule, MatToolbarModule, MatCheckboxModule, MatIconModule, MatButtonToggleModule, MatMenuModule, MatCardModule, MatDialogModule, MatInputModule, MatFormFieldModule]
})
export class MaterialAppModule { }