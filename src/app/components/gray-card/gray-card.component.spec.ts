import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayCardComponent } from './gray-card.component';

describe('GrayCardComponent', () => {
  let component: GrayCardComponent;
  let fixture: ComponentFixture<GrayCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrayCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
