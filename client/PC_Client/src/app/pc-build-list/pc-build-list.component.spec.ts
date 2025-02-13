import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcBuildListComponent } from './pc-build-list.component';

describe('PcBuildListComponent', () => {
  let component: PcBuildListComponent;
  let fixture: ComponentFixture<PcBuildListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcBuildListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PcBuildListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
