import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
email:string=""; 
mdp:string=""; 
  constructor( private auth:AuthService, private router : Router) {
  }

  ngOnInit() {
    $('body').addClass('hold-transition login-page');
    $(() => {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }

  ngOnDestroy(): void {
    $('body').removeClass('hold-transition login-page');
  }

  login()
  {
    this.auth.loginUser(this.email,this.mdp).subscribe(data=>{
      let result:any = data ; 
      if(result.user==true) 
      {
        let token = result.token ; 
        localStorage.setItem('token',token) ; // eneregsiter le token dans le cache 
        localStorage.setItem('id',result.id) ; 
        this.router.navigate(['/members']);
        console.log(result);
      }
      
    })
  }
}
