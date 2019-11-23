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
import { AdminView }                           from './components/admin';
import { AssignTicketComponent }               from './components/admin';
import { PromoteToTechComponent }              from './components/admin';
import { PublicView }                          from './components/public';
import { ListTicketComponent }                 from './components/public';
import { LoginComponent }                      from './components/public';
import { UserView }                            from './components/user';
import { CreateTicketComponent }                   from './components/user';
import { RegisterComponent }                   from './components/user';
import { TechView }                            from './components/tech';
import { AdoptTicketComponent }                from './components/tech';
import { InviteUserComponent }                 from './components/tech';
import { ResolveTicketComponent }              from './components/tech';
import { UpdateTicketComponent }               from './components/user';

// used to create fake backend
// import { fakeBackendProvider } from './shared';

@NgModule({
  declarations: [
    // alphabetized views
    AdminView,
    PublicView,
    UserView,
    TechView,
    // alphabetized components
    AdoptTicketComponent,
    AlertComponent,
    AppComponent,
    AssignTicketComponent,
    CreateTicketComponent,
    InviteUserComponent,
    ListTicketComponent,
    LoginComponent,
    PromoteToTechComponent,
    RegisterComponent,
    ResolveTicketComponent,
    UpdateTicketComponent,
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
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
