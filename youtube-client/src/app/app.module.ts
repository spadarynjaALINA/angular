import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { LoginComponent } from './auth/login/login.component';

import { SearchSortingComponent } from './header/search-sorting/search-sorting.component';
import { CreateCardComponent } from './cards/create-card/create-card.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { MatExpansionModule } from '@angular/material/expansion';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchFilterComponent } from './header/search-filter/search-filter.component';
import { MatCardComponent } from './cards/mat-card/mat-card.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SearchPipe } from './cards/cards-list/card-list.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPanelPipe } from './cards/cards-list/panel-input.pipe';
import { SearchSort } from './cards/cards-list/search-sort.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    LoginComponent,

    SearchSortingComponent,
    PageErrorComponent,
    CreateCardComponent,
    UserProfileComponent,
    CardsListComponent,
    SearchPipe,
    SearchPanelPipe,
    SearchSort,
    SearchFilterComponent,
    MatCardComponent,
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
