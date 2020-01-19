import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  hideTable: boolean = false;
  hint: string = "Inserisci la password per accedere"
  pass: string = ""
  button_w: boolean = false
  response: any

    constructor(public http: HttpClient) {
   }

  ngOnInit() {
  }

  onPasswordEntered(event){
    this.pass = event.target.value
  }

  authentication(event){


    this.http.get("http://93.49.6.246:3000/visiting").subscribe(data => {
      console.log(data)
      this.response = data

     })


    if(this.pass == "sanmarco"){
      this.hideTable = true
    }
    else if(this.pass == ""){
      alert("Compila il campo password!")
    }
    else
    alert("Password non valido!")
    
     event.stopPropagation()
  }









  

}
