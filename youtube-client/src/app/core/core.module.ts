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
import { FormsModule } from '@angular/forms';
import { ProtectedDirective } from '../shared/directives/protected.directive';
import { CreateCardComponent } from '../youtube/pages/create-card/create-card.component';

@NgModule({
  declarations: [
    CreateCardComponent,
    ProtectedDirective,
    HeaderComponent,
    PageErrorComponent,
    SearchComponent,
    SortFilterComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    MatExpansionModule,
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
