import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterRouteChange = false;

    constructor(
      private router: Router,
      public snackBar: MatSnackBar
    ) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert message
                    this.clear();
                }
            }
        });
    }

    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    success(message: string, keepAfterRouteChange = false) {
      this.snackBar.open(message, '', {duration: 2000});
    }

    error(message: string, keepAfterRouteChange = false) {
      let config = new MatSnackBarConfig();
      config.duration = 2000;
      config.panelClass = ['warn-snackbar'];
      this.snackBar.open( message, '', config );
    }

    clear() {
        // clear by calling subject.next() without parameters
        this.subject.next();
    }
}
