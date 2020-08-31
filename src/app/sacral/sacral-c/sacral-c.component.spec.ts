import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SacralComponent } from './sacral-c.component';

describe('SacralComponent', () => {
  let component: SacralComponent;
  let fixture: ComponentFixture<SacralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SacralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SacralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
