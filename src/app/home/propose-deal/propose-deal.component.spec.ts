import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposeDealComponent } from './propose-deal.component';

describe('ProposeDealComponent', () => {
  let component: ProposeDealComponent;
  let fixture: ComponentFixture<ProposeDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposeDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposeDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
