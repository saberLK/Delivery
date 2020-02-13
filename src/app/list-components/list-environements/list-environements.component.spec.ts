import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnvironementsComponent } from './list-environements.component';

describe('ListEnvironementsComponent', () => {
  let component: ListEnvironementsComponent;
  let fixture: ComponentFixture<ListEnvironementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnvironementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnvironementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
