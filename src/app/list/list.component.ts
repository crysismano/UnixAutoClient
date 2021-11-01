import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CarModel } from '../model';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private http: HttpClient, private _liveAnnouncer: LiveAnnouncer) { }

  displayedColumns: string[] = ['modelId', 'modelName', 'manufacturerName', 'modelPrice', 'actions'];

  carModels = new MatTableDataSource<TableElement>();

  ngOnInit() {
    this.getCarModels();
  }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  temp: TableElement[] = [];

  getCarModels() {
    this.http.get<CarModel[]>('/api/CarModels').subscribe(
      resp => {
        resp.forEach(element => {
          this.temp.push({
            modelId: element.id,
            modelName: element.name,
            manufacturerName: element.carManufacturer.name,
            modelPrice: element.modelDetail.price
          })
        });
        this.carModels = new MatTableDataSource(this.temp);
        this.carModels.sort = this.sort;
      }
    );
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

export interface TableElement {
  modelId: number;
  modelName: string;
  manufacturerName: string;
  modelPrice: number;
}
