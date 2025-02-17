import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcBuildsNewComponent } from './pc-builds-new.component';

describe('PcBuildsNewComponent', () => {
  let component: PcBuildsNewComponent;
  let fixture: ComponentFixture<PcBuildsNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcBuildsNewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcBuildsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
