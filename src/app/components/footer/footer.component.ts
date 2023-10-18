import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

interface Contact{
  email: string,
  text: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  error = false

  contactForm = new FormGroup({
    email: new FormControl(),
    description: new FormControl()
  })

  constructor(private http: HttpClient){
    this.getData()
  }

  getData(){
    const data = {
      email : this.contactForm.getRawValue().email,
      text: this.contactForm.getRawValue().description
    }

    this.http.post<Contact>("http://localhost:8080/api/contact",data).subscribe({
      next: (response)=> {
        console.log("Successss",response)
        alert("Merci de contacter l'administration , votre email est " + response.email + " -  Votres text est" + response.text)
      },
      error: (error)=>{
        console.log(error)
        this.error = true
      }
    })
  }

  ngOnInit(){
    // Code 
  }
  
}
