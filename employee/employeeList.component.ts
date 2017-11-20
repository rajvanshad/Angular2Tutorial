import {Component, OnInit} from '@angular/core';
//import {IEmployee} from './employee1';
import {EmployeeService} from "./employee.service";

@Component({
    selector:'list-employee',
    templateUrl:`app/employee/employeeList.component.html`,
    styleUrls:[`app/employee/employeeList.component.css`],
    providers:[EmployeeService]
})

export class EmployeeListComponent implements OnInit{
    employees: any[];
    
    selectedEmployeeCountRadioButton: string = "All";

    constructor(private _employeeService:EmployeeService){
       
    }

ngOnInit(){
    this.employees = this._employeeService.getEmployees();
}

   /*  constructor(){
    this.employees = [
    {code:'emp101', name:'Tom', gender: 'Male', annualSalary: 100000, dateOfBirth: '11/11/2010'},
    {code:'emp102', name:'Jane', gender: 'Female', annualSalary: 90000, dateOfBirth: '11/11/2011'},
    {code:'emp103', name:'John', gender: 'Male', annualSalary: 80000, dateOfBirth: '11/11/2012'},
    {code:'emp104', name:'Mimi', gender: 'Female', annualSalary: 70000, dateOfBirth: '11/11/2013'}
    ];

    } */

   /*  getEmployees(): void{

        this.employees = [
            {code:'emp101', name:'Tom', gender: 'Male', annualSalary: 100000, dateOfBirth: '11/11/2010'},
            {code:'emp102', name:'Jane', gender: 'Female', annualSalary: 90000, dateOfBirth: '11/11/2011'},
            {code:'emp103', name:'John', gender: 'Male', annualSalary: 80000, dateOfBirth: '11/11/2012'},
            {code:'emp104', name:'Mimi', gender: 'Female', annualSalary: 70000, dateOfBirth: '11/11/2013'},
            {code:'emp105', name:'Nancy', gender: 'Female', annualSalary: 60000, dateOfBirth: '11/11/2013'}
            ];
          
    } */

    onEmployeeRadioButtonChange(selectedRadioButton:string) {
        this.selectedEmployeeCountRadioButton = selectedRadioButton;
        console.log(this.selectedEmployeeCountRadioButton);
    }

    trackByEmployeeCode(Index:number,employees:any): string {
     
        return employees.code;
    }

    getTotalEmployeeCount(): number{

        return this.employees.length;
    }
    getTotalMaleEmployeeCount(): number{
        return this.employees.filter(e => e.gender === "Male").length;
    }

    getTotalFemaleEmployeeCount(): number{
        return this.employees.filter(e => e.gender === "Female").length;
    }
}


