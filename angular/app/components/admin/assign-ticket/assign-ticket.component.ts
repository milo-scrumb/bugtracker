import { Component, OnInit }          from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material";
import { first }                      from 'rxjs/operators';

import { AuthenticationService,
         UserService,
         TicketService  }         from '../../../services';

import { SelectDialogComponent } from '../../../shared';

@Component({
  selector: 'app-assign-ticket',
  templateUrl: './assign-ticket.component.html',
  styleUrls: ['./assign-ticket.component.scss']
})
export class AssignTicketComponent implements OnInit {

  currentUser: any;
  users = [];
  techs = [];
  tickets = [];

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private ticketService: TicketService,
    public dialog: MatDialog
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }

  openSelectDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      subject: 'Tech',
      values: this.loadAllTechs()
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(SelectDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log("Dialog output:", JSON.stringify(data))
    );
  }
  ngOnInit() {
      this.loadAllUsers();
      this.loadAllTickets();
  }

  private loadAllUsers() {
      this.userService.getAll()
          .pipe(first())
          .subscribe(users => this.users = users);
  }

  private loadAllTickets() {
      this.ticketService.getAll()
          .pipe(first())
          .subscribe(tickets => this.tickets = tickets);
  }

  private loadAllTechs() {
      return this.users.filter(function (e) {
        return e.tech == true;
      });
  }
}
