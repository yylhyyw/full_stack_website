import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SignInFormComponent } from './user_components/sign-in-form/sign-in-form.component';
import { RegisterFormComponent } from './user_components/register-form/register-form.component';
import { HomeComponent } from './home/home.component';
import { ErrorInterceptor } from './interceptor/error.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SignInFormComponent,
    RegisterFormComponent,
    HomeComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
