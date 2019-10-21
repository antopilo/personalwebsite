import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailrootComponent } from './detailroot.component';

describe('DetailrootComponent', () => {
  let component: DetailrootComponent;
  let fixture: ComponentFixture<DetailrootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
