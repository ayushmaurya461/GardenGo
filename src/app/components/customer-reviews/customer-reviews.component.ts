import { Component, OnInit } from '@angular/core';
import { CustomerReviewsService } from 'src/app/Services/customer-reviews.service';
import { Review } from 'src/app/Models/review.model';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent implements OnInit {
  reviews : Review[] = [] ;
  constructor( private customerReview: CustomerReviewsService) {

   }

  ngOnInit(): void {
    this.reviews = this.customerReview.reviews;
  }

}
