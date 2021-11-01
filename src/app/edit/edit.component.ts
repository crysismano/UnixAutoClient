import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarModel } from '../model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  carModel:CarModel = {id: 0, name:'',modelDetail:{id:0, yearOfManufacture:0, price:0,seats:0}, modelDetailId:0, carManufacturerId:0,carManufacturer:{id:0,name:''}};
  constructor(private route: ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id'] != undefined){
      this.http.get<CarModel>('/api/CarModels/'+this.route.snapshot.params['id']).subscribe(resp =>{ this.carModel = resp});
    }
  }

  submit(){
    this.http.post<CarModel>('/api/CarModels/', this.carModel).subscribe();
  }

}
