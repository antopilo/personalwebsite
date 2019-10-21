import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.scss']
})
export class ProjectShowcaseComponent implements OnInit {

  project = {
      name: "Robin",
      type: "Game",
      desc: "This is a game that I am currently developping using C# and Godot engine. \
      It’s a combination of puzzles, platforming and rpg elements. Some games that inspired me to start \
      working on this project were Celeste, FEZ and Zelda. This project is 100% made by me, including the art, \
      the programming, level design, UI design and sound.",
      img: "../../assets/img/robin1.gif"
  }

  project2= {
    name:"Voxel Factory",
    type: "Godot engine plugin",
    desc: "Voxel factory is a plugin that I developped for Godot Engine. \
    It makes voxel game design easier for anyone without any of \
    the complex meshing algorithm. It features a in-engine voxel editor, \
    a sprite to voxel converter, and a library that was coded in C# and GDscript.",
    img: "../../assets/logo2.png"
  }

  project3= {
    name:"SpriteStacker",
    type: "Gamedev Tool",
    desc: "Spritestacker is tool to make drawing sprite stack easier. Sprite stacking is a \
    2D technique that creates a pseudo 3D effect. The effect is possible by using multiple layers that \
    that have a small vertical offset between each other. This tool has a live 3D preview, a layer system and supports \
    multiple palettes from lospec.com",
    img: "../../assets/stack.gif"
  }

  project4= {
    name:"Procedural Voxel engine",
    type: "Game project",
    desc: "I've always been intrigued by procedurally generated world and there infinite potential \
      this is my attempt at making my own world. I am using Godot engine to handle the ECS but everything else is \
      handled by me. This is a multi-threaded project that allows for a smooth gameplay while the engine handles \
      the world generation.",
    img: "../../assets/voxelengine.jpg"
  }
  constructor() { }

  ngOnInit() {
  }

}
