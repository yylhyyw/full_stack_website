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

import { ProductsComponent } from './products/products.component';
import { ProductsActiveListComponent } from './products/products-active-list/products-active-list.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsActiveListComponent } from './groups/groups-active-list/groups-active-list.component';
import { InboundComponent } from './inbound/inbound.component';
import { ToConfirmListComponent } from './inbound/to-confirm-list/to-confirm-list.component';
import { ReportedListComponent } from './inbound/reported-list/reported-list.component';
import { HistoryListComponent } from './inbound/history-list/history-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LinkifyPipe } from './custom-pipes/linkify.pipe';
import { UserGroupsComponent } from './groups/user-groups/user-groups.component';
import { UserJoinComponent } from './groups/user-join/user-join.component';
import { ProposeDealComponent } from './home/propose-deal/propose-deal.component';
import { ActivateComponent } from './user_components/activate/activate.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SignInFormComponent,
    RegisterFormComponent,
    HomeComponent,
    HomeDraftsDealListComponent,
    HomeFavoriteDealListComponent,
    HomeExpiredDealListComponent,
    HomeActiveDealListComponent,
    ProductsComponent,
    ProductsActiveListComponent,
    GroupsComponent,
    GroupsActiveListComponent,
    InboundComponent,
    ToConfirmListComponent,
    ReportedListComponent,
    HistoryListComponent,
    DashboardComponent,
    LinkifyPipe,
    UserGroupsComponent,
    UserJoinComponent,
    ProposeDealComponent,
    ActivateComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
