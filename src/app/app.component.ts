import { Component } from '@angular/core';
import { saveAs } from 'file-saver';

import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularUpload';
  hint = "Choose file"
  fileUploadedContent = ""

file: File = null

uploadUrlPath = 'src/assets/uploads/'
  fileReader: any;
  fileString: any;



  constructor(@Inject(DOCUMENT) document) {
  
 }


  onFileSelected(event){
    console.log(event)

    this.hint = event.target.files[0].name

    if((this.hint).split('.').pop() === "pdf444"){
      this.hint = null
      alert("Estensione file non permesso! Selezionare un file compatibile")

     // document.getElementById("openModalButton").click();
      
 }else
 {
    // The file content itself
    this.file =<File> event.target.files[0];
    this.onText()
 }
  }



  onText(){
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
 
     // Entire file
      var fileAsString = ( <String> (fileReader.result)).split('\n')
      var outputFile = ""
      // Read line by line and construct file
      for(var line = 0; line < fileAsString.length; line++){
       console.log(line  + '\n');
       //Adding whatever you wish   
       outputFile = outputFile + fileAsString[line] + '\n'
      }
      document.getElementById("p1").innerHTML = outputFile
    }
    fileReader.readAsText(this.file)
  }



  onUpload(){

    if(this.file === null){
      alert("Select a file!")

    }

  
    console.log("***********   " + document.getElementById('customFile'))

   let fileReader = new FileReader();
   fileReader.onload = (e) => {

    // Entire file
     var fileAsString = ( <String> (fileReader.result)).split('\n')


     var outputFile = ""
     // Read line by line and construct file
     for(var line = 0; line < fileAsString.length; line++){
      console.log(fileAsString[line] + "  @@# ");
      //Adding whatever you wish
      outputFile = outputFile + fileAsString[line] + "  @@# "
     }
     
     // Sending final file...[can be fixed some more]
      saveAs(new Blob([outputFile], { type: 'text/csv;charset=utf-8' }), "hello_world.C80");
   }
   fileReader.readAsText(this.file)

  }

}
