import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-project-showcase-item',
  templateUrl: './project-showcase-item.component.html',
  styleUrls: ['./project-showcase-item.component.scss']
})
export class ProjectShowcaseItemComponent implements OnInit {
  options = {
    scalarY: 10,
    scalarX: 20,
    relativeInput: true,
    hoverOnly: true,
    invertX: false,
    invertY: false
  }


  @Input() projectType: string = "";
  @Input() projectName: string = "";
  @Input() projectDesc: string = "";
  @Input() projectImg: string = "";
  @Input() projectLink: string = "";
  @Input() gitUrl: string = "";
  @Input() externalLink: string = "";

  constructor() { }

  ngOnInit() {
    console.log(this.gitUrl);
  }

}
