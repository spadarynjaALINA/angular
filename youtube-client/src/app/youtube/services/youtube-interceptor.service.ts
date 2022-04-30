import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class YoutubeInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({ url: `${environment.API_URL}/${req.url}` });
    console.log(request);
    return next.handle(request).pipe(tap((event) => console.log(event, 'event')));
    // .catch((error) => {
    // return Observable.throw(error);
    // });
  }
}
