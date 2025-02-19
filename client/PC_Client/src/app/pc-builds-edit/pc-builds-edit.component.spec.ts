import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcBuildsEditComponent } from './pc-builds-edit.component';

describe('PcBuildsEditComponent', () => {
  let component: PcBuildsEditComponent;
  let fixture: ComponentFixture<PcBuildsEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcBuildsEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcBuildsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
