import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './user_components/register-form/register-form.component';
import { SignInFormComponent } from './user_components/sign-in-form/sign-in-form.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
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
import { UserGroupsComponent } from './groups/user-groups/user-groups.component';
import { UserJoinComponent } from './groups/user-join/user-join.component';
import { ProposeDealComponent } from './home/propose-deal/propose-deal.component';
import {ActivateComponent} from './user_components/activate/activate.component';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'activate',
    component: ActivateComponent
  },
  {
    path: 'register',
    component: RegisterFormComponent
  },
  {
    path: 'signin',
    component: SignInFormComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: HomeActiveDealListComponent },
      { path: 'active', component: HomeActiveDealListComponent },
      { path: 'expired', component: HomeExpiredDealListComponent },
      { path: 'favorite', component: HomeFavoriteDealListComponent },
      { path: 'drafts', component: HomeDraftsDealListComponent },
      { path: 'propose', component: ProposeDealComponent }
    ]
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'product_active', component: ProductsActiveListComponent },
      { path: '', component: ProductsActiveListComponent }
    ]
  },
  {
    path: 'groups',
    component: GroupsComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'group_active', component: GroupsActiveListComponent },
      { path: 'user_groups', component: UserGroupsComponent },
      { path: '', component: GroupsActiveListComponent }
    ]
  },

  { path: 'user_join', component: UserJoinComponent, canActivate: [AuthGuard] },
  {
    path: 'inbound',
    component: InboundComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ToConfirmListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'inboundToConfirm',
        component: ToConfirmListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'inboundReported',
        component: ReportedListComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'inboundHistory',
        component: HistoryListComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
