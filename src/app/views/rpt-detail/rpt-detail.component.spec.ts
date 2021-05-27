import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RptDetailComponent } from './rpt-detail.component';

describe('RptDetailComponent', () => {
  let component: RptDetailComponent;
  let fixture: ComponentFixture<RptDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RptDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RptDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
