import { Component, OnInit } from '@angular/core';
import { GotHttpServiceService  } from '../got-http-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  public allBooks=[];
  constructor(public gotHttpServiceService:GotHttpServiceService ) { 

  }

  ngOnInit() {

    console.log("Book Component onInit called")
   // this.allBooks=this.gotHttpServiceService.getAllBooks();
  
        this.allBooks = this.gotHttpServiceService.getAllBooks().subscribe
        (
    
          data => {
            this.allBooks = data;
        this.allBooks.sort(function (a, b) {
          const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
          if (nameA < nameB) {//sort string ascending
            return -1;
          }
          if (nameA > nameB) {

            return 1;
          }
          return 0; //default return value (no sorting)
        });
            /*console.log("logging data ")
            console.log(data);
            this.allBooks = data["data"];*/
          },
          error => {
            console.log("some error occured");
            console.log(error.errorMessage)
          }
        )
        console.log(this.allBooks)
      }

}
