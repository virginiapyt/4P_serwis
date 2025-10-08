import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiczbyComponent } from './liczby.component';

describe('LiczbyComponent', () => {
  let component: LiczbyComponent;
  let fixture: ComponentFixture<LiczbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiczbyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiczbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
