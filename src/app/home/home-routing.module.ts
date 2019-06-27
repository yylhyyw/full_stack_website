import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeDealCreateComponent } from './home-deal-create/home-deal-create.component';
import { HomeComponent } from './home.component';
import { HomeActiveDealListComponent } from './home-active-deal-list/home-active-deal-list.component';
import { HomeExpiredDealListComponent } from './home-expired-deal-list/home-expired-deal-list.component';
import { HomeFavoriteDealListComponent } from './home-favorite-deal-list/home-favorite-deal-list.component';
import { HomeDraftsDealListComponent } from './home-drafts-deal-list/home-drafts-deal-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: HomeActiveDealListComponent },
      { path: 'active', component: HomeActiveDealListComponent },
      { path: 'expired', component: HomeExpiredDealListComponent },
      { path: 'favorite', component: HomeFavoriteDealListComponent },
      { path: 'drafts', component: HomeDraftsDealListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
