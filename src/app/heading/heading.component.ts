import { Component, OnInit } from '@angular/core';

import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    anime({
      targets: '#first',
      opacity: '1',
      duration: 2000,
      delay: 1000,
      easing: 'easeOutQuad'
    });
    anime({
      targets: '#name',
      opacity: '1',
      duration: 3000,
      delay: 2000,
      easing: 'easeOutQuad'
    });
    anime({
      targets: '#status',
      opacity: '0.38',
      duration: 5000,
      delay: 3000,
      
      easing: 'easeOutQuad'
    });
    anime({
      targets: '#desc',
      opacity: '0.38',
      duration: 6000,
      delay: 4000,
      easing: 'easeOutQuad'
    });
  }

}
