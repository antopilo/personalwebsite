import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-showcase',
  templateUrl: './project-showcase.component.html',
  styleUrls: ['./project-showcase.component.scss']
})
export class ProjectShowcaseComponent implements OnInit {

  project = {
      name: "Project Robin",
      type: "Video game",
      desc: "This is a game that I am currently developping using C# and Godot engine. \
      It’s a combination of puzzles, platforming and rpg elements. This project is 100% made by me, including the art, \
      the programming, level design, UI design and sound.",
      img: "../../assets/img/robin1.gif",
      gitUrl: "",
      externalLink: "detail/Robin"
  }

  project2= {
    name:"Voxel Factory",
    type: "Godot engine plugin",
    desc: "Voxel factory is a plugin that I developped for Godot Engine. \
    It makes voxel games more accesible for anyone by abtracting \
    the complex meshing algorithm that is often associated with procedural meshing. It also features an in-engine voxel editor, \
    a sprite to voxel converter, and a library that was coded in C# and GDscript.",
    img: "../../assets/logo2.png",
    gitUrl: "https://github.com/antopilo/VoxelFactory",
    externalLink: "/detail/voxel factory"
  }

  project3= {
    name:"SpriteStacker",
    type: "Software",
    desc: "Spritestacker is tool help the developpers in the creation of sprite stacks. Sprite stacking is a \
    2D technique that creates a pseudo 3D effect. The effect is possible by using multiple layers that \
    that have a small vertical offset between each other. This tool has a live 3D preview, a layer system and supports \
    multiple palettes from lospec.com",
    img: "../../assets/img/spriteStack.png",
    gitUrl: "https://github.com/antopilo/SpriteStacker",
    externalLink: "/detail/spritestacker"
  }

  project4= {
    name:"Procedural Voxel engine",
    type: "Game project",
    desc: "I've always been intrigued by procedurally generated world and their infinite potential. \
      This is my attempt at making my own procedural world. I am using Godot engine to handle the ECS but everything else is \
      handled by me. This is a multi-threaded project that allows for a smooth gameplay while the engine handles \
      the world generation.",
    img: "../../assets/voxelengine.jpg",
    gitUrl: "https://github.com/antopilo/VoxelEngine",
    externalLink: ""
    
  }

  constructor() { }

  ngOnInit() {
  }

}
