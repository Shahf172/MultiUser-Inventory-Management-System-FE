import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysAssignComponent } from './sys-assign.component';

describe('SysAssignComponent', () => {
  let component: SysAssignComponent;
  let fixture: ComponentFixture<SysAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
