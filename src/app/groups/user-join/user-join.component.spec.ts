import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJoinComponent } from './user-join.component';

describe('UserJoinComponent', () => {
  let component: UserJoinComponent;
  let fixture: ComponentFixture<UserJoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserJoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
