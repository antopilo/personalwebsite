import { Component, OnInit } from '@angular/core';
import MarkdownIt from 'markdown-it';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailroot',
  templateUrl: './detailroot.component.html',
  styleUrls: ['./detailroot.component.scss']
})

export class DetailrootComponent implements OnInit {

  constructor(private http: HttpClient, private route:ActivatedRoute) { }
  fileName;
  contentContainer;

  ngOnInit() {
    this.fileName = this.route.snapshot.paramMap.get('file');

    this.contentContainer = document.getElementById('markdown-container');

    this.http.get('assets/markdown/' + this.fileName + '.md', {responseType: 'text'})
        .subscribe(data => {
          this.RenderMarkdown(data);
        });

  }

  Capitalize(s) {
    if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
  }

  RenderMarkdown(data){
    
    
    var title = document.getElementById('title');
    var md = require('markdown-it')();

    var fm = require('front-matter')
    var parsed = fm(data.toString())
    var result = md.render(parsed.body);

    var header = parsed.attributes;
    var body = parsed.body;

    // load title
    title.innerHTML = this.Capitalize(header.title);
    
    // load banner
    var banner = document.getElementById('nav-wrapper');
    banner.style.background = 'url(' + header.banner + ')';
    
    this.contentContainer.innerHTML = result;
  }
}
