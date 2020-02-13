import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnixComponent } from './add-unix.component';

describe('AddUnixComponent', () => {
  let component: AddUnixComponent;
  let fixture: ComponentFixture<AddUnixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUnixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
