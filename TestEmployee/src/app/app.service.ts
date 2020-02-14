import { Injectable } from '@angular/core';

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
        return this.httpClient.get(url, httpOptions).pipe(data => data);
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
        return this.httpClient.get(url, httpOptions).pipe(data => data);
      }
      insertEmployee(firstname: string , lastname: string, birthday: string, email: string) {
        const url = `https://dummy-api.cm.edu/employees/`;
        // const body = ``;
        const body = {
          "firstname": firstname,
          "lastname": lastname,
          "birthday": birthday,
          "email": email
          
        }

        // const body: JSON.stringify({"firstname":"11Charitys","lastname":"12Kuphalererer","birthday":"2543-10-14","email":"TEEEBetsy.Bayer@gmail.com"})
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              // tslint:disable-next-line:object-literal-key-quotes
              'Authorization': 'Basic dXNlcjI0OnQzNFJlaXNoMkhRUjRGY0tuTE5L'
            })
          };
        return this.httpClient.post(url, body, httpOptions).pipe(data => data);
      }
      updateEmployee(firstname: string , lastname: string, birthday: string, email: string, _id: string) {
        const url = `https://dummy-api.cm.edu/employees//${_id}`;
        const body = {
          "firstname": firstname,
          "lastname": lastname,
          "birthday": birthday,
          "email": email
          
        }
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
        const url = `https://dummy-api.cm.edu/employees/` + EmpId;
        const body = ``;
        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json',
              // tslint:disable-next-line:object-literal-key-quotes
              'Authorization': 'Basic dXNlcjI0OnQzNFJlaXNoMkhRUjRGY0tuTE5L'
            })
          };
        return this.httpClient.delete(url, httpOptions).pipe(data => data);
      }
}
