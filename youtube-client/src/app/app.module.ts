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
<<<<<<< HEAD

import { SelectedCardComponent } from './cards/selected-card/selected-card.component';
=======
import { ChangedCardComponent } from './cards/changed-card/changed-card.component';
>>>>>>> b0167ec (refactor: change structure of project)
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
<<<<<<< HEAD
    SelectedCardComponent,
=======
    ChangedCardComponent,
>>>>>>> b0167ec (refactor: change structure of project)
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
