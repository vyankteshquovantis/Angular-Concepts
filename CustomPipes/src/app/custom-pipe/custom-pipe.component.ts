import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee.model';
@Component({
  selector: 'app-custom-pipe',
  templateUrl: './custom-pipe.component.html',
  styleUrls: ['./custom-pipe.component.css']
})
export class CustomPipeComponent implements OnInit {

  employees:Employee[]=[];
  constructor() { }

  ngOnInit(): void {
    // angular default date pipe acceepts mm/dd/yyyy date format. 
    this.employees=[
      {code:'emp101',name:'Tom',gender:'Male',annualSalary:5000,dateOfBirth:'6/25/1998'},
      {code:'emp102',name:'Mike',gender:'Male',annualSalary:5700,dateOfBirth:'9/6/1999'},
      {code:'emp103',name:'Harry',gender:'Male',annualSalary:5900,dateOfBirth:'6/5/1998'},
      {code:'emp104',name:'William',gender:'Female',annualSalary:5800,dateOfBirth:'7/25/1998'}
    ]
  }

  
  

}
