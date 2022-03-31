import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangedCardComponent } from './changed-card.component';

describe('ChangedCardComponent', () => {
  let component: ChangedCardComponent;
  let fixture: ComponentFixture<ChangedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangedCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
