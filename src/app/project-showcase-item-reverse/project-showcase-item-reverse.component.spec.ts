import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectShowcaseItemReverseComponent } from './project-showcase-item-reverse.component';

describe('ProjectShowcaseItemReverseComponent', () => {
  let component: ProjectShowcaseItemReverseComponent;
  let fixture: ComponentFixture<ProjectShowcaseItemReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectShowcaseItemReverseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectShowcaseItemReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
