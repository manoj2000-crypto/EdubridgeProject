import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopListComponentComponent } from './laptop-list-component.component';

describe('LaptopListComponentComponent', () => {
  let component: LaptopListComponentComponent;
  let fixture: ComponentFixture<LaptopListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LaptopListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LaptopListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
