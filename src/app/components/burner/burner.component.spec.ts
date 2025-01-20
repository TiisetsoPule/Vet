import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurnerComponent } from './burner.component';

describe('BurnerComponent', () => {
  let component: BurnerComponent;
  let fixture: ComponentFixture<BurnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
