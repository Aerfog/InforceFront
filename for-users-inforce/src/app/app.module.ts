import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ForUsersComponent} from "./components/for-users/for-users.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ForUsersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ForUsersComponent]
})
export class AppModuleForUsers { }
