import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { LoginComponent } from './auth/login/login.component';

import { SearchComponent } from './header/search/search.component';
import { CreateCardComponent } from './cards/create-card/create-card.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortFilterComponent } from './header/sort-filter/sort-filter.component';
import { MatCardComponent } from './cards/mat-card/mat-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SearchPipe } from './cards/cards-list/search.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './cards/cards-list/filter.pipe';
import { SortPipe } from './cards/cards-list/sort.pipe';
import { CardPageComponent } from './card-page/card-page.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    LoginComponent,

    SearchComponent,
    PageErrorComponent,
    CreateCardComponent,
    UserProfileComponent,
    CardsListComponent,
    SearchPipe,
    FilterPipe,
    SortPipe,
    SortFilterComponent,
    MatCardComponent,
    CardPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
