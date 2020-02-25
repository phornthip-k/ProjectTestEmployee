import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
    selector: 'app-page',
    templateUrl: './app-page.component.html'
})
export class AppPageComponent implements OnInit {
    employeeList: object;
    addForm: FormGroup;
    error: string;
    constructor(
        private appService: AppService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.appService.getEmployeeList().subscribe(res => {
            // if (res.status === '200') {
            this.employeeList = res;
           //  }
            // if (res > 0 ) {
            // }
            console.log(res);
        },
        error => this.error = error );
    }
    AddEmployee() {
        this.router.navigate(['/add']);
    }
    GoToUpdate(rowData) {
        this.router.navigate(['/edit', rowData._id]);
    }
    Delete(rowData) {
        this.appService.deleteEmployee(rowData._id).subscribe( res => {
                this.GetEmployeeList();
            });
    }
    GetEmployeeList() {
        this.appService.getEmployeeList().subscribe(res => {
            // if (res > 0 ) {
                this.employeeList = res;
            // }
            // console.log(res);
        });
    }
    logout() {
        this.router.navigate(['']);
    }
}
