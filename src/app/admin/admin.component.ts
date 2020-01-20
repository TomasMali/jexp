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


    this.http.get("https://whispering-ravine-10287.herokuapp.com/visiting").subscribe(data => {
      console.log(data)
      this.response = data

     })

     let params = {
      pass: this.password
    }

     this.http.post("http://localhost:3000/visiting/login", params).subscribe(data => {
      console.log(data)
      // const myObjStr = JSON.stringify(data);
      if(data == true){
        this.hideTable = true
        this.password = ""
      }
      else
      alert("Password non valido!!!")
      
     });
  
  
  }









  

}
