import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopDetailsComponentComponent } from './laptop-details-component.component';

describe('LaptopDetailsComponentComponent', () => {
  let component: LaptopDetailsComponentComponent;
  let fixture: ComponentFixture<LaptopDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaptopDetailsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
