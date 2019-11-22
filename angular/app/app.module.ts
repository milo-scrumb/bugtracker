// imports from dependencies                   // alphabetized libs
import { NgModule }                            from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule }                 from '@angular/forms';
import { BrowserModule }                       from '@angular/platform-browser';
import { BrowserAnimationsModule }             from '@angular/platform-browser/animations';

// top level and shared imports                // alphabetized directories
import { AppComponent }                        from './app.component';
import { AppRoutingModule }                    from './app-routing.module';
import { AngularMaterialModule }               from './material.module';
import { AlertComponent }                      from './shared';
import { JwtInterceptor, ErrorInterceptor }    from './shared';

// component imports
import { HomeComponent }                       from './components/user';
import { LoginComponent }                      from './components/user';
import { RegisterComponent }                   from './components/user';
import { AdoptTicketComponent } from './components/tech/home/adopt-ticket/adopt-ticket.component';
import { ResolveTicketComponent } from './components/tech/home/resolve-ticket/resolve-ticket.component';
import { InviteUserComponent } from './components/tech/home/invite-user/invite-user.component';
import { AssignTicketComponent } from './components/admin/home/assign-ticket/assign-ticket.component';
import { PromoteToTechComponent } from './components/admin/home/promote-to-tech/promote-to-tech.component';
import { PublicComponent } from './components/public/public.component';

// used to create fake backend
import { fakeBackendProvider } from './shared';

@NgModule({
  declarations: [
    // alphabetized
    AdoptTicketComponent,
    AlertComponent,
    AppComponent,
    AssignTicketComponent,
    HomeComponent,
    InviteUserComponent,
    LoginComponent,
    PromoteToTechComponent,
    PublicComponent,
    RegisterComponent,
    ResolveTicketComponent
  ],
  imports: [
    // alphabetized
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
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
