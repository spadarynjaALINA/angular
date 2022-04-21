import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { CardsListPageComponent } from './pages/cards-list-page/cards-list-page.component';
import { ROUTH_PATHS } from './../constants';

const routes: Routes = [
  { path: '', component: CardsListPageComponent },
  { path: ROUTH_PATHS.CARD, canActivate: [AuthGuard], component: CardPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
