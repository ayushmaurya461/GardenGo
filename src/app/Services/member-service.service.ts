import { EventEmitter, Injectable, Output } from '@angular/core';
import { Member } from '../Models/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberServiceService  {  
  members : Member[] = [
    {
      name : "Ayush Maurya",
      email : "ayushmaurya461@gmail.com",
      telephone : 8168005875,
      gender : "Male",
      password : "123456"
    }
  ];
  loggedin = false;
  constructor() { }


  addMember(name : string, email : string, gender : string, telephone: number, password : string ){
    this.members.push({
      name: name,
      email: email,
      gender: gender,
      telephone : telephone,
      password : password
    });
    
  }


}
