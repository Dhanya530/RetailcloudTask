import { Component, OnInit } from '@angular/core';
import { DataService } from '../Data.service';
import { saveAs } from 'file-saver';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
})
export class Page1Component implements OnInit {
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
    const header = Object.keys(this.data[0]);
    let csv = this.data.map(row => header.map(fieldName => JSON.stringify(row[fieldName])).join(','));
    csv.unshift(header.join(','));
    let csvArray = csv.join('\r\n');
    var blob = new Blob([csvArray], {type: 'text/csv' })
    saveAs(blob, "myFile.csv");
  }
}
