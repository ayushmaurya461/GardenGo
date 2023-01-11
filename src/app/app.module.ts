import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { NgbCollapseModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor } from '@angular/common';

import { AlertBoxComponent } from './Shared/alert-box/alert-box.component';
import { AppComponent } from './app.component';
import { CareersComponent } from './components/careers/careers.component';
import { CarouselComponent } from './components/home/carousel/carousel.component';
import { ContactUsComponent } from './components/home/contact-us/contact-us.component';
import { CustomerReviewsComponent } from './components/customer-reviews/customer-reviews.component';
import { FreeConsultationComponent } from './free-consultation/free-consultation.component';
import { GogardenNavComponent } from './components/gogarden-nav/gogarden-nav.component';
import { GogardenFooterComponent } from './components/gogarden-footer/gogarden-footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoadingSpinnerComponent } from './Shared/loadingSpinner/loading-spinner.component';
import { LoggedinProfileComponent } from './components/member/loggedin-profile/loggedin-profile.component';
import { LoginComponent } from './components/member/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OurWorksComponent } from './components/home/our-works/our-works.component';
import { SubmitReviewComponent } from './components/customer-reviews/submit-review/submit-review.component';
import { ServicesComponent } from './components/ourServices/services.component';
import { AuthInterceptorService } from './components/member/login/auth-interceptor.service';

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
    ServicesComponent,
    SubmitReviewComponent,
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
