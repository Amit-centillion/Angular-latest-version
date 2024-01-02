import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  imports:[ 
    HttpClientModule,
    MatToolbarModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
   ],
})
export class AppModule { }