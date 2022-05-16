import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SortFilterComponent } from './components/sort-filter/sort-filter.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PageErrorComponent } from './pages/page-error/page-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { AppStateService } from '../youtube/services/app-state.service';
import { DataService } from '../youtube/services/data.service';
@NgModule({
  declarations: [
    HeaderComponent,
    PageErrorComponent,
    SearchComponent,
    SortFilterComponent,
    UserProfileComponent,
  ],
  imports: [
    RouterModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatExpansionModule,
    MatMenuModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent],
  providers: [AppStateService, DataService],
})
export class CoreModule {}
