import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DummyApi } from './model/dummy-api.model';


@Injectable()
export class AppService {
    constructor(
        private httpClient: HttpClient
        //  @Inject(APP_CONFIG) private config: AppConfig
      ) { }
      verify(token: string ) {
        // btoa()
        const url = `https://dummy-api.cm.edu/employees/`;
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              // tslint:disable-next-line:object-literal-key-quotes
              'Authorization': 'Basic ' + token
            })
          };
        return this.httpClient.get(url, httpOptions).pipe(map(data => data), catchError(this.handleError));
      }
      getEmployeeList() {
        const url = `https://dummy-api.cm.edu/employees/`;
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              // tslint:disable-next-line:object-literal-key-quotes
              'Authorization': 'Basic dXNlcjI0OnQzNFJlaXNoMkhRUjRGY0tuTE5L'
            })
          };
        return this.httpClient.get(url, httpOptions).pipe(map(data => data), catchError(this.handleError));
      }
      getEmployeeById(EmpId: number) {
        const url = `https://dummy-api.cm.edu/employees/${EmpId}`;
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              // tslint:disable-next-line:object-literal-key-quotes
              'Authorization': 'Basic dXNlcjI0OnQzNFJlaXNoMkhRUjRGY0tuTE5L'
            })
          };
        return this.httpClient.get(url, httpOptions).pipe(map(data => data));
      }
      insertEmployee(firstname: string , lastname: string, birthday: string, email: string) {
        const url = `https://dummy-api.cm.edu/employees/`;
        // const body = ``;
        const body = {
          // tslint:disable-next-line:quotemark
          "firstname": firstname,
          // tslint:disable-next-line:quotemark
          "lastname": lastname,
          // tslint:disable-next-line:quotemark
          "birthday": birthday,
          // tslint:disable-next-line:quotemark
          "email": email
        };
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              // tslint:disable-next-line:object-literal-key-quotes
              'Authorization': 'Basic dXNlcjI0OnQzNFJlaXNoMkhRUjRGY0tuTE5L'
            })
          };
        return this.httpClient.post(url, body, httpOptions).pipe(map(data => data));
      }
      updateEmployee(firstname: string , lastname: string, birthday: string, email: string, id: string) {
        const url = `https://dummy-api.cm.edu/employees/${id}`;
        const body = {
          // tslint:disable-next-line:quotemark
          "firstname": firstname,
          // tslint:disable-next-line:quotemark
          "lastname": lastname,
          // tslint:disable-next-line:quotemark
          "birthday": birthday,
          // tslint:disable-next-line:quotemark
          "email": email
        };
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              // tslint:disable-next-line:object-literal-key-quotes
              'Authorization': 'Basic dXNlcjI0OnQzNFJlaXNoMkhRUjRGY0tuTE5L'
            })
          };
        return this.httpClient.put(url, body, httpOptions).pipe(map(data => data));
      }
      deleteEmployee(EmpId: number) {
        const url = `https://dummy-api.cm.edu/employees/${EmpId}`;
        const body = ``;
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              // tslint:disable-next-line:object-literal-key-quotes
              'Authorization': 'Basic dXNlcjI0OnQzNFJlaXNoMkhRUjRGY0tuTE5L'
            })
          };
        return this.httpClient.delete(url, httpOptions).pipe(map(data => data));
      }
      // handleError(error: HttpErrorResponse) {
      //   console.log('Error ');
      //   return throwError(error);
      // }
      handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }
}
