import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('Component : Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  // refine the test module by declaring the test component
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule, HttpClientModule],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    // create component and test fixture
    fixture = TestBed.createComponent(LoginComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    // component.ngOnInit();
    fixture.detectChanges();
  });

  it('Login component should create', () => {
    expect(component).toBeTruthy();
  });

});
