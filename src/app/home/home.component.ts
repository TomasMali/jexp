import { Component, OnInit } from '@angular/core';

import { saveAs } from 'file-saver';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
  }

  title = 'angularUpload';
  hint = "Choose file" 
  fileUploadedContent = ""
  file: File = null
  valid: boolean = true

  uploadUrlPath = 'src/assets/uploads/'
  fileReader: any;
  fileString: any;

  response: any
  pIva: string

  constructor(@Inject(DOCUMENT) document, public http: HttpClient) {
  }

  onFileSelected(event) {
    
    
  
    this.hint = event.target.files[0].name
    const ext = (this.hint).split('.').pop()
    if (((this.hint).split('.').pop())[0] !== "C" || (((this.hint).split('.').pop())).length >3 ) {
      this.hint = null
      alert('L\'estensione ".' + ext + '" del file inserito non permesso! I file compatibili sono quelli che presentano estensione da "C00" a "CZZ".')
      window.location.reload();
      return
      // document.getElementById("openModalButton").click(); 
    } else {
      // The file content itself
      this.file = <File>event.target.files[0];
      this.onText()
    }
  }

  onText() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      // Entire file
      var fileAsString = (<String>(fileReader.result)).split('\n')
      var outputFile = ""

    // console.log("Il file con ext è:  "+ fileAsString[0].toString()) 
      // Controlla che inizi sempre per IE815
      if (fileAsString[1].substring(0, 5) !== "IE815") {
        this.file = null
     //   console.log(fileAsString[1].substring(0, 4))
        document.getElementById("p1").innerHTML = ""
        alert("File non processabile. E' richiesto un file IE815 - Draft DAA Telematico.")
        window.location.reload();
        return
      }

      // Read line by line and construct file
      for (var line = 0; line < fileAsString.length; line++) {
        //Adding whatever you wish   
        outputFile = outputFile + fileAsString[line] + '\n'
      }
      document.getElementById("p1").innerHTML = outputFile
    }
    fileReader.readAsText(this.file)
  }

  // Construct the final file 
  onUpload() {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      // Entire file as string[]
      var fileAsArrayString = (<string>(fileReader.result)).split('\n')
      var outputFile = ""
      var iii = -1
      // Read line by line and construct file
      for (var line = 0; line < fileAsArrayString.length; line++) {
        var finalLine = ""
        var currentLine = fileAsArrayString[line]
        //###########################################################################################################
        let split: Array<string> = new Array();
        split = null
        split = currentLine.split("\t");
        iii = iii + 1;
        // preparo il file di output
        // salto la prima riga
        switch (iii) {
          case 0:
            {
              // idoc: non devo fare nulla
              outputFile = outputFile + currentLine
              // save the piva
              var aux = currentLine.split(/(\s+)/).filter(function (e) { return e.trim().length > 0; })
              this.pIva = aux[3].trim()
              this.getConfig(this.hint, this.pIva)
            }
            continue;
          case 1:
            {
              // record A
              // controllo se ho garanti    break;
              var nGaranti = parseInt((split[80]).trim())
            //  console.log("\n Iterazione[" + line + "] nGaranti vale :  " + nGaranti + "\n")
              // se ho iterazioni garanti, per trovare l'iterazione successiva devo moltiplicare questo numero
              // per
              // i campi da saltare
              //   var posDau = 81;
              var posGaranti = 80
              // trovo iterazione successiva (Dau)
              var posDau = this.findNextIteration(parseInt((split[posGaranti]).trim()), 10, posGaranti);
              // trovo iterazione successiva (Trasporto)
              var posTrasporto = this.findNextIteration(parseInt((split[posDau]).trim()), 3, posDau);
              // trovo iterazione successiva (Certificati)
              var posCert = this.findNextIteration(parseInt((split[posTrasporto]).trim()), 9, posTrasporto);
              // controllo iterazioni Certificati
              var nCert = parseInt((split[posCert]).trim());
              // intanto mi salvo i dati fino a qui.
              for (var j1 = 0; j1 <= posCert; j1++) {
                //  console.log("######  Sono in FOR: " + iii + " e split[j1] vale PRIMA DEL METODO: \n" + currentLine+ "\n")
                finalLine = finalLine + (split[j1] + "\t");
                //    console.log("######  Sono in FOR: " + iii + " e split[j1] vale DOPO IL METODO: \n" + currentLine+ "\n")
              }
              var posRecC = posCert + 1;
              // se ho certificati devo andare ad aggiornare il tracciato
              if (nCert > 0) {
                // trovo la fine dei certificati
                posRecC = posRecC + (nCert * 6);
                // per ogni record di certificato scrivo i primi campi as is
                var countField = 0;
                for (var j2 = posCert + 1; j2 < posRecC; j2++) {
                  countField++;
                  finalLine = finalLine + (split[j2] + "\t");
                  if (countField == 6) {
                    countField = 0;
                    finalLine = finalLine + ("\t" + "\t");
                  }
                }
              }
              finalLine = finalLine + this.elabRecordC(posRecC, split)
              outputFile = outputFile + finalLine
            }
            break;

          default:
            {
              // code block
              if (currentLine.trim() !== "") {
                finalLine = finalLine + (split[0] + "\t" + split[1] + "\t" + this.elabRecordC(2, split))
                outputFile = outputFile + finalLine
              }
            }
            break;
        }
        //###########################################################################################################
      }
      // Sending final file...[can be fixed some more]
      saveAs(new Blob([outputFile], { type: 'text/csv;charset=utf-8' }), this.hint + "_ELAB");

    }
    fileReader.readAsText(this.file)
  }

  elabRecordC(posRecC_N, split_N) {
    var posImba = posRecC_N + 22;
    var finalC = ""
    // scrivo la prima parte fissa
    for (var i1 = posRecC_N; i1 <= posImba; i1++) {
      finalC = finalC + (split_N[i1] + "\t");
    }
    // leggo quanti imballaggi ho
    var nImba = parseInt(split_N[posImba].trim());
    var posVino = posImba + 1;
    // se ho imballaggi devo andare ad aggiornare il tracciato
    if (nImba > 0) {
      // trovo la fine dei certificati
      posVino = posVino + (nImba * 7);
      // per ogni record di imballaggi scrivo i primi campi as is
      var countField = 0;
      for (var j4 = posImba + 1; j4 < posVino; j4++) {
        countField++;
        finalC = finalC + (split_N[j4] + "\t");
        if (countField == 7) {
          countField = 0;
          finalC = finalC + ("\t");
        }
      }
    }

    // fatto ciò, posso scrivere fino alla fine
    for (var i5 = posVino; i5 < split_N.length; i5++) {
      finalC = finalC + (split_N[i5] + "\t");
    }

    finalC = finalC.substring(0, finalC.length - 1);
    return finalC
  }
  findNextIteration(nIter, fieldIter, posIter) {
    if (nIter > 0)
      return posIter + 1 + (nIter * fieldIter);
    return posIter + 1;
  }

  getConfig(docName, p_iva) {
    let article = {
      piva: p_iva,
      docname: docName
    }
    /**
   * 
     this.http.post("http://93.49.6.246:3000/visiting/insert", article).subscribe(data => {
     console.log(data)
    })
    this.http.post("https://whispering-ravine-10287.herokuapp.com/visiting/insert", article).subscribe(data => {
      console.log(data)
     })
    */
    this.http.post("https://infinite-savannah-92995.herokuapp.com/visiting/insert", article).subscribe(data => {
      console.log("visiting/insert done")
    })
  }

}
