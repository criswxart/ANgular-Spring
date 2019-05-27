import { Component, OnInit } from '@angular/core';
import { Profesional } from '../../models/profesional.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: []
})
export class TopnavbarComponent implements OnInit {

  profesional: Profesional;

  constructor( public router: Router) { }

  ngOnInit() {
    //this.profesional = this._profesionalService;
  }

  
}
