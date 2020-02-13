import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppcsComponent } from './edit-appcs.component';

describe('EditAppcsComponent', () => {
  let component: EditAppcsComponent;
  let fixture: ComponentFixture<EditAppcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAppcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
