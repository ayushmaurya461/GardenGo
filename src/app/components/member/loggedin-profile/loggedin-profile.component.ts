import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/Models/member.model';
import { MemberServiceService } from 'src/app/Services/member-service.service';

@Component({
  selector: 'app-loggedin-profile',
  templateUrl: './loggedin-profile.component.html',
  styleUrls: ['./loggedin-profile.component.css']
})
export class LoggedinProfileComponent implements OnInit {
  member : Member[] = [];
  constructor(
    private memberService: MemberServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.member = this.memberService.members;
  }

  logout(){

    this.member.pop();
    console.log(this.member);
    this.router.navigate(['/']);
  }

}
