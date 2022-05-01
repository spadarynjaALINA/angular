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
import { apiData } from '../constants';
import { YoutubeHttpService } from './services/youtube-http.service';
import { TitleLengthPipe } from './pipes/title-length.pipe';

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
  ],
  imports: [YoutubeRoutingModule, MatButtonModule, MatCardModule, MatIconModule, CommonModule],
  exports: [RouterModule],
  providers: [YoutubeService, apiData, YoutubeHttpService],
})
export class YoutubeModule {}
