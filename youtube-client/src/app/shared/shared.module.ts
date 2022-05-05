import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppStateService } from './app-state.service';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';

import { YoutubeService } from '../youtube/services/youtube.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [RouterModule],
  providers: [AppStateService, DataService, YoutubeService],
})
export class SharedModule {}
