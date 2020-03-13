import { Component, OnInit } from '@angular/core';
import { ExposantService ,Exposant} from './exposants.service';
import {TableModule} from 'primeng/table';

@Component({
  selector: 'app-exposants',
  templateUrl: './exposants.component.html',
  styleUrls: ['./exposants.component.scss']
})
export class ExposantsComponent implements OnInit {
 
  exposants: Exposant[];

  constructor(private exposantService:ExposantService) { }

  ngOnInit() {
    this.exposantService.getexposant().then(data=>{
    this.exposants=data;
      console.log(data) ; 
    })
    
  }
  
}
