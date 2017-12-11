import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent}   from './components/dashboard/dashboard.component';
import {UsersComponent}      from './components/user-list/users.component';
import {UserDetailComponent}  from './components/user-list/details-user/user-detail.component';
import {UserAddComponent} from './components/user-list/add-user/user-add.component';

import {VoorstellingListComponent} from './components/voorstelling-list/voorstelling-list.component';
import {VoorstellingAddComponent} from './components/voorstelling-list/add-voorstelling/voorstelling-add.component';

import {VoorstellingDetailComponent} from "./components/voorstelling-list/details-voorstelling/voorstelling-detail.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/user/:id', component: UserDetailComponent},
  {path: 'detail/voorstelling/:id', component: VoorstellingDetailComponent},


  {path: 'aanbod', component: UsersComponent},
  {path: 'voorstelling', component: VoorstellingListComponent},
  {path: 'add-user', component: UserAddComponent},
  {path: 'add-voorstelling', component: VoorstellingAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
