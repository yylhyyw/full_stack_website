import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeFavoriteDealListComponent } from './home-favorite-deal-list.component';

describe('HomeFavoriteDealListComponent', () => {
  let component: HomeFavoriteDealListComponent;
  let fixture: ComponentFixture<HomeFavoriteDealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeFavoriteDealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeFavoriteDealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
