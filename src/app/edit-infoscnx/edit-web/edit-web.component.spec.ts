import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWebComponent } from './edit-web.component';

describe('EditWebComponent', () => {
  let component: EditWebComponent;
  let fixture: ComponentFixture<EditWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
