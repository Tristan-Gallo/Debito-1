import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core'; // Importa AgmCoreModule
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'LA_TUA_CHIAVE_API', // Sostituisci con la tua chiave API Google Maps
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
