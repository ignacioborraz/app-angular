import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreenCardComponent } from './green-card.component';

describe('GreenCardComponent', () => {
  let component: GreenCardComponent;
  let fixture: ComponentFixture<GreenCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GreenCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GreenCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
