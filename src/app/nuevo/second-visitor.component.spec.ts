import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondVisitorComponent } from './second-visitor.component';

describe('SecondVisitorComponent', () => {
  let component: SecondVisitorComponent;
  let fixture: ComponentFixture<SecondVisitorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondVisitorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
