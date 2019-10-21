import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailrootComponent } from './detail/detailroot/detailroot.component';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "detail/:file", component: DetailrootComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
