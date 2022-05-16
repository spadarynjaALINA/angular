import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardsListPageComponent } from './pages/cards-list-page/cards-list-page.component';
import { MatCardComponent } from './components/mat-card/mat-card.component';
import { ColorDirective } from './directives/color.directive';
import { CardStatisticComponent } from './components/card-statistic/card-statistic.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { YoutubeService } from './services/youtube.service';

import { YoutubeHttpService } from './services/youtube-http.service';
import { TitleLengthPipe } from './pipes/title-length.pipe';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { Reducer } from '../redux/reducer';
import { EffectsModule } from '@ngrx/effects';
import { Effects } from '../redux/effects.service';

@NgModule({
  declarations: [
    CardsListPageComponent,
    MatCardComponent,
    ColorDirective,
    CardStatisticComponent,
    SearchPipe,
    FilterPipe,
    SortPipe,

    TitleLengthPipe,
    CardPageComponent,
    AdminPageComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    YoutubeRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    StoreModule.forFeature('youtubeState', Reducer),
    EffectsModule.forFeature([Effects]),
  ],
  exports: [RouterModule],
  providers: [YoutubeService, YoutubeHttpService],
})
export class YoutubeModule {}
