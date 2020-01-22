import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{


  title = 'angularUpload';
   LOGO = "../assets/Sanmarco-informatica_logo.jpg"
  constructor(private spinner: NgxSpinnerService) {
       // Registro 
  }

  ngOnInit() {
    /** spinner starts on init
    this.spinner.show()

    setTimeout(() => {
    
      this.spinner.hide();
    }, 500);

    */
  }


  ngAfterViewInit() {
    //  this.spinner.hide()
   
     }



}


