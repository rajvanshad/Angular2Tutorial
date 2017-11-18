import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>
              <h1>{{pageHeader}}</h1>
              <list-employee></list-employee>    
            </div>` 
  //derivatives: [EmployeeComponent]
})
export class AppComponent {
  //title = 'app';
  pageHeader:string = 'Employee Details';
}
