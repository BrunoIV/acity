import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionMenuComponent } from './construction-menu.component';

describe('ConstructionMenuComponent', () => {
  let component: ConstructionMenuComponent;
  let fixture: ComponentFixture<ConstructionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConstructionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
