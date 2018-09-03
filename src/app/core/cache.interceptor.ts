import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { HttpCacheService } from './http-cache.service';

@Injectable({
  providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

  constructor(
    private cache: HttpCacheService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('url: ', req.url);
    console.log('method: ', req.method);
    console.log('body: ', req.body);

    // SET UP AND TESTING ONLY
    // invalidate the cache and return if anything but a GET
    if (req.method !== 'GET') {
      console.log('invalidate chache');
      this.cache.invalidateCache();
      return next.handle(req);
    }

    // attempt to receive cached response
    const cachedResponse: HttpResponse<any> = this.cache.get(req.url);

    // return cached response
    // NO next.handle!!!!!
    if (cachedResponse) {
      console.log('returning cached response: ', cachedResponse.url);
      console.log(cachedResponse);
      return of(cachedResponse);
    }

    // send request to server and add response to cache
    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log('Adding item to chache: ', req.url);
          this.cache.put(req.url, event);
        }
      })
    );
  }
}
