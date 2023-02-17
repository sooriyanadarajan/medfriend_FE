import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingAppComponent } from './upcoming-app.component';

describe('UpcomingAppComponent', () => {
  let component: UpcomingAppComponent;
  let fixture: ComponentFixture<UpcomingAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
