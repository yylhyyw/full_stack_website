import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeActiveDealListComponent } from './home-active-deal-list/home-active-deal-list.component';
import { HomeExpiredDealListComponent } from './home-expired-deal-list/home-expired-deal-list.component';
import { HomeFavoriteDealListComponent } from './home-favorite-deal-list/home-favorite-deal-list.component';
import { HomeDraftsDealListComponent } from './home-drafts-deal-list/home-drafts-deal-list.component';

@NgModule({
  declarations: [HomeActiveDealListComponent, HomeExpiredDealListComponent, HomeFavoriteDealListComponent, HomeDraftsDealListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
