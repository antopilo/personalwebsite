import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailroot',
  templateUrl: './detailroot.component.html',
  styleUrls: ['./detailroot.component.scss']
})


export class DetailrootComponent implements OnInit {
  

  fileName;
  contentContainer;

  constructor(private http: HttpClient, private route:ActivatedRoute) { }


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
    var description = document.getElementById('description');

    var md = require('markdown-it')();
    md.use(require("markdown-it-anchor").default); // Optional, but makes sense as you really want to link to something
    md.use(require('markdown-it-video'));
    md.use(require('markdown-it-multimd-table'));
    md.use(require('markdown-it-style'), {
      'p': 'text-align: justify; margin-bottom: 25px; overflow: none;flex-wrap: nowrap;',
      'h2': 'text-align: justify; margin-bottom: 20px; overflow: none;flex-wrap: nowrap;',
      'blockquote': 'margin-left: 40px; padding-top: 5; padding-bottom: 5; margin-right: 50px; border-left: 2px solid black; padding-left: 10px; background-color: #e1e1e1;'
    });
    var fm = require('front-matter');
    var parsed = fm(data.toString());

    var header = parsed.attributes;
    var body = parsed.body;

    md.use(require("markdown-it-table-of-contents"), {
      "transformLink": (link) => {
        return "detail/" + this.fileName + link;
      },
      "containerClass": "toc"
    });

    var result = md.render(parsed.body);

    // load title
    title.innerHTML = this.Capitalize(header.title);
    description.innerHTML = header.description;
    // load banner
    var banner = document.getElementById('nav-wrapper');
    banner.style.background = 'url(' + header.banner + ')';
    
    this.contentContainer.innerHTML = result;
  }
}
