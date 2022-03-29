import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { MainComponent } from './main/main.component';
import { NewCardComponent } from './new-card/new-card.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchSortingComponent } from './search/search-sorting/search-sorting.component';
import { SearchFilterComponent } from './search/search-filter/search-filter.component';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    AuthComponent,
    FourOhFourComponent,
    LoginComponent,
    LogoutComponent,
    MainComponent,
    NewCardComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SearchSortingComponent,
    SearchFilterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
