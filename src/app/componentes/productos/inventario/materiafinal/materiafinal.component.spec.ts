import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriafinalComponent } from './materiafinal.component';

describe('MateriafinalComponent', () => {
  let component: MateriafinalComponent;
  let fixture: ComponentFixture<MateriafinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriafinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MateriafinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
