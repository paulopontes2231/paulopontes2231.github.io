import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOfLifeInstructionsComponent } from './game-of-life-instructions.component';

describe('GameOfLifeInstructionsComponent', () => {
  let component: GameOfLifeInstructionsComponent;
  let fixture: ComponentFixture<GameOfLifeInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameOfLifeInstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameOfLifeInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
