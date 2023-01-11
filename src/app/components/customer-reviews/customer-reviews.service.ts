import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { exhaustMap, map, take } from 'rxjs';
import { Review } from '../../Models/review.model';
import { LoginService } from '../member/login/login.service';


@Injectable({
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

  constructor(
    private https: HttpClient,
    private loginService : LoginService
    ) { }

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
    }).subscribe(
      resData => {
        console.log(resData);
      },
      error => {
        console.log(error); 
      })
  }

  fetchReviews(){        
      return this.https.get<{ [key : string]: Review }>(
        'https://gardengo-461-default-rtdb.firebaseio.com/reviews.json',
      ).pipe(
          map((response => {
            const reviewsData : Review[] = [];
            for(const key in response){
              if(response.hasOwnProperty(key)){
                reviewsData.push({...response[key], id:key});
              }
            }
            return reviewsData;
          }))
        )
    }

}
