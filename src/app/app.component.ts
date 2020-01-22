import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  ngAfterViewInit() {
 //  this.spinner.hide()

  }
  title = 'angularUpload';
   LOGO = "../assets/Sanmarco-informatica_logo.jpg"
  constructor(private spinner: NgxSpinnerService) {
       // Registro 
  }

  ngOnInit() {
    /** spinner starts on init */
    this.spinner.show()

    setTimeout(() => {
      /** spinner ends after 5 seconds */
      this.spinner.hide();
    }, 500);
  }



}


