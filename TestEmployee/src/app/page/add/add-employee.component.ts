import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employeeModel } from 'src/app/model/employee.model';


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
            email: new FormControl(null, [Validators.required])
            }
        );
    }
    submit() {
        const fv = this.addForm.value;
        console.log(fv);
        this.appService.insertEmployee(fv.firstname, fv.lastname, fv.birthday, fv.email).subscribe(
            res => {
                this.roter.navigate(['/']);
            }
        );
    }
    Update() {
        const fv = this.addForm.value;
        this.appService.updateEmployee(fv.firstname, fv.lastname, fv.birthday, fv.email, this.EmpId).subscribe(
            res => {
                // console.log(res);
                this.roter.navigate(['/']);
            }
        );
    }
    getEmployeeById(EmpId) {
        this.appService.getEmployeeById(EmpId).subscribe( res => {
            this.employeeData = res;
            // console.log(res);
            this.addForm = new FormGroup({
                firstname : new FormControl(this.employeeData.firstname),
                lastname : new FormControl(this.employeeData.lastname),
                birthday: new FormControl(this.employeeData.birthday),
                email: new FormControl(this.employeeData.email)
                }
            );
        });
    }
}
