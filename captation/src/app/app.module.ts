import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// serviços
import { AlertService } from './_services/alert.service';
import { RouteGuard } from './_guards/route.guard';
import { AlertComponent } from './_directives/alert/alert.component';
import { PreloadComponent } from './_directives/preload/preload.component';
import { FirebaseService } from './_services/firebase.service';


@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    PreloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AlertService,
    RouteGuard,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
