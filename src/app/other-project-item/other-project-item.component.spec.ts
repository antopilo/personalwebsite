import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherProjectItemComponent } from './other-project-item.component';

describe('OtherProjectItemComponent', () => {
  let component: OtherProjectItemComponent;
  let fixture: ComponentFixture<OtherProjectItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherProjectItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherProjectItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
