import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
  showAlertBox = false;
  show= true;
  message = "application";
  constructor() { }

  ngOnInit(){
  }

   toggleBackdrop(){
    this.showAlertBox = false;
   } 

   formSubmit(form : NgForm){
    console.log(form.value);
    form.reset();
    this.showAlertBox = true;
   }

}
