import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CustomerReviewsService } from 'src/app/components/customer-reviews/customer-reviews.service';
import { Review } from 'src/app/Models/review.model';
import { LoginService } from '../member/login/login.service';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent implements OnInit {
  reviews : Review[] = [] ;
  loadingData = false;
  private userSub! : Subscription;
  canSubmitReview = false;


  constructor( 
      private customerReview: CustomerReviewsService,
      private loginService : LoginService) {

   }

  ngOnInit(){
    this.userSub = this.loginService.user.subscribe(
      user => {
        this.canSubmitReview = !user ? false : true;
      }
    );
    this.loadingData = true; 
    this.customerReview.fetchReviews().subscribe( 
      (reviewData : Review[]) =>{
        this.loadingData = false;
        this.reviews = reviewData;
    },
      err => {
        this.loadingData = false;
        console.log(err);
    });
  }

}
