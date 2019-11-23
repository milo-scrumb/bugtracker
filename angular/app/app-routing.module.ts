import { NgModule }                           from '@angular/core';
import { Routes, RouterModule }               from '@angular/router';

import { AuthGuard }                          from './shared';

import { LoginComponent, ListTicketComponent }                      from './components/public';
import { UserView }                            from './components/user';
import { CreateTicketComponent }                   from './components/user';
import { RegisterComponent }                   from './components/user';
import { AssignTicketComponent, PromoteToTechComponent } from './components/admin';
import { UpdateTicketComponent } from './components/user';
import { AdoptTicketComponent, InviteUserComponent, ResolveTicketComponent } from './components/tech';

const routes: Routes = [
    { path: '', component: UserView, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'create-ticket', component: CreateTicketComponent },
    {path: 'update-ticket', component: UpdateTicketComponent},
    {path: 'assign-ticket', component: AssignTicketComponent},
    {path: 'promote-to-tech', component: PromoteToTechComponent},
    {path: 'list-ticket', component: ListTicketComponent},
    {path: 'adopt-ticket', component: AdoptTicketComponent},
    {path: 'invite-user', component: InviteUserComponent},
    {path: 'resolve-ticket', component: ResolveTicketComponent},
    { path: 'register', component: RegisterComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
