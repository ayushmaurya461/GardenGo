import { Component, OnInit, ViewChild } from '@angular/core';

import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

	img1 ="../../../../assets/Carousel/img1.webp";
	img2 ="../../../../assets/Carousel/img2.jpg";
	img3 ="../../../../assets/Carousel/img3.jpg";
	img4 ="../../../../assets/Carousel/img4.jpeg";
	img5 ="../../../../assets/Carousel/img5.jpg";
	img6 ="../../../../assets/Carousel/img6.webp";	
	
	images = [this.img1, this.img2, this.img3, this.img4, this.img5, this.img6];

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


