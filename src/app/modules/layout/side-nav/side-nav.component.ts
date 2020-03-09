import {Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth.service';

declare var $;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
   full_name:string =""; 
  constructor(private auth:AuthService) {
  }

  ngOnInit() {
    $(document).ready(() => {
      $('.sidebar-menu').tree();
    });
    this.auth.getUserInfo().subscribe(data=>{
      let result :any =data ; 
      this.full_name=result.user[0].nom+" "+result.user[0].prenom
      console.log(result); 
    })
  }

}
