import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLaptopComponentComponent } from './update-laptop-component.component';

describe('UpdateLaptopComponentComponent', () => {
  let component: UpdateLaptopComponentComponent;
  let fixture: ComponentFixture<UpdateLaptopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateLaptopComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateLaptopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
