import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FactoryAuthenticationService } from './Core/repository/factory';
import { API_URL_TOKEN, LOCALSTORAGE_ITEM_NAME, RESOURCE_NAME_1, RESOURCE_NAME_2 } from './Core/repository/tokens';
import { provideHttpClient } from '@angular/common/http';
import { provideLottieOptions } from 'ngx-lottie';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide:API_URL_TOKEN,useValue:"http://localhost:1337/api"},
    {provide:LOCALSTORAGE_ITEM_NAME,useValue:"token"},
    {provide:RESOURCE_NAME_1,useValue:"personas"},
    {provide:RESOURCE_NAME_2,useValue:"grupos"},
    FactoryAuthenticationService,
    provideHttpClient(),
    provideLottieOptions({
      player: () => import('lottie-web'),
    })
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
