import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { TeamsComponent } from './teams/teams.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    TeamsComponent,
    GalleryComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [NavBarComponent,FooterComponent,TeamsComponent,GalleryComponent,AboutUsComponent]
})
export class ComponentsModule { }
