import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule  } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html'
})
export class AddEmployeeComponent implements OnInit {
    addForm: FormGroup;
    EmpId: string;
    title: string;
    employeeData: object;
    constructor(
        private appService: AppService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.intiForm();
        this.route.params.subscribe(params => {
            // tslint:disable-next-line:no-string-literal
            this.EmpId  = params['EmpId'];
            if (this.EmpId  !== '' ) {
                this.title = 'Edit Employees' ;
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
                console.log(res);
            }
        );
    }
    getEmployeeById(EmpId) {
        this.appService.getEmployeeById(EmpId).subscribe( res => {
            this.employeeData = res;
        });
    }
}
