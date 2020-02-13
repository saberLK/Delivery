import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUnixComponent } from './edit-unix.component';

describe('EditUnixComponent', () => {
  let component: EditUnixComponent;
  let fixture: ComponentFixture<EditUnixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUnixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUnixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
