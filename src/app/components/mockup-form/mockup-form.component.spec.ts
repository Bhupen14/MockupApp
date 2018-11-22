import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupFormComponent } from './mockup-form.component';

describe('MockupFormComponent', () => {
  let component: MockupFormComponent;
  let fixture: ComponentFixture<MockupFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockupFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
