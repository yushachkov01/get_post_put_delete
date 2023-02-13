import { Component } from '@angular/core';
import { AirportService } from './airport.service';

@Component({
  selector: 'app-home',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class HomeComponent {
  updateAirport: boolean = false;
  airports: any;
  constructor(private airportService: AirportService){}
  // numericCode: any;
  airportName:any;
  airportCode: any;
  currentId: any;

  ngOnInit(): void{
    this.fetchAllAirports()
  }

  fetchAllAirports(){
    this.airportService.getAirports().subscribe((res)=>{
      this.airports = res;
    });
  }

  addAirport(){
    let newAirport = {
      // "numericCode": this.numericCode,
      "name": this.airportName,
      "alpha3Code": this.airportCode
    }
    this.airportService.addNewAirport(newAirport).subscribe((res)=>{
      this.fetchAllAirports();
      console.log(res);
    })
  }
  delete(name:any){
    this.airportService.deleteAirport(name).subscribe((res)=>{
      this.fetchAllAirports();
    })
  }
  edit(airport:any){
    this.updateAirport = true;
    //  this.airports = airport.id
     this.airportName = airport.name
    this.airportCode = airport.alpha3Code
  }
  update(){
    let updateAirport = {
      // "numericCode": this.numericCode,
      "name": this.airportName,
      "alpha3Code": this.airportCode
    }
    
    this.airportService.updateAirport(this.currentId,updateAirport).subscribe((res) => {
      this.fetchAllAirports(); //Проверить, тут что-то намудрил
    })
    this.updateAirport = false
  }
}
