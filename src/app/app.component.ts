import { Component, OnInit } from '@angular/core';
import AOS from 'aos'
import fs from 'file-system';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Antoine Pilote';

  ngOnInit(){
    AOS.init();
  }
}
