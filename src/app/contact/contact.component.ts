import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { HttpClient, HttpHeaders } from '@angular/common/http';
const url_heroku = "https://infinite-savannah-92995.herokuapp.com/email/send";
const url_pi = "http://93.49.6.246:3000/email/send";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name: any
email: any
emailtext: any
  constructor(public http: HttpClient) { }

  ngOnInit() {
  }


  call(){
    console.log(this.name)
 
    let params = {
      name: this.name,
      email: this.email,
      emailtext: this.emailtext
    }

    this.http.post(url_heroku, params).subscribe(data => {
      console.log(data)
      if (data == true) {
        alert("Email inviato!")
        this.name= ""
        this.email= ""
        this.emailtext = ""
      }                                      
      else
        {
          this.http.post(url_pi, params,  
          {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
            responseType: 'json' 
         }
                
          ).subscribe(data => {
            console.log(data)
            if (data == true) {
              alert("Email inviato!")
              this.name= ""
              this.email= ""
              this.emailtext = ""
            }
            else
           {
            alert("Email inviato!!!")
            this.name= ""
            this.email= ""
            this.emailtext = ""
           }
          });
        }
    
    });




  }
}
