import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from '../model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  carModel!:CarModel;
  loaded: Boolean | undefined;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      this.http.get<CarModel>('/api/CarModels/'+params['id']).subscribe(resp=> {this.carModel = resp; this.loaded = true;});
    });
  }

  onDelete(){
    this.http.delete<CarModel>('/api/CarModels/'+ this.carModel.id).subscribe();
  }

}
