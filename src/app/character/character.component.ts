import { Component, OnInit } from '@angular/core';
import { GotHttpServiceService  } from '../got-http-service.service';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public allCharacters=[];

  constructor(public gotHttpServiceService:GotHttpServiceService) { }

  ngOnInit() {

    
    this.allCharacters = this.gotHttpServiceService.getAllCharacters().subscribe(
    
      data => {
        this.allCharacters = data;
    this.allCharacters.sort(function (a, b) {
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
    console.log(this.allCharacters)


  }

}
