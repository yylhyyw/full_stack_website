import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SignInFormComponent } from './user_components/sign-in-form/sign-in-form.component';
import { RegisterFormComponent } from './user_components/register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor } from './interceptor/error.interceptor';
import { HomeActiveDealListComponent } from './home/home-active-deal-list/home-active-deal-list.component';
import { HomeExpiredDealListComponent } from './home/home-expired-deal-list/home-expired-deal-list.component';
import { HomeFavoriteDealListComponent } from './home/home-favorite-deal-list/home-favorite-deal-list.component';
import { HomeDraftsDealListComponent } from './home/home-drafts-deal-list/home-drafts-deal-list.component';
import { HomeDealCreateComponent } from './home/home-deal-create/home-deal-create.component';
import { HomeDealFeatureComponent } from './home/home-deal-feature/home-deal-feature.component';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SignInFormComponent,
    RegisterFormComponent,
    HomeComponent,
    HomeDealCreateComponent,
    HomeDraftsDealListComponent,
    HomeFavoriteDealListComponent,
    HomeExpiredDealListComponent,
    HomeActiveDealListComponent,
    HomeDealFeatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
