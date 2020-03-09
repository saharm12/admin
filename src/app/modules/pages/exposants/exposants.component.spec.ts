import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExposantsComponent } from './exposants.component';

describe('ExposantsComponent', () => {
  let component: ExposantsComponent;
  let fixture: ComponentFixture<ExposantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
