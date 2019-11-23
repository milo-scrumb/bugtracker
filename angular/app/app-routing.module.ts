import { NgModule }                           from '@angular/core';
import { Routes, RouterModule }               from '@angular/router';

import { AuthGuard }                          from './shared';

import { LoginComponent }                      from './components/public';
import { UserView }                            from './components/user';
import { CreateTicketComponent }                   from './components/user';
import { RegisterComponent }                   from './components/user';

const routes: Routes = [
    { path: '', component: UserView, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'user/create-ticket', component: CreateTicketComponent },
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
