import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDealCreateComponent } from './home-deal-create.component';

describe('HomeDealCreateComponent', () => {
  let component: HomeDealCreateComponent;
  let fixture: ComponentFixture<HomeDealCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDealCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDealCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
