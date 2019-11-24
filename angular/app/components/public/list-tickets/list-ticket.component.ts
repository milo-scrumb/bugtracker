import { Component, OnInit }          from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { first }                      from 'rxjs/operators';

import { TicketService, AuthenticationService } from '../../../services';

import { ConfirmDialogComponent } from '../../shared';

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
    private ticketService: TicketService,
    public dialog: MatDialog
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }

  openConfirmDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(ConfirmDialogComponent, dialogConfig);
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
