import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gogarden-footer',
  templateUrl: './gogarden-footer.component.html',
  styleUrls: ['./gogarden-footer.component.css']
})
export class GogardenFooterComponent implements OnInit {
  [x: string]: any;
  socialIcons = {
    facebookIcon: '../../assets/Home/facebook.png',
    twitterIcon: '../../assets/Home/twitter.png',
    instagramIcon: '../../assets/Home/instagram.png',
    googleIcon: '../../assets/Home/google.png',
    linkedinIcon: '../../assets/Home/linkedin.png'

  }

  constructor() { }

  ngOnInit(): void {
  }

}
