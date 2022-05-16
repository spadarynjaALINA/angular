import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppStateService } from '../youtube/services/app-state.service';
import { DataService } from '../youtube/services/data.service';
import { HttpClientModule } from '@angular/common/http';

import { YoutubeService } from '../youtube/services/youtube.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [RouterModule],
  providers: [AppStateService, DataService, YoutubeService],
})
export class SharedModule {}
