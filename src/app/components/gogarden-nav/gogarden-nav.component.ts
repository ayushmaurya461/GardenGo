import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MemberServiceService } from 'src/app/Services/member-service.service';
import { LoginService } from '../member/login/login.service';

@Component({
  selector: 'app-gogarden-nav',
  templateUrl: './gogarden-nav.component.html',
  styleUrls: ['./gogarden-nav.component.css'],
})
export class GogardenNavComponent implements OnInit, OnChanges {
  private userSub! : Subscription;
  isAuthenticated = false;
  
  alreadyMember = false;
  memberName = '';
  isMenuCollapsed = true;

  constructor(private memberService : MemberServiceService,
              private loginService : LoginService) { }

  ngOnInit() {
    this.userSub = this.loginService.user.subscribe( user => {
      this.isAuthenticated = !user? false : true;
    });
    
  }

  ngOnChanges(){  

  }

  onLogout(){
    this.loginService.logout();
  }

}
