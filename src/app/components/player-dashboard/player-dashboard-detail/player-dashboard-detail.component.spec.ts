import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerDashboardDetailComponent } from './player-dashboard-detail.component';

describe('PlayerDashboardDetailComponent', () => {
  let component: PlayerDashboardDetailComponent;
  let fixture: ComponentFixture<PlayerDashboardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerDashboardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerDashboardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
