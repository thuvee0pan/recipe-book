import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './components/shared/shared.module';
import { ShoppingListModule } from './components/shopping-list/shopping-list.module';
import { RoutingModule } from './app-routing.module';
import { AuthModule } from './components/auth/auth.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,  
    HttpClientModule,
    ShoppingListModule,
    AuthModule,
    SharedModule,
    RoutingModule,
    SharedModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
