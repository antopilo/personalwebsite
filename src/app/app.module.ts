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
import { OtherProjectItemComponent } from './other-project-item/other-project-item.component';
import { DetailrootComponent } from './detail/detailroot/detailroot.component';
import { HeaderComponent } from './detail/header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeadingComponent,
    ProjectShowcaseComponent,
    ProjectShowcaseItemComponent,
    ProjectShowcaseItemReverseComponent,
    OtherProjectsComponent,
    GetInTouchComponent,
    OtherProjectItemComponent,
    DetailrootComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
