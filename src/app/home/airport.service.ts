import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  airportsApi: string = "https://restcountries.com/v2/all";
  constructor(private http: HttpClient) { }

  getAirports(){
   return this.http.get(this.airportsApi)
  }
  addNewAirport(airport: any){
    return this.http.post(this.airportsApi, airport);
  }
  deleteAirport(name: any){
    return this.http.delete(`${this.airportsApi}/${name}`);
  }
  updateAirport(name: any, airport: any ){ 
    return this.http.put(`${this.airportsApi}/${name}`, airport)
  }
}
