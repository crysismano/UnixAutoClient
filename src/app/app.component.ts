import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CarModel } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  navBarCollapsed = true;
}
