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
   
  
  constructor() { }

  ngOnInit() {
    

    var scene = document.getElementById('scene5');
    var scene2 = document.getElementById('scene6');
    var scene3 = document.getElementById('scene7');
    var scene4 = document.getElementById('scene8');
    var scene5 = document.getElementById('img2');

    //new Parallax(scene, this.options);
    //new Parallax(scene2, this.options);
    //new Parallax(scene3, this.options);
    //new Parallax(scene4, this.options);
    //new Parallax(scene5, this.options);
  }

}
