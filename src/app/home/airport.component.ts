import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class HomeComponent {
  airportsApi: string = "https://restcountries.com/v2/all";
  airports: any;
  constructor(private http: HttpClient,){}
  airportId: any;
  airportName: any;
  airportCode: any;
  ngOnInit(): void{
    this.getAirports();
  }

  getAirports(){
    this.http.get(this.airportsApi).subscribe((res) => {
      this.airports = res;                         //Сохраняю данные по странам и пытаюсь вывести их
      console.log(this.airports);
    });

  }

  addAirport(){
    let newAirport = {
      // "numericCode": thiairportId,
      "name": this.airportName,
      "alpha3Code": this.airportCode
    }
    this.http.post(this.airportsApi,newAirport).subscribe((res) => {
      console.log(res);
      alert('new airport added')
      this.getAirports()
    })
  }

}
