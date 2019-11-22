import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/user/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor, ErrorInterceptor } from './shared';
import { LoginComponent } from './components/user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './shared';
import { AngularMaterialModule } from './material.module';
import { RegisterComponent } from './components/user/register/register.component';
import { AdoptTicketComponent } from './components/tech/home/adopt-ticket/adopt-ticket.component';
import { ResolveTicketComponent } from './components/tech/home/resolve-ticket/resolve-ticket.component';
import { InviteUserComponent } from './components/tech/home/invite-user/invite-user.component';
import { AssignTicketComponent } from './components/admin/home/assign-ticket/assign-ticket.component';
import { PromoteToTechComponent } from './components/admin/home/promote-to-tech/promote-to-tech.component';
import { PublicComponent } from './components/public/public.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// used to create fake backend
import { fakeBackendProvider } from './shared';

@NgModule({
  declarations: [
    AlertComponent,
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdoptTicketComponent,
    ResolveTicketComponent,
    InviteUserComponent,
    AssignTicketComponent,
    PromoteToTechComponent,
    PublicComponent
  ],
  imports: [
    AngularMaterialModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
