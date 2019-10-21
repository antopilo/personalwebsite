import { Component, OnInit, Input } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-other-project-item',
  templateUrl: './other-project-item.component.html',
  styleUrls: ['./other-project-item.component.scss']
})
export class OtherProjectItemComponent implements OnInit {

  @Input() projectId : string;
  @Input() projectTitle: string;
  @Input() projectDesc: string;
  @Input() projectTech: string[];

  constructor() { }

  ngOnInit() {
    
  }

  enterButton() 
  { 
    anime({
      targets: '#' + this.projectId ,
      scale: '1.05',
      duration: 1000
    });

    console.log('#' + this.projectId );
  };

  leaveButton() { 
    
    anime({
      targets: '#' + this.projectId ,
      scale: '1',
      duration: 1000
    });
  };
  


}
