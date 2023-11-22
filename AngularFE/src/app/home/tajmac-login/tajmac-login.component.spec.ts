import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TajmacLoginComponent } from './tajmac-login.component';

describe('TajmacLoginComponent', () => {
  let component: TajmacLoginComponent;
  let fixture: ComponentFixture<TajmacLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TajmacLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TajmacLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
