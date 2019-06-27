import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './user_components/register-form/register-form.component';
import { SignInFormComponent } from './user_components/sign-in-form/sign-in-form.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeDealCreateComponent } from './home/home-deal-create/home-deal-create.component';
import { HomeActiveDealListComponent } from './home/home-active-deal-list/home-active-deal-list.component';
import { HomeExpiredDealListComponent } from './home/home-expired-deal-list/home-expired-deal-list.component';
import { HomeFavoriteDealListComponent } from './home/home-favorite-deal-list/home-favorite-deal-list.component';
import { HomeDraftsDealListComponent } from './home/home-drafts-deal-list/home-drafts-deal-list.component';

const routes: Routes = [
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
      { path: 'drafts', component: HomeDraftsDealListComponent }
    ]
  },
  {
    path: 'home/create',
    component: HomeDealCreateComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: 'signin' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
