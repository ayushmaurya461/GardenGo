import { Component, OnInit} from '@angular/core';

import { LoginService } from './components/member/login/login.service';
import { MemberServiceService } from './Services/member-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GoGarden';
  
  loggedIn! : boolean;
  memberJoined!: boolean;
  constructor(
    private memberService: MemberServiceService,
    private loginService: LoginService          
    ){}

  ngOnInit(){
    this.loginService.autoLogin()
  }
}
