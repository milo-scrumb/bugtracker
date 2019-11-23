import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoteToTechComponent } from './promote-to-tech.component';

describe('PromoteToTechComponent', () => {
  let component: PromoteToTechComponent;
  let fixture: ComponentFixture<PromoteToTechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoteToTechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoteToTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
