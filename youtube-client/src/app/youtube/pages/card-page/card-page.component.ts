import { Component, OnInit } from '@angular/core';
import { ISearchItem } from 'src/app/youtube/models/search-item.model';
import { Location } from '@angular/common';
import { YoutubeService } from '../../services/youtube.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.scss'],
})
export class CardPageComponent implements OnInit {
  constructor(
    public location: Location,
    private youtubeService: YoutubeService,
    private route: ActivatedRoute,
  ) {}

  public card: ISearchItem | undefined;

  ngOnInit() {
    const cardId = this.route.snapshot.params['index'];
    this.card = this.youtubeService.getCard(cardId);
  }

  goBack(): void {
    this.location.back();
  }
}
