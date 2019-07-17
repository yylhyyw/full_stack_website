import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsWaitingListComponent } from './groups-waiting-list.component';

describe('GroupsWaitingListComponent', () => {
  let component: GroupsWaitingListComponent;
  let fixture: ComponentFixture<GroupsWaitingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsWaitingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsWaitingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
