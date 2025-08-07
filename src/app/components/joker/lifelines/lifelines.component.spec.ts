import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifelinesComponent } from './lifelines.component';

describe('LifelinesComponent', () => {
  let component: LifelinesComponent;
  let fixture: ComponentFixture<LifelinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifelinesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
