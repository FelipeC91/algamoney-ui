import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchRegisterComponent } from './launch-register.component';

describe('LaunchRegisterComponent', () => {
  let component: LaunchRegisterComponent;
  let fixture: ComponentFixture<LaunchRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
