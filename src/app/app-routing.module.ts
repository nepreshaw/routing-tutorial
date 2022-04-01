import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  //first routing is special, will be the first route in every application. where we want to redirect to will be different 
  //if the path is empty 
  {path:"", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  //: infront of ec says it is a path variable and not a string
  {path: "help/:ec", component: HelpComponent},
  {path: "history", component: HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
