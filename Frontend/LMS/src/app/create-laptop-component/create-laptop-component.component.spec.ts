import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLaptopComponentComponent } from './create-laptop-component.component';

describe('CreateLaptopComponentComponent', () => {
  let component: CreateLaptopComponentComponent;
  let fixture: ComponentFixture<CreateLaptopComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateLaptopComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateLaptopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
