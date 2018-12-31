import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProjComponent } from './other-proj.component';

describe('OtherProjComponent', () => {
  let component: OtherProjComponent;
  let fixture: ComponentFixture<OtherProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
