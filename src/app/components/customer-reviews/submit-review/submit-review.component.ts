import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerReviewsService } from 'src/app/components/customer-reviews/customer-reviews.service';


@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.css']
})
export class SubmitReviewComponent implements OnInit {
  // genders = ['male', 'female' ,'others']
  @ViewChild('f')
  reviewForm!: NgForm;

  message='review';
  showAlertBox = false;
  show=false;

  defaultState ='';
  defaultGender='';
  ratingValue: number = 2;

  constructor(private customerReviews : CustomerReviewsService) { }

  ngOnInit(){
  }

  toggleBackdrop(){
    this.showAlertBox = false;
  }

  onSubmit(){
    console.log(this.reviewForm.value);
    this.customerReviews.postReview(
      this.reviewForm.value.fullName,
      this.reviewForm.value.email,
      this.reviewForm.value.gender,
      this.reviewForm.value.rating,
      this.reviewForm.value.address,
      this.reviewForm.value.state,
      this.reviewForm.value.review
      );
    
    this.reviewForm.reset();
    this.showAlertBox = true;

  }
}
 