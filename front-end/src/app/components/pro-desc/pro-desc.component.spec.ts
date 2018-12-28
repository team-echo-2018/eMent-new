import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProDescComponent } from './pro-desc.component';

describe('ProDescComponent', () => {
  let component: ProDescComponent;
  let fixture: ComponentFixture<ProDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
