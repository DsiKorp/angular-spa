import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SpaComponent } from './spa/spa.component';
import { SharedModule } from './shared/shared.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    SpaComponent,    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    SharedModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
