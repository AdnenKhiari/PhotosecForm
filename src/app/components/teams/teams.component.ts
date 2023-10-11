import { Component } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  userData = [{
    nom: "Jessica",
    image: "assets/images/team1.jpg"
  },
  {
    nom: "Jhon",
    image: "assets/images/team2.jpg"
  },
  {
    nom: "Jessica 2",
    image: "assets/images/team3.jpg"
  }
]

  constructor(){

  }
}
