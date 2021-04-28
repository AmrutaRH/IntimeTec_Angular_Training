import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployersComponent } from './employers/employers.component';
import { FormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    EmployersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
