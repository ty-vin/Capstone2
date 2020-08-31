import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdeyeComponent } from './thirdeye-c.component';

describe('ThirdeyeComponent', () => {
  let component: ThirdeyeComponent;
  let fixture: ComponentFixture<ThirdeyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdeyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdeyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
