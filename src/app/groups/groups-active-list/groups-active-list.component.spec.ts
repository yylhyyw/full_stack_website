import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsActiveListComponent } from './groups-active-list.component';

describe('GroupsActiveListComponent', () => {
  let component: GroupsActiveListComponent;
  let fixture: ComponentFixture<GroupsActiveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsActiveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsActiveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
