import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../components/shared/shared.module';
import { RoutingModule } from '../app-routing.module';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../components/shared/auth.interceptor';
import { LoggingInterceptor } from '../components/shared/logging.intercetor';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule,
    ToastrModule.forRoot() 
  ],
  exports: [
    RoutingModule,
    HeaderComponent,
    ToastrModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide:HTTP_INTERCEPTORS, useClass:LoggingInterceptor , multi: true}

  ]
})
export class CoreModule { }
