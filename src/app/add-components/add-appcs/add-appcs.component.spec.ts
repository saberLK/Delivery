import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAppcsComponent } from './add-appcs.component';

describe('AddAppcsComponent', () => {
  let component: AddAppcsComponent;
  let fixture: ComponentFixture<AddAppcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAppcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAppcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
