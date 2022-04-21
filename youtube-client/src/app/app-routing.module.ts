import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { PageErrorComponent } from './core/pages/page-error/page-error.component';
import { YoutubeModule } from './youtube/youtube.module';
import { AuthModule } from './auth/auth.module';
import { ROUTH_PATHS } from './constants';
const routes: Routes = [
  {
    path: ROUTH_PATHS.AUTHORIZATION,
    loadChildren: (): Promise<AuthModule> => import('./auth/auth.module').then((x) => x.AuthModule),
  },
  { path: '', redirectTo: ROUTH_PATHS.HOME, pathMatch: 'full' },
  {
    path: ROUTH_PATHS.HOME,
    loadChildren: (): Promise<YoutubeModule> =>
      import('./youtube/youtube.module').then((x) => x.YoutubeModule),
    canActivate: [AuthGuard],
  },

  { path: '**', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
