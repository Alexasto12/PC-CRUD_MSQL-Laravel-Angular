import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcBuildsNEditComponent } from './pc-builds-nedit.component';

describe('PcBuildsNEditComponent', () => {
  let component: PcBuildsNEditComponent;
  let fixture: ComponentFixture<PcBuildsNEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcBuildsNEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcBuildsNEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
