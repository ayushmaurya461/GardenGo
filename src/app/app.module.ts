import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NgbCollapseModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

import { AppComponent } from './app.component';
import { GogardenNavComponent } from './components/gogarden-nav/gogarden-nav.component';
import { GogardenFooterComponent } from './components/gogarden-footer/gogarden-footer.component';
import { HomeComponent } from './components/home/home.component';
import { CareersComponent } from './components/careers/careers.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { SubmitReviewComponent } from './components/customer-reviews/submit-review/submit-review.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { OurWorksComponent } from './components/home/our-works/our-works.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { ServicesComponent } from './components/ourServices/services.component';
import { FreeConsultationComponent } from './free-consultation/free-consultation.component';
import { AlertBoxComponent } from './components/member/alert-box/alert-box.component';
import { LoggedinProfileComponent } from './components/member/loggedin-profile/loggedin-profile.component';
import { LoginComponent } from './components/member/login/login.component';
import { LoadingSpinnerComponent } from './Shared/loadingSpinner/loading-spinner.component';

@NgModule({
  declarations: [
    AlertBoxComponent,
    AppComponent,
    CareersComponent,
    CarouselComponent,
    ContactUsComponent,
    CustomerReviewsComponent,
    FreeConsultationComponent,
    GogardenNavComponent,
    GogardenFooterComponent,
    HomeComponent,
    LoadingSpinnerComponent,
    LoggedinProfileComponent,
    LoginComponent,
    OurWorksComponent,
    ServicesComponent,
    SubmitReviewComponent,
    ServicesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    NgbModule,
    NgbCollapseModule,
    NgbCarouselModule,
    NgFor,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
