import { Injectable } from "@angular/core";
//import {IEmployee} from "./employee1"

@Injectable()
export class EmployeeService{

getEmployees():any[]{

        return [
            {code:'emp101', name:'Tom', gender: 'Male', annualSalary: 100000, dateOfBirth: '11/11/2010'},
            {code:'emp102', name:'Jane', gender: 'Female', annualSalary: 90000, dateOfBirth: '11/11/2011'},
            {code:'emp103', name:'John', gender: 'Male', annualSalary: 80000, dateOfBirth: '11/11/2012'},
            {code:'emp104', name:'Mimi', gender: 'Female', annualSalary: 70000, dateOfBirth: '11/11/2013'},
            {code:'emp105', name:'Nancy', gender: 'Female', annualSalary: 60000, dateOfBirth: '11/11/2013'}
        ];

    }
}
