import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInfoscnxComponent } from './add-infoscnx.component';

describe('AddInfoscnxComponent', () => {
  let component: AddInfoscnxComponent;
  let fixture: ComponentFixture<AddInfoscnxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInfoscnxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInfoscnxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
