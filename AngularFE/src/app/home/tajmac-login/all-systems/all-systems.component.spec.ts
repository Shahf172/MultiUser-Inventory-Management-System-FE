import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSystemsComponent } from './all-systems.component';

describe('AllSystemsComponent', () => {
  let component: AllSystemsComponent;
  let fixture: ComponentFixture<AllSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
