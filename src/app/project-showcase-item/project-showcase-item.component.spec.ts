import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectShowcaseItemComponent } from './project-showcase-item.component';

describe('ProjectShowcaseItemComponent', () => {
  let component: ProjectShowcaseItemComponent;
  let fixture: ComponentFixture<ProjectShowcaseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectShowcaseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectShowcaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
