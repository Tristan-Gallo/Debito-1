import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrivingListComponent } from './driving-list/driving-list.component';
import { RentedComponent } from './rented/rented.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivingListComponent,
    RentedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
