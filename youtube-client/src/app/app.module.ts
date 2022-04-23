import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { YoutubeService } from './youtube/services/youtube.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
  providers: [YoutubeService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
