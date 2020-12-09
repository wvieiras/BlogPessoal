import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from '../model/UserLogin';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UserLogin = new UserLogin()

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(){
  }

  entrar(){
    this.authService.logar(this.usuarioLogin).subscribe((resp: UserLogin) => {
      this.usuarioLogin = resp
      localStorage.setItem('token', this.usuarioLogin.token)
      this.router.navigate(['/feed'])
    })
  }

}