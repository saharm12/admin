import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  full_name:string=""; 
  constructor(private auth:AuthService) {
  }

  ngOnInit() {
    this.auth.getUserInfo().subscribe(data=>{
      let result :any =data ; 
      this.full_name=result.user[0].nom+" "+result.user[0].prenom
      console.log(result); 
    })
  }

}
