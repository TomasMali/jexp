import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms"
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
name: any
  constructor() { }

  ngOnInit() {
  }


  call(){
    console.log(this.name)
    this.name= "Ciao"
  }
}
