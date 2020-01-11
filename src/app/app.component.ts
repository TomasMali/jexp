import { Component } from '@angular/core';
import { saveAs } from 'file-saver';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularUpload';
  hint = "Choose file"

file: File = null

uploadUrlPath = 'src/assets/uploads/'
  fileReader: any;
  fileString: any;


  onFileSelected(event){
    console.log(event)
    // The file content itself
    this.file =<File> event.target.files[0];
    this.hint = event.target.files[0].name

    
  }


  onUpload(){

    if(this.file === null){
      alert("Select a file!")

    }

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
