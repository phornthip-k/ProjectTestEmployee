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
    constructor(
        private appService: AppService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.appService.getEmployeeList().subscribe(res => {
            // if (res > 0 ) {
                this.employeeList = res;
            // }
            // console.log(res);
        });
    }
    AddEmployee() {
        this.router.navigate(['/add']);
    }
    GoToUpdate(rowData) {
        this.router.navigate(['/edit', rowData._id]);
    }
    Delete(rowData) {
        this.appService.deleteEmployee(rowData._id).subscribe( res => {
                console.log(res);
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
}
