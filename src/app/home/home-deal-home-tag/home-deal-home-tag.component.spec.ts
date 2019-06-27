import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDealHomeTagComponent } from './home-deal-home-tag.component';

describe('HomeDealHomeTagComponent', () => {
  let component: HomeDealHomeTagComponent;
  let fixture: ComponentFixture<HomeDealHomeTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDealHomeTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDealHomeTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
