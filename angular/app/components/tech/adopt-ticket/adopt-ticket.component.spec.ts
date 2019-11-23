import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptTicketComponent } from './adopt-ticket.component';

describe('AdoptTicketComponent', () => {
  let component: AdoptTicketComponent;
  let fixture: ComponentFixture<AdoptTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
