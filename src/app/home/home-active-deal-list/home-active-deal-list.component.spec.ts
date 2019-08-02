import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeActiveDealListComponent } from './home-active-deal-list.component';

describe('HomeActiveDealListComponent', () => {
  let component: HomeActiveDealListComponent;
  let fixture: ComponentFixture<HomeActiveDealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeActiveDealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeActiveDealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
