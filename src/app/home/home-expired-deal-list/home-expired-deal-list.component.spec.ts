import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeExpiredDealListComponent } from './home-expired-deal-list.component';

describe('HomeExpiredDealListComponent', () => {
  let component: HomeExpiredDealListComponent;
  let fixture: ComponentFixture<HomeExpiredDealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeExpiredDealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeExpiredDealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
