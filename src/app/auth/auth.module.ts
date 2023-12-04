import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from '../log-in/log-in.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { UsersComponent } from '../users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    LogInComponent,
    SignUpComponent,
    UsersComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AccordionModule.forRoot(),
    AppRoutingModule
  ],
  exports: [
    LogInComponent,
    SignUpComponent,
    UsersComponent]
})
export class AuthModule { }
