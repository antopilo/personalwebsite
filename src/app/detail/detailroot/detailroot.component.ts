import { Component, OnInit } from '@angular/core';
import MarkdownIt from 'markdown-it';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-detailroot',
  templateUrl: './detailroot.component.html',
  styleUrls: ['./detailroot.component.scss']
})

export class DetailrootComponent implements OnInit {

  constructor(private http: HttpClient) { }

  contentContainer;

  ngOnInit() {
  
    this.contentContainer = document.getElementById('markdown-container');

    this.http.get('assets/markdown/sample.md', {responseType: 'text'})
        .subscribe(data => {
          this.RenderMarkdown(data);
        });

  }

  RenderMarkdown(data){
    var md = require('markdown-it')();
    var result = md.render(data);
    this.contentContainer.innerHTML = result;
  }
}
