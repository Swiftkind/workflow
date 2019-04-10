import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideReportComponent } from './side-report.component';

describe('SideReportComponent', () => {
  let component: SideReportComponent;
  let fixture: ComponentFixture<SideReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
