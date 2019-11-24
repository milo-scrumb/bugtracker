import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../services';
import { ListTicketComponent } from '../../public';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class UserView implements OnInit {

  currentUser: any;

  constructor(
      private authenticationService: AuthenticationService,
  ) {
      this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
  }

}
