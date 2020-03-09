import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-exposants',
  templateUrl: './exposants.component.html',
  styleUrls: ['./exposants.component.scss']
})
export class ExposantsComponent implements OnInit {
 
  
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }
  Supprimer(id)
  {
    this.auth.deleteuser(id).subscribe(data=>{
      let result:any=data ; 
    })
  }
}
