import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTemplatesComponent } from './admin-templates.component';

describe('AdminTemplatesComponent', () => {
  let component: AdminTemplatesComponent;
  let fixture: ComponentFixture<AdminTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
