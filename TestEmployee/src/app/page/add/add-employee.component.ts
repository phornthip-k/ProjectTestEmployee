import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employeeModel } from 'src/app/model/employee.model';
import { formatDate } from '@angular/common';
import {Message} from 'primeng/components/common/api';


@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {
    addForm: FormGroup;
    EmpId: string;
    title: string;
    employeeData: any;
    modeEdit = false;
    error: string;
    msgs: Message[] = [];
    constructor(
        private appService: AppService,
        private route: ActivatedRoute,
        private roter: Router
    ) { }

    ngOnInit(): void {
        this.intiForm();
        this.route.params.subscribe(params => {
            // tslint:disable-next-line:no-string-literal
            this.EmpId  = params['EmpId'];
            if (this.EmpId  !== undefined ) {
                this.title = 'Edit Employees' ;
                this.modeEdit = true;
                this.getEmployeeById(this.EmpId);
            } else {
                this.title = 'Add Employees' ;
                // this.intiForm();
            }
        });
    }
    intiForm() {
        this.addForm = new FormGroup({
            firstname : new FormControl(null, [Validators.required]),
            lastname : new FormControl(null, [Validators.required]),
            birthday: new FormControl(null),
            // email: new FormControl(null, [Validators.required])
            // tslint:disable-next-line:quotemark
            email: new FormControl('', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
            }
        );
    }
    submit() {
        const fv = this.addForm.value;
        const BDate = formatDate(fv.birthday , 'yyyy-MM-dd', 'en-US', '+0530');
        this.appService.insertEmployee(fv.firstname, fv.lastname, BDate, fv.email).subscribe(
            res => {
                this.roter.navigate(['/list']);
            },
            error => this.error = error
            // this.msgs = [];
            // this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Please input username or password'});
        );
    }
    Update() {
        const fv = this.addForm.value;
        const BDate = formatDate(fv.birthday , 'yyyy-MM-dd', 'en-US', '+0530');
        this.appService.updateEmployee(fv.firstname, fv.lastname, BDate, fv.email, this.EmpId).subscribe(
            res => {
                // console.log(res);
                this.roter.navigate(['/']);
            },
            error => this.error = error
        );
    }
    getEmployeeById(EmpId) {
        this.appService.getEmployeeById(EmpId).subscribe( res => {
            this.employeeData = res;
            // console.log(res);
            this.addForm = new FormGroup({
                firstname : new FormControl(this.employeeData.firstname),
                lastname : new FormControl(this.employeeData.lastname),
                birthday: new FormControl( formatDate(this.employeeData.birthday , 'dd/MM/yyyy', 'en-US', '+0530') ),
                email: new FormControl(this.employeeData.email)
                }
            );
        });
    }
    Back() {
        this.roter.navigate(['/list']);
    }
}
