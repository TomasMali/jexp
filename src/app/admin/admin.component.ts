import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  hideTable: boolean = false;
  hint: string = "Inserisci la password"
  response: any
  password: any

    constructor(public http: HttpClient) {
   }

  ngOnInit() {
  }

 
  authenticationButton(){


    this.http.get("http://93.49.6.246:3000/visiting").subscribe(data => {
      console.log(data)
      this.response = data

     })


    if(this.password == "sanmarco"){
      this.hideTable = true
      this.password = ""
    }
    else if(this.password == ""){
      alert("Compila il campo password!")
    }
    else
    alert("Password non valido!")
    
  
  }









  

}
