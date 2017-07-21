import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatLngFormComponent } from './lat-lng-form.component';

describe('LatLngFormComponent', () => {
  let component: LatLngFormComponent;
  let fixture: ComponentFixture<LatLngFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatLngFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatLngFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
