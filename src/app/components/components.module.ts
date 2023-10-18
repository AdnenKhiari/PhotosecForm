import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { TeamsComponent } from './teams/teams.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamsPageComponent } from './teams-page/teams-page.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    TeamsComponent,
    GalleryComponent,
    AboutUsComponent,
    TeamsPageComponent,
    PortfolioPageComponent,
    AboutUsPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [AboutUsComponent,PortfolioPageComponent,TeamsPageComponent,NavBarComponent,FooterComponent,TeamsComponent,GalleryComponent,AboutUsComponent]
})
export class ComponentsModule { }
