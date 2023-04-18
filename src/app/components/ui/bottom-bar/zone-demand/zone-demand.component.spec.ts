import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDemandComponent } from './zone-demand.component';

describe('ZoneDemandComponent', () => {
  let component: ZoneDemandComponent;
  let fixture: ComponentFixture<ZoneDemandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneDemandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
