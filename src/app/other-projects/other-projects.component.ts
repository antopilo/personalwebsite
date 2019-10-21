import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-other-projects',
  templateUrl: './other-projects.component.html',
  styleUrls: ['./other-projects.component.scss']
})

export class OtherProjectsComponent implements OnInit {

  project1 = {
    name: "Task managing app",
    desc: "This is a WPF project that I coded for myself. I needed a simple and instant task managing app that could help \
    me during my coding sessions. It opens instantly and load your previous task list. I used XML to serialize the data and \
    I also used a material design theme to spice the UI up.",
    url: ""
  }

  project2 = {
    name: "Third person character controller",
    desc: "I got inspired by a talk made about cameras from the developpers of \
    Journey. I tried to implement as many features that they talked about to make sure that the player always stays in view. \
    This is a project made using Godot engine, but the general idea can be ported easily to other engines.",
    url: ""
  }

  project3 = {
    name: "Project Godview",
    desc: "This is an attempt at making a Topdown in-game level editor. It features a full fledge level editor, \
    that can be toggled using the TAB key. The gameplay also has a lot of elemental interaction. For exemple, Fire that can \
    ignite oil, and water that extenguish fire.",
    url: ""
  }

  project4 = {
    name: "Map designs",
    desc: "This is a collection of map design I did for various games during my childhood. \ I didn't know how to code games\
    so I modded games instead. I used to mod a bunch of different games like Call of duty, Human fall flat and others.",
    url: ""
  }
 
  constructor() { }

  ngOnInit() {
  }

}
