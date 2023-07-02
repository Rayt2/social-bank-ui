import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const bearerToken =localStorage.getItem('app_token');

    let bearerHeader =request.clone({headers: request.headers.set('Authorization','bearer' +bearerToken)})
    return next.handle(request);
  }

 
}
