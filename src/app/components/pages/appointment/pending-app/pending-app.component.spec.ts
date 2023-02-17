import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingAppComponent } from './pending-app.component';

describe('PendingAppComponent', () => {
  let component: PendingAppComponent;
  let fixture: ComponentFixture<PendingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PendingAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
