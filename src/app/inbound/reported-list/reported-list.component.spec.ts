import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedListComponent } from './reported-list.component';

describe('ReportedListComponent', () => {
  let component: ReportedListComponent;
  let fixture: ComponentFixture<ReportedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
