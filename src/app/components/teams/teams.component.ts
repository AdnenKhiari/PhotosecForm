import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface Member {
  nom: string,
  url: string
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {


  error = false

  userData : Member[] | null= null
  
  constructor(private http: HttpClient){

      http.get<Member[]>("http://localhost:8080/api/r2/get/all").subscribe({
        next: (response)=> {
          this.userData = response
        },
        error: (error)=>{
          console.log(error)
          this.error = true
        }
      })
  }

}
