import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosConnectionsComponent } from './infos-connections.component';

describe('InfosConnectionsComponent', () => {
  let component: InfosConnectionsComponent;
  let fixture: ComponentFixture<InfosConnectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfosConnectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
