import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsBlockedListComponent } from './groups-blocked-list.component';

describe('GroupsBlockedListComponent', () => {
  let component: GroupsBlockedListComponent;
  let fixture: ComponentFixture<GroupsBlockedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsBlockedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsBlockedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
