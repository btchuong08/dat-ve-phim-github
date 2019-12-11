import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyUserComponent } from './quan-ly-user.component';

describe('QuanLyUserComponent', () => {
  let component: QuanLyUserComponent;
  let fixture: ComponentFixture<QuanLyUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
