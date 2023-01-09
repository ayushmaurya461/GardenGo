import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurWorksComponent } from './our-works.component';

describe('OurWorksComponent', () => {
  let component: OurWorksComponent;
  let fixture: ComponentFixture<OurWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurWorksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
