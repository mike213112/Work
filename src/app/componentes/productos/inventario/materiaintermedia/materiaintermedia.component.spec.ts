import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaintermediaComponent } from './materiaintermedia.component';

describe('MateriaintermediaComponent', () => {
  let component: MateriaintermediaComponent;
  let fixture: ComponentFixture<MateriaintermediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriaintermediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriaintermediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
