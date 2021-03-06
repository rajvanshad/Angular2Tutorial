import {Component} from '@angular/core';

@Component({
    selector:'my-employee',
    templateUrl:`app/employee/employee.component.html`,
    styleUrls:[`app/employee/employee.component.css`]
})

export class EmployeeComponent{
    columnSpan: number=2;
firstName: string = 'Tom';
lastName: string = 'Hopkins';
gender: string = 'Male';
age: number = 43; 
showDetails: boolean=false;
name: string="Tom";

toggleDetails():void{
    this.showDetails=!this.showDetails;
}


}