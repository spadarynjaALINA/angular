import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { CardPageComponent } from './youtube/pages/card-page/card-page.component';

import { PageErrorComponent } from './core/pages/page-error/page-error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./youtube/youtube.module').then((x) => x.YoutubeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'authorization',
    loadChildren: () => import('./auth/auth.module').then((x) => x.AuthModule),
  },
  { path: 'card/:index', canActivate: [AuthGuard], component: CardPageComponent },
  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
