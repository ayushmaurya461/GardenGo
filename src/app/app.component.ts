import { Component} from '@angular/core';
import { MemberServiceService } from './Services/member-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GoGarden';
  
  loggedIn! : boolean;
  memberJoined!: boolean;
  constructor(private memberService : MemberServiceService){}


  //Setting Logging in
  hasMemberJoined(event : any){    
    
  }
}
