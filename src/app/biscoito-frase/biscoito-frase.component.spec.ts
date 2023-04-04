import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscoitoFraseComponent } from './biscoito-frase.component';

describe('BiscoitoFraseComponent', () => {
  let component: BiscoitoFraseComponent;
  let fixture: ComponentFixture<BiscoitoFraseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiscoitoFraseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiscoitoFraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
