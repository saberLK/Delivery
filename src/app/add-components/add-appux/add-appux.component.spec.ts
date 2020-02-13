import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppuxComponent } from './add-appux.component';

describe('AddAppuxComponent', () => {
  let component: AddAppuxComponent;
  let fixture: ComponentFixture<AddAppuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
