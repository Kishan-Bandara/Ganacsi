import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclePublishComponent } from './vehicle-publish.component';

describe('VehiclePublishComponent', () => {
  let component: VehiclePublishComponent;
  let fixture: ComponentFixture<VehiclePublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiclePublishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehiclePublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
