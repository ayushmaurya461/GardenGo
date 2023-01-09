import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinProfileComponent } from './loggedin-profile.component';

describe('LoggedinProfileComponent', () => {
  let component: LoggedinProfileComponent;
  let fixture: ComponentFixture<LoggedinProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggedinProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoggedinProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
