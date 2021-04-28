import { Component, OnInit } from '@angular/core';
import { Bus} from './../../Modals/bus.model'
import { AllbusService} from './../../services/allbus.service'
@Component({
  selector: 'app-bus-search',
  templateUrl: './bus-search.component.html',
  styleUrls: ['./bus-search.component.css']
})
export class BusSearchComponent implements OnInit {

  constructor(private _allbusService:AllbusService) {
    
   }

  ngOnInit(): void {
   

}
journey:any =JSON.parse(localStorage.getItem("journey")||"{}") ;
user:any =JSON.parse(localStorage.getItem("user")||"{}") ;

}