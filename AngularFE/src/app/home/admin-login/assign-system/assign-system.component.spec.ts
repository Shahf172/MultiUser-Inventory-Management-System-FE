import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignSystemComponent } from './assign-system.component';

describe('AssignSystemComponent', () => {
  let component: AssignSystemComponent;
  let fixture: ComponentFixture<AssignSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
