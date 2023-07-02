import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {
  token: any;

  constructor() {}

  // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   const bearerToken =localStorage.getItem('app_token');

  //   let bearerHeader =request.clone({headers: request.headers.set('Authorization','bearer' +bearerToken)})
  //   return next.handle(request);

    
  // }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {  
     this.token =localStorage.getItem('app_token')?.replace(/['"]+/g, '');

let skipIntercept =true;
    if (
      request.url === "http://localhost:8090/authenticate"
    ){
       skipIntercept = request.headers.has('skip');

    }
   if (skipIntercept) {
     // If we have a token, we set it to the header
     request = request.clone({
         setHeaders: {Authorization: "Bearer " + this.token}

     });
  }

  return next.handle(request).pipe(
  	catchError((err) => {
   	 if (err instanceof HttpErrorResponse) {
       	 if (err.status === 401) {
       	 // redirect user to the logout page
     	}
 	 }
  	return throwError(err);
	})
   )
  }
}


 
  

