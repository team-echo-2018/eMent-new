import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkingProjComponent } from './working-proj.component';

describe('WorkingProjComponent', () => {
  let component: WorkingProjComponent;
  let fixture: ComponentFixture<WorkingProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkingProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkingProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
