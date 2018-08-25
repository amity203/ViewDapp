
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './/app-routing.module';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {Web3hookService} from './web3hook.service';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [BrowserAnimationsModule,MatGridListModule,MatProgressSpinnerModule,MatProgressBarModule,MatCardModule,MatToolbarModule,AppRoutingModule,
    BrowserModule,FormsModule,HttpModule,CommonModule,MatButtonModule,MatIconModule
  ],
  providers: [Web3hookService],
  exports: [DashboardComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
