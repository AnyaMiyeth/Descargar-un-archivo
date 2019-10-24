import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-load-file',
  templateUrl: './load-file.component.html',
  styleUrls: ['./load-file.component.css']
})
export class LoadFileComponent implements OnInit {
 data: string;
  constructor() { }

  ngOnInit() {
  }

  downloadtest() {
    //var data = document.getElementById("data").innerText;
    var downloadFileName = "downloadtest.txt";

    var blob = new Blob([this.data], { "type": "application/x-msdownload" });
  
    if (window.navigator.msSaveBlob) { 
        // IE, Edge
        window.navigator.msSaveOrOpenBlob(blob, downloadFileName); 
    }
    else {
        // Chrome, FireFox
        var link = document.createElement('a');
        link.setAttribute("download", downloadFileName);
        link.href = URL.createObjectURL(blob);
        var evt = document.createEvent( "MouseEvents" );
        evt.initEvent( "click", false, true );
        link.dispatchEvent( evt );
    }
}


}
