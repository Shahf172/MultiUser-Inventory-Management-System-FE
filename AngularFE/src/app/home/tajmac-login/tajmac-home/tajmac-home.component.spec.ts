import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TajmacHomeComponent } from './tajmac-home.component';

describe('TajmacHomeComponent', () => {
  let component: TajmacHomeComponent;
  let fixture: ComponentFixture<TajmacHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TajmacHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TajmacHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
