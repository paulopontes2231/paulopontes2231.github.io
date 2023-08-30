import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsItMondayComponent } from './is-it-monday.component';

describe('IsItMondayComponent', () => {
  let component: IsItMondayComponent;
  let fixture: ComponentFixture<IsItMondayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsItMondayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsItMondayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
