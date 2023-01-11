import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  message ='form';
  showAlertbox = false;
  show = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleBackdrop(){
    this.showAlertbox = false;
  }

  submitForm(form: NgForm){
    console.log(form.value);
    form.reset();
    this.showAlertbox=true;
  }

}
