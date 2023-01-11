import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.css']
})
export class OurWorksComponent implements OnInit {
  image1 ='https://thumbs.dreamstime.com/b/modern-house-beauty-garden-terrace-91335744.jpg';
  image2 ='https://images.unsplash.com/photo-1633330948542-0b3bdeefcdb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FyZGVuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80';
  image3 = 'https://media.designcafe.com/wp-content/uploads/2020/04/16093625/garden-ideas-for-small-spaces.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
