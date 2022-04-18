import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import { Location } from '@angular/common';
import { YoutubeService } from '../../services/youtube.service';
@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public location: Location,
    private youtubeService: YoutubeService,
  ) {}

  public card: ISearchItem;

  ngOnInit() {
    this.card = this.youtubeService.card;
  }

  goBack() {
    this.location.back();
  }
}
