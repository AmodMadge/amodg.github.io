import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { CharacterComponent } from './character/character.component';
import { HouseComponent } from './house/house.component';
import { HomeComponent } from './home/home.component';
import { BookviewComponent } from './bookview/bookview.component';
import { CharacterviewComponent } from './characterview/characterview.component';
import { HouseviewComponent } from './houseview/houseview.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';


//Router
import {RouterModule , Routes} from '@angular/router';

//service

import { GotHttpServiceService } from './got-http-service.service';
// import statements for API 
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    CharacterComponent,
    HouseComponent,
    HomeComponent,
    BookviewComponent,
    CharacterviewComponent,
    HouseviewComponent,
    NotFoundComponent,
    DetailsComponent,
     ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path:'book',component:BookComponent},
      {path:'book/:name',component:BookviewComponent},
      {path:'character',component:CharacterComponent},
      {path:'character/:gender',component:CharacterviewComponent},
      {path:'house',component:HouseComponent},
      {path:'house/:name',component:HouseviewComponent},
      {path:'details',component:DetailsComponent},
      {path: '**', component: NotFoundComponent}

    ])
  ],
  providers: [GotHttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
