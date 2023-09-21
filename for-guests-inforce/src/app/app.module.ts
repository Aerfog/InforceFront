import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ForGuestsComponent } from './components/for-guests/for-guests.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    ForGuestsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ForGuestsComponent],
})
export class AppModuleForGuests { }
