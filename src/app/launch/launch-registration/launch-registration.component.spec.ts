import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchRegistrationComponent } from './launch-registration.component';

describe('LaunchRegistrationComponent', () => {
  let component: LaunchRegistrationComponent;
  let fixture: ComponentFixture<LaunchRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
