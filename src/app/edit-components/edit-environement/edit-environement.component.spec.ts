import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnvironementComponent } from './edit-environement.component';

describe('EditEnvironementComponent', () => {
  let component: EditEnvironementComponent;
  let fixture: ComponentFixture<EditEnvironementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnvironementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnvironementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
