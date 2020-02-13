import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBaseComponent } from './edit-base.component';

describe('EditBaseComponent', () => {
  let component: EditBaseComponent;
  let fixture: ComponentFixture<EditBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
