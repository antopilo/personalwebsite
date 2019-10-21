import { Component, OnInit, Input } from '@angular/core';
import Parallax from 'parallax-js'
@Component({
  selector: 'app-project-showcase-item-reverse',
  templateUrl: './project-showcase-item-reverse.component.html',
  styleUrls: ['./project-showcase-item-reverse.component.scss']
})
export class ProjectShowcaseItemReverseComponent implements OnInit {

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
    
  }

}
