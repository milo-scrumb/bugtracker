import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { TicketService, AuthenticationService } from '../../../services';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss']
})
export class ListTicketComponent implements OnInit {

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

    private loadAllTickets() {
        this.ticketService.getAll()
            .pipe(first())
            .subscribe(tickets => this.tickets = tickets);
    }
}
