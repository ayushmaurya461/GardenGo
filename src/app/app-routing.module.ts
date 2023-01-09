import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CareersComponent } from './components/careers/careers.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { HomeComponent } from './components/home/home.component';
import { LoggedinProfileComponent } from './components/member/loggedin-profile/loggedin-profile.component';
import { LoginComponent } from './components/member/login/login.component';
import { ServicesComponent } from './components/ourServices/services.component';
import { SubmitReviewComponent } from './components/customer-reviews/submit-review/submit-review.component';
import { FreeConsultationComponent } from './free-consultation/free-consultation.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'services', component: ServicesComponent },
  {path: 'careers', component: CareersComponent},
  {path: 'customer-reviews', component: CustomerReviewsComponent},
  {path: 'submit-review', component: SubmitReviewComponent},
  {path: 'profile', component: LoggedinProfileComponent},
  {path: 'free-consultation', component: FreeConsultationComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
