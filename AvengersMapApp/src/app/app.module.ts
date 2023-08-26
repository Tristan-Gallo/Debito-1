import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AvengersService } from './avengers.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvengersMapComponent } from './avengers-map/avengers-map.component';

@NgModule({
  declarations: [
    AppComponent,
    AvengersMapComponent
    
  ]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [AvengersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
