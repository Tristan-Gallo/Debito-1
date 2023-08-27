import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScaffaleComponent } from './scaffale/scaffale.component';
import { CassettaComponent } from './cassetta/cassetta.component';

@NgModule({
  declarations: [
    AppComponent,
    ScaffaleComponent,
    CassettaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
