import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from "../material/material.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MatSortModule } from '@angular/material/sort';
//import { MatTableModule } from '@angular/material/table';






@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    //MatTableModule,
    //MatSortModule
  ],
  exports: [
  ]
})
export class SharedModule { }
