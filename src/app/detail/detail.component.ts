import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  idpass ='';
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    thi.idpass='id';
  }

}