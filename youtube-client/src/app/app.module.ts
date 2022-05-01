import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './auth/guards/auth.guard';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { apiData } from './constants';
import { YoutubeInterceptorService } from './youtube/services/youtube-interceptor.service';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [
    AuthGuard,
    apiData,
    { provide: HTTP_INTERCEPTORS, useClass: YoutubeInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
