import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadmapSettingsComponent } from './roadmap-settings.component';

describe('RoadmapSettingsComponent', () => {
  let component: RoadmapSettingsComponent;
  let fixture: ComponentFixture<RoadmapSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoadmapSettingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoadmapSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
