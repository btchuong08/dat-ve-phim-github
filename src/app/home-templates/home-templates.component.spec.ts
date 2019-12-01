import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTemplatesComponent } from './home-templates.component';

describe('HomeTemplatesComponent', () => {
  let component: HomeTemplatesComponent;
  let fixture: ComponentFixture<HomeTemplatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTemplatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
