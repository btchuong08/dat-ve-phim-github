import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTemplatesComponent } from './user-templates.component';

describe('UserTemplatesComponent', () => {
  let component: UserTemplatesComponent;
  let fixture: ComponentFixture<UserTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
