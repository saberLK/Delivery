import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWebComponent } from './add-web.component';

describe('AddWebComponent', () => {
  let component: AddWebComponent;
  let fixture: ComponentFixture<AddWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
