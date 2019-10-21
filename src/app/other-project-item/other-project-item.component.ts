import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-project-item',
  templateUrl: './other-project-item.component.html',
  styleUrls: ['./other-project-item.component.scss']
})
export class OtherProjectItemComponent implements OnInit {

  @Input() projectTitle: string;
  @Input() projectDesc: string;
  @Input() projectTech: string[];

  constructor() { }

  ngOnInit() {
  }

}
