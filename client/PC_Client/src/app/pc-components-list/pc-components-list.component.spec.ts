import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcComponentsListComponent } from './pc-components-list.component';

describe('PcComponentsListComponent', () => {
  let component: PcComponentsListComponent;
  let fixture: ComponentFixture<PcComponentsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcComponentsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcComponentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
