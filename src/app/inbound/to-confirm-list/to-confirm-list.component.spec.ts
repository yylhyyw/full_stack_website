import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToConfirmListComponent } from './to-confirm-list.component';

describe('ToConfirmListComponent', () => {
  let component: ToConfirmListComponent;
  let fixture: ComponentFixture<ToConfirmListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToConfirmListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToConfirmListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
