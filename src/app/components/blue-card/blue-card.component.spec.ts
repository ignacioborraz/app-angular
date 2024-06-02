import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueCardComponent } from './blue-card.component';

describe('BlueCardComponent', () => {
  let component: BlueCardComponent;
  let fixture: ComponentFixture<BlueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlueCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
