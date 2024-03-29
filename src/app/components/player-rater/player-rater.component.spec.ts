import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRaterComponent } from './player-rater.component';

describe('PlayerRaterComponent', () => {
  let component: PlayerRaterComponent;
  let fixture: ComponentFixture<PlayerRaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerRaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerRaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
