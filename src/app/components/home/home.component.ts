import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-ho me',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient ) {
    // this.http.get('https://restcountries.eu/rest/v2/lang/es').subscribe( paises => {
      //console.log(paises);
    // });
  }

  ngOnInit() {
  }

}
