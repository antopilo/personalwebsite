---
title: SPRITE STACKER
description: A simple tool for simple 3d.
banner: https://images.unsplash.com/photo-1475694867812-f82b8696d610?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy
---

SpriterStacker is a software that I developped because It's wasn't easy to create `sprite stack` . Now, there is a bunch of tool that were made to make that easier, but most of them are paid. I started working on this project when they wasn't any of them available. 

# What is sprite stacking?

Sprite stacking is a technique that creates a pseudo-3D effect from 2D sprites. The concept is pretty simple, you draw each layer of you 3D model on a sprite and you stack them with a small vertical offset. I learned of this technique from a game called `Nium`. 

## How to use   

SpriteStacker is pretty simple to use, you have your drawing board on the left along with the palette inspector( You can load them with the button just above), you also have the layer view on the right just above the Previewer. You can add layers with the Plus button.

To move the previewer you have small arrows on the bottom left corner of the Preview window. There is also a + and - buttons to increase the resolution of the renderer. You will need to adjust the zoom after adjusting the resolution.

If you don't know how to use those assets in your game, I suggest that you read this article that explains the process of achieving the effect. NOTE: this software is only useful in the making of those sprites. not to make it easier to use in your game as this step is fairly easy to solve. [Article in question here.](http://www.like100bears.com/writing/2d-3d-in-gamemaker-studio)

## Palette support

To install palettes for the software, you must open it at least once. The software will generate a folder at: `%appdata%/Godot/app_userdata/StackedSprites/Palettes/`. You can download palettes from Losec.com in the *.hex format and drop them in that folder. You can then load the palettes from the software directly.
