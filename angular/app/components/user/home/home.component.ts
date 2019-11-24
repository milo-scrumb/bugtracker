import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { TicketService, AuthenticationService } from '../../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class UserView implements OnInit {
    currentUser: any;
    tickets = [];

    constructor(
        private authenticationService: AuthenticationService,
        private ticketService: TicketService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllTickets();
    }

    deleteUser(id: number) {
        this.ticketService.delete(id)
            .pipe(first())
            .subscribe(() => this.loadAllTickets());
    }

    private loadAllTickets() {
        this.ticketService.getAll()
            .pipe(first())
            .subscribe(tickets => this.tickets = tickets);
    }
}
