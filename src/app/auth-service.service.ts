import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, BehaviorSubject, Observable, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private httpClient:HttpClient) { }

login(data: any): Observable<any> {
  console.log(data)
  return this.httpClient.post('http://localhost:8090/authenticate', data, {
    observe: 'response',
  }).pipe(
    tap(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    )
  );
}
isUserlogIn(){
  return !!localStorage.getItem('app_token');

}



/**
   * Handles api response
   * @param response
   */
handleResponse(response: any) {
  if (response.status === 204) {
    return {};
  } else {
    return response.body;
  }
}

/**
 * Handles api error
 * @param error 
 */
handleError(error: HttpErrorResponse) {
  if (error.status == 401) {
    return throwError(error.error);
  } else if (error.status == 500) {
    return throwError(error.error);
  } else if (error.status == 403) {
    return throwError(error);
  } else {
    return throwError(
      error.error || "Something has gone wrong. Please contact support."
    );

  }
}

}
