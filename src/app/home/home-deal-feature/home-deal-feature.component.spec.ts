import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDealFeatureComponent } from './home-deal-feature.component';

describe('HomeDealFeatureComponent', () => {
  let component: HomeDealFeatureComponent;
  let fixture: ComponentFixture<HomeDealFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDealFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDealFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
