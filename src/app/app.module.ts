import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MaterializeModule } from 'angular2-materialize';
import { ListComponent } from './list/list.component';
import { ListService } from './list/list.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { TaskListComponent } from './task_list/task_list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpClientModule,
    ListService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
