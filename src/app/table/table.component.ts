import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, HttpClientModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  requestData!: any;
  displayedColumns: string[] = [
    'demo-position',
    'demo-name',
    'demo-weight',
    'demo-symbol',
  ];
  dataSource: any;
  test = 'test';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('../../assets/table-data.json').subscribe((res) => {
      this.requestData = res;
      this.dataSource = this.requestData;
    });
  }

  displayData() {
    alert(this.test);
  }
}
