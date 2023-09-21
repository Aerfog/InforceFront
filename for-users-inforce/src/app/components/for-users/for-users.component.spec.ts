import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForUsersComponent } from './for-users.component';

describe('ForUsersComponent', () => {
  let component: ForUsersComponent;
  let fixture: ComponentFixture<ForUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForUsersComponent]
    });
    fixture = TestBed.createComponent(ForUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
