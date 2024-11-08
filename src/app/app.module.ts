import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FactoryAuthenticationService } from './Core/repository/factory';
import { API_URL_TOKEN, LOCALSTORAGE_ITEM_NAME } from './Core/repository/tokens';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide:API_URL_TOKEN,useValue:"http://localhost:1337/api"},
    {provide:LOCALSTORAGE_ITEM_NAME,useValue:"token"},
    FactoryAuthenticationService,
    provideHttpClient()
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
