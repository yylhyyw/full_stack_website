import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDraftsDealListComponent } from './home-drafts-deal-list.component';

describe('HomeDraftsDealListComponent', () => {
  let component: HomeDraftsDealListComponent;
  let fixture: ComponentFixture<HomeDraftsDealListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDraftsDealListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDraftsDealListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
