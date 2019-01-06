import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('Component : Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // refine the test module by declaring the test component
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('Login component should create', () => {
    expect(component).toBeTruthy();
  });

});
