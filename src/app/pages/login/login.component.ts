import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get f() { return this.loginForm.controls; }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {

  }

  ngOnDestroy() {
  }

  submitLogin(){
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    if(this.loginForm.valid){
      this.authService.login(email, password)
        .subscribe(user => {
          if(!user){
            alert('Nem található a felhasználó!');
          } else {
            localStorage.setItem('user', JSON.stringify(user));

            this.router.navigate(['dashboard']);
          }
        });
    } else {
      alert('Helytelen adatok!');
    }
  }

}
