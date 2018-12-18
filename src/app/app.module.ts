import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { DatabaseComponent } from './database/database.component';
import { DeletedDataComponent } from './deleted-data/deleted-data.component';
import { DatabaseDataComponent } from './database/database-data/database-data.component';
import { DatabaseService } from './shared/database.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DatabaseEditComponent } from './database/database-edit/database-edit.component';
import { DatabaseMessageComponent } from './database/database-message/database-message.component';
import { DeletedCardComponent } from './deleted-data/deleted-card/deleted-card.component';
import { DeleteMessageComponent } from './deleted-data/delete-message/delete-message.component';
import { DeletedItemComponent } from './deleted-data/deleted-card/deleted-item/deleted-item.component';
import { DataDeleteComponent } from './deleted-data/data-delete/data-delete.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { StorageService } from './shared/storage.service';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    DataEntryComponent,
    DatabaseComponent,
    DeletedDataComponent,
    DatabaseDataComponent,
    PageNotFoundComponent,
    DatabaseEditComponent,
    DatabaseMessageComponent,
    DeletedCardComponent,
    DeleteMessageComponent,
    DeletedItemComponent,
    DataDeleteComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule
  ],
  providers: [DatabaseService, StorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
