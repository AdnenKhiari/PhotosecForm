import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioPageComponent } from './components/portfolio-page/portfolio-page.component';
import { TeamsPageComponent } from './components/teams-page/teams-page.component';
import { AboutUsPageComponent } from './components/about-us-page/about-us-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
{
  path: "portfolio",
  component: PortfolioPageComponent
},
{
  path: "teams",
  component: TeamsPageComponent
},
{

  path: "adnen",
  component: AboutUsPageComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
