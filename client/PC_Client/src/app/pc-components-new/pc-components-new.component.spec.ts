import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcComponentsNewComponent } from './pc-components-new.component';

describe('PcComponentsNewComponent', () => {
  let component: PcComponentsNewComponent;
  let fixture: ComponentFixture<PcComponentsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcComponentsNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcComponentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
