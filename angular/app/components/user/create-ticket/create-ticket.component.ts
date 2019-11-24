import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService, TicketService } from '../../../services'

@Component({templateUrl: 'create-ticket.component.html'})
export class CreateTicketComponent implements OnInit {
    author: any;
    createTicketForm: FormGroup;
    currentUser: any;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private alertService: AlertService,
        private authenticationService: AuthenticationService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private ticketService: TicketService
    ) {
      this.currentUser = this.authenticationService.currentUserValue;
      this.author = {
      	id: this.currentUser._id,
      	username: this.currentUser.username
      };
    }

    ngOnInit() {
        this.createTicketForm = this.formBuilder.group({
            issue: ['', Validators.required],
            description: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.createTicketForm.controls; }

    onSubmit() {
        this.submitted = true;

        // reset alerts on submit
        this.alertService.clear();

        // stop here if form is invalid
        if (this.createTicketForm.invalid) {
            return;
        }

        this.loading = true;

        this.ticketService.create(this.author, this.f.issue.value, this.f.description.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
