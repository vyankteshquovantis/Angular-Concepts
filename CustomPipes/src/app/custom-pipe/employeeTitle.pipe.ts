import { PipeTransform } from "@angular/core";
import { Pipe } from "@angular/core";

@Pipe({
    name:'employeeTitle'
})
export class exployeeTitle implements PipeTransform{
    transform(value:string,gender:string):string{
        if(gender.toLowerCase()=='male'){
            return 'Mr '+value;
        }
        return 'Mrs '+value;
    }
}