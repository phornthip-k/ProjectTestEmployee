import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {
    constructor(
        private httpClient: HttpClient
        //  @Inject(APP_CONFIG) private config: AppConfig
      ) { }
      getEmployeeList() {
        const url = `https://dummy-api.cm.edu/employees/`;
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              // tslint:disable-next-line:object-literal-key-quotes
              'Authorization': 'Basic dXNlcjI0OnQzNFJlaXNoMkhRUjRGY0tuTE5L'
            })
          };
        return this.httpClient.get(url, httpOptions).pipe(map(data => data));
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
        return this.httpClient.put(url, body, httpOptions).pipe(data => data);
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
}
