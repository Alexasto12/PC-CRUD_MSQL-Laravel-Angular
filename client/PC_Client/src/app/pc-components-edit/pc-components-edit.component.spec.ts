import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcComponentsEditComponent } from './pc-components-edit.component';

describe('PcComponentsEditComponent', () => {
  let component: PcComponentsEditComponent;
  let fixture: ComponentFixture<PcComponentsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcComponentsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcComponentsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
