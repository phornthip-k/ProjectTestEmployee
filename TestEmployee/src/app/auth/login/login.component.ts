import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Message} from 'primeng/components/common/api';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
    :host ::ng-deep button {
        margin-right: .25em;
    }

    :host ::ng-deep .ui-message,
    :host ::ng-deep .ui-inputtext {
        margin-right: .25em;
    }
`],
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    msgs: Message[] = [];
    error: string;
    constructor(
        private router: Router,
        private appService: AppService
    ) { this.initForm(); }

    ngOnInit(): void { }
    initForm() {
        this.loginForm = new FormGroup({
            username: new FormControl(null, [Validators.required]),
            password: new FormControl(null, [Validators.required])
        });
    }
    login() {
        const fv = this.loginForm.value;
        console.log(fv.username);
        if ((fv.username === null)  || (fv.password === null)) {
            this.msgs = [];
            this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Please input username or password'});
            // alert('please input username or password');
            // return false;
        }
        if ((fv.username === '') || (fv.password === '')) {
            this.msgs = [];
            this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Please input username or password'});
            // alert('please input username or password');
            // return false;
        }
        if (( fv.username !== null) && ( fv.password !== null)) {
            const str = fv.username + ':' + fv.password;
            console.log(str);
            const token = btoa(str);
            this.appService.verify(token).subscribe(res => {
                console.log(res);
                this.router.navigate(['/list']);
            },
            error => this.error = error);
        }
    }
    cancel() {
        this.loginForm.patchValue({
            username : null,
            password : null

        });
    }
}
