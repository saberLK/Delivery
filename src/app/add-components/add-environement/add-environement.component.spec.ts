import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnvironementComponent } from './add-environement.component';

describe('AddEnvironementComponent', () => {
  let component: AddEnvironementComponent;
  let fixture: ComponentFixture<AddEnvironementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnvironementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnvironementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
