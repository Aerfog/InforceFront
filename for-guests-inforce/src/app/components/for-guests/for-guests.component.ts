import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlModelForGuests } from '../url-model-for-guests';

@Component({
  selector: 'app-for-guests',
  templateUrl: './for-guests.component.html',
})
export class ForGuestsComponent implements OnInit {
  public items: UrlModelForGuests[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initializeComponent();
  }

  initializeComponent() {
    console.log('Angular component initialized.');
    this.http.get<UrlModelForGuests[]>('https://localhost:7008/Urls/Api').subscribe(data => {
      this.items = data;
    });
  }
}

