import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { DatabaseComponent } from './database/database.component';
import { DatabaseDataComponent } from './database/database-data/database-data.component';
import { DeletedDataComponent } from './deleted-data/deleted-data.component';
import { DatabaseEditComponent } from './database/database-edit/database-edit.component';
import { DatabaseMessageComponent } from './database/database-message/database-message.component';
import { DeletedCardComponent } from './deleted-data/deleted-card/deleted-card.component';
import { DeleteMessageComponent } from './deleted-data/delete-message/delete-message.component';
import { DataDeleteComponent } from './deleted-data/data-delete/data-delete.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  { path: 'data-entry', component: DataEntryComponent },
  { path: 'database', component: DatabaseComponent, children: [
    { path: '', component: DatabaseMessageComponent },
  	{ path: ':id', component: DatabaseDataComponent },
    { path: ':id/edit', component: DatabaseEditComponent }
  ] },
  { path: 'deleted-data', component: DeletedDataComponent, children: [
    { path: '', component: DeleteMessageComponent },
    { path: ':id', component: DataDeleteComponent },
  ] },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
