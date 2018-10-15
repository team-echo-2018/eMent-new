import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoSpanComponent } from './logo-span.component';

describe('LogoSpanComponent', () => {
  let component: LogoSpanComponent;
  let fixture: ComponentFixture<LogoSpanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoSpanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoSpanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
