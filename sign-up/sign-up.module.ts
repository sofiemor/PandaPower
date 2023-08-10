import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    SharedModule
  ]
})
export class SignUpModule { }
