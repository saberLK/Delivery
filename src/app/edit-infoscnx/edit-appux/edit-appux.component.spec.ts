import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppuxComponent } from './edit-appux.component';

describe('EditAppuxComponent', () => {
  let component: EditAppuxComponent;
  let fixture: ComponentFixture<EditAppuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
