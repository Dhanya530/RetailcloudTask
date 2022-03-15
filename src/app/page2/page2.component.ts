import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';
import { saveAs } from 'file-saver';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
})
export class Page2Component implements OnInit {
  data: any[];
  constructor(private dataService: DataService) {
    this.data = [];
  }

  ngOnInit(): void {
    this.getData();
  }
  getData = () => {
    this.dataService.getData().subscribe((response) => {
      if (response.hasOwnProperty('body')) {
        this.data = response.body;
      }
    });
  };
  
  download() {
    const options = { 
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: 'CSV',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,

    };
    const csvExporter = new ExportToCsv(options);
 
    let value=csvExporter.generateCsv(this.data);
}

}
