import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForGuestsComponent } from './for-guests.component';

describe('ForGuestsComponent', () => {
  let component: ForGuestsComponent;
  let fixture: ComponentFixture<ForGuestsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForGuestsComponent]
    });
    fixture = TestBed.createComponent(ForGuestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
