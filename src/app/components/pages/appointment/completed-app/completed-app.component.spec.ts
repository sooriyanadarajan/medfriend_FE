import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedAppComponent } from './completed-app.component';

describe('CompletedAppComponent', () => {
  let component: CompletedAppComponent;
  let fixture: ComponentFixture<CompletedAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
