import {Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlModelForUsers } from '../url-model-for-users';

@Component({
  selector: 'app-for-users',
  templateUrl: './for-users.component.html',
})
export class ForUsersComponent implements OnInit {
  public items: UrlModelForUsers[] = [];
  model = {
    FullUrl: '',
    Description: '',
  };
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.initializeComponent();
  }

  initializeComponent() {
    console.log('Angular component initialized.');
    this.http.get<UrlModelForUsers[]>('https://localhost:7008/Urls/Api/ForUsers').subscribe(data => {
      this.items = data;
    });
  }
  removeItem(id: number): void {
    if (confirm('Are you sure you want to delete this item?')) {
      this.http.post(`https://localhost:7008/Urls/Api/${id}`, {}).subscribe(() => {
        this.initializeComponent();
      });
    }
  }

  onSubmit() {
    this.http.post('https://localhost:7008/Urls/Api', this.model).subscribe(
      (response) => {
        console.log('URL added successfully', response);
        this.model.FullUrl = '';
        this.model.Description = '';
        this.initializeComponent();
      },
      (error) => {
        console.error('Error adding URL', error);
      }
    );
  }
}

