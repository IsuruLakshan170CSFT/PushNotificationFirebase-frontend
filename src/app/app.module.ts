import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddministratorComponent } from './addministrator/addministrator.component';
import { environment } from "../environments/environment";
import { initializeApp } from "firebase/app";
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import {ListboxModule} from 'primeng/listbox';
import {TabViewModule} from 'primeng/tabview';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {TableModule} from 'primeng/table';
import { UserComponent } from './user/user.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TestComponent } from './test/test.component';

initializeApp(environment.firebase);

@NgModule({
  declarations: [
    AppComponent,
    AddministratorComponent,
    UserComponent,
    TestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ListboxModule,
    FormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    MultiSelectModule,
    TableModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
