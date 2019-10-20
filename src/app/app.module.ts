import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadingComponent } from './heading/heading.component';
import { ProjectShowcaseComponent } from './project-showcase/project-showcase.component';
import { ProjectShowcaseItemComponent } from './project-showcase-item/project-showcase-item.component';
import { ProjectShowcaseItemReverseComponent } from './project-showcase-item-reverse/project-showcase-item-reverse.component';
import { OtherProjectsComponent } from './other-projects/other-projects.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadingComponent,
    ProjectShowcaseComponent,
    ProjectShowcaseItemComponent,
    ProjectShowcaseItemReverseComponent,
    OtherProjectsComponent,
    GetInTouchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
