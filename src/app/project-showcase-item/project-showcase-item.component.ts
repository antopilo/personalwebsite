import { Component, OnInit, Input } from '@angular/core';
import Parallax from 'parallax-js';

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
   
  constructor() { }

  ngOnInit() {

    var scene = document.getElementsByClassName('scene');
    var scene2 = document.getElementById('scene2');
    var scene3 = document.getElementById('scene3');
    var scene4 = document.getElementById('scene4');
    console.log(this.gitUrl);
    var scene5 = document.getElementById('imagepar');
    new Parallax(scene, this.options);
    new Parallax(scene2, this.options);
    new Parallax(scene3, this.options);
    new Parallax(scene4, this.options);
    new Parallax(scene5, this.options);
  }

}
