import { Component, OnInit } from '@angular/core';
import { MemberServiceService } from 'src/app/Services/member-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagePath : any =  '../../assets/Home/photo1.jpeg';
  background: any;


  //Testing
  constructor(private memberService : MemberServiceService) { }

  ngOnInit(): void {

    //Testing
    console.log(this.memberService.members);
  }

}
