import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './cards/card/card.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './main/main.component';
import { SearchSortingComponent } from './header/search-sorting/search-sorting.component';
import { CreateCardComponent } from './cards/create-card/create-card.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';

import { CardPageComponent } from './cards/card-page/card-page.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    AuthComponent,
    LoginComponent,
    MainComponent,
    SearchSortingComponent,
    PageErrorComponent,
    CreateCardComponent,
    UserProfileComponent,
    CardsListComponent,

    CardPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
