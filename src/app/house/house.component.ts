import { Component, OnInit } from '@angular/core';
import { GotHttpServiceService } from '../got-http-service.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  public allHouses=[];

  constructor(public gotHttpServiceService:GotHttpServiceService) { }

  ngOnInit() {
    
    this.allHouses = this.gotHttpServiceService.getAllHouses().subscribe(
    
      data => {
        this.allHouses = data;
    this.allHouses.sort(function (a, b) {
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
    console.log(this.allHouses)


  }

}
