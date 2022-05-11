import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IVideoTransformed } from '../models/search-item.model';
import { YoutubeHttpService } from './youtube-http.service';
@Injectable({
  providedIn: 'root',
})
export class YoutubeService {
  constructor(public httpService: YoutubeHttpService) {}

  getVideoById(ids: string[]): Observable<IVideoTransformed[]> {
    return this.httpService.createSearchRequestCards(ids);
  }

  getVideoIds(query: string): Observable<string[]> {
    return this.httpService.createSearchRequestIds(query);
  }
}
