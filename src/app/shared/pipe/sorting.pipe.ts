import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'sorting'})
export class SortingPipe implements PipeTransform {
  transform(list: any, order?: string, properytName?:string): number {
      //console.log(list);
      console.log(order);
      console.log(properytName);
      let newlist=list.slice().sort(function(a, b){
            var nameA=a[properytName].toLowerCase(), nameB=b[properytName].toLowerCase();
            if(order=='asc'){
            if (nameA < nameB) //sort string ascending
                return -1 ;
            if (nameA > nameB)
                return 1;
        }else{
            if (nameA > nameB) //sort string ascending
                    return -1 ;
                if (nameA < nameB)
                    return 1;
        }
            return 0 //default return value (no sorting)
    });
    return newlist;
  }
}