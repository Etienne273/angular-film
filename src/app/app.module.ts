// Modules
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppRoutingModule} from './app-routing.module';

// Components
import {AppComponent} from './app.component';
import {UsersComponent} from './components/user-list/users.component';
import {UserDetailComponent} from './components/user-list/details-user/user-detail.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserAddComponent} from './components/user-list/add-user/user-add.component';

import {VoorstellingListComponent} from './components/voorstelling-list/voorstelling-list.component';
import {VoorstellingAddComponent} from './components/voorstelling-list/add-voorstelling/voorstelling-add.component';


// Services
import {UserService} from './services/user.service';
import {VoorstellingService} from './services/voorstelling.service';
import {VoorstellingDetailComponent} from "./components/voorstelling-list/details-voorstelling/voorstelling-detail.component";


@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UsersComponent,
    VoorstellingListComponent,
    VoorstellingAddComponent,
    DashboardComponent,
    VoorstellingDetailComponent,
    UserAddComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, VoorstellingService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
