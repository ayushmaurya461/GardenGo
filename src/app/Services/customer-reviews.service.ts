import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Review } from '../Models/review.model';

@Inject({
  providedIn: 'root'
})
export class CustomerReviewsService {
 
  reviews : Review[] = [
    {
      name : "Ajay Kumar",
      gender: 'male',
      address : "Bank Colony, Yamunanagar",
      state: "Haryana",
      review: "They provide the best Service.",
      image: '../assets/Home/instagram.png',
      rating: 4.3,
      email: ''
    },
  ];

  constructor(private https: HttpClient) { }

  postReview(fullName: string, email: string, gender: string, rating : number,address: string, state: string, review: string){
    const reviewData : Review = {
      name : fullName,
      email : email,
      gender : gender,
      rating : rating,
      address : address,
      state : state,
      review : review
    }
    this.https.post('https://gardengo-461-default-rtdb.firebaseio.com/reviews.json',
    reviewData,{
      observe : 'response'
    }).subscribe(resData => {
      console.log(resData);
    },
    error => {
      console.log(error); 
    })
  }

}
