import {Component, SimpleChanges, OnChanges} from '@angular/core';

@Component({
    selector: 'simple',
    templateUrl:`app/Others/simple.compnent.html`
})
export class SimpleComponent implements OnChanges{
    simpleInput: string = 'Tom';

    ngOnChanges(changes: SimpleChanges){
        alert('Im in');
        for (let propertyName in changes){
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
           console.log(propertyName + " : Current Value = " + current + " Previous Value = " + previous);
        
        }
    } 
}