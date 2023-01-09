import { Component,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginMode : boolean = true;
  isLoading : boolean = false;
  error : string = "";
  
  constructor(
    private loginService : LoginService,
    private router : Router
  ) { }

  ngOnInit(){}

  switchMode(){
    this.loginMode = !this.loginMode;
  }

  signup(form: NgForm){
    this.error = "";
    this.isLoading = true;
    const email= form.value.email;
    const password= form.value.password;
    
    if(!form.valid){
      return;
    }
    
    this.loginService.signup(email, password).subscribe(
      resData => {
        this.isLoading = false;
        console.log(resData);
        this.router.navigate(['./']);
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;        
      }
    );
    form.reset();
  }
  
  login(form: NgForm){
    this.error = "";
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    
    if(!form.valid){
      return;
    }

    this.loginService.login(email, password).subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['./']);
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false
      }
    );
    form.reset();
    
  }
}
