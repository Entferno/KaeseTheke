import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-kaese-kaufen',
  templateUrl: './kaese-kaufen.component.html',
  styleUrls: ['./kaese-kaufen.component.css']
})
export class KaeseKaufenComponent implements OnInit {

  testKaese: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {  //Wenn Komponente initiert wird
    this.getKäse();

  }

  private käseUrl ='lager';


getKäse(){

  return this.http.get(this.käseUrl).subscribe(x => {

    this.testKaese = x;
  });

}



käse = [
  {title: "Erdbeerkäse", date: new Date(2021, 5, 25), geschmack: "lecker"
},

{title: "Stinkekäse", date: new Date(2021, 5, 25), geschmack: "richtig lecker"
},


{title: "Schablettenkäse", date: new Date(2021, 5, 25), geschmack: " sehr lecker"
}

];

}