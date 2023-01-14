import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

	image1 ='https://thumbs.dreamstime.com/b/modern-house-beauty-garden-terrace-91335744.jpg';
  	image2 ='https://images.unsplash.com/photo-1633330948542-0b3bdeefcdb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Z2FyZGVuJTIwaG91c2V8ZW58MHx8MHx8&w=1000&q=80';
  	image3 = 'https://media.designcafe.com/wp-content/uploads/2020/04/16093625/garden-ideas-for-small-spaces.jpg';
  
	img4 ="https://tricitypropertysearches.com/wp-content/uploads/2022/03/potted-plants-low-budget-ideas-1024x768.jpg";
	img5 ="https://goodhomes.wwmindia.com/content/2018/apr/tn1523025622.jpg";
	
	images = [this.image1, this.image2, this.image3, this.img4, this.img5];

	paused = true;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;


	@ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  ngOnInit(){
    
  }

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause(); 
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
	}


}


