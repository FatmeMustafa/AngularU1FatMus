import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersListComponent } from './users-list/users-list.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { UserListItemComponent } from './users-list/user-list-item/user-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersListComponent,
    EditUsersComponent,
    UserListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
