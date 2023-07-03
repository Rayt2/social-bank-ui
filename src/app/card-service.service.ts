import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {
  public readonly url = 'http://localhost:8090';


  private cardNameSubject = new BehaviorSubject<any>({});
  selectedCardName = this.cardNameSubject.asObservable();


  setCardName(product: any) {
    this.cardNameSubject.next(product);
  }

  constructor(private httpClient:HttpClient) { }


  applyCard(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:8090/apply-new-card', data, {
      observe: 'response',
    }).pipe(
      tap(
        (data) => this.handleResponse(data),
        (error) => this.handleError(error)
      )
    );
  }

 


  getAllCardDetails(): Observable<any> {
    return this.httpClient.get(this.url + `/${"all-credit-card"}`).pipe(
      tap(
        (data) => this.handleResponse(data),
        (error) => this.handleError(error)
      )
    );
  }
  
  approvCard(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:8090/approve', data, {
      observe: 'response',
    }).pipe(
      tap(
        (data) => this.handleResponse(data),
        (error) => this.handleError(error)
      )
    );
  }

  cardDeti(data: any): Observable<any> {
    return this.httpClient.post('http://localhost:8090/approve', data, {
      observe: 'response',
    }).pipe(
      tap(
        (data) => this.handleResponse(data),
        (error) => this.handleError(error)
      )
    );
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
