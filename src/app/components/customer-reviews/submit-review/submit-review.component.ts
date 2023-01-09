import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerReviewsService } from 'src/app/Services/customer-reviews.service';


@Component({
  selector: 'app-submit-review',
  templateUrl: './submit-review.component.html',
  styleUrls: ['./submit-review.component.css']
})
export class SubmitReviewComponent implements OnInit {
  // genders = ['male', 'female' ,'others']
  @ViewChild('f')
  reviewForm!: NgForm;

  defaultState ='';
  defaultGender='';
  ratingValue: number = 2;

  constructor(private customerReviews : CustomerReviewsService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.reviewForm.value);
    
    
    this.reviewForm.reset();

  }
}
