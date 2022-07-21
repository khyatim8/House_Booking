import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterstring: string, propertyname: string): any[] {
    const result: any = [];
    if (!value || filterstring === '' || propertyname === '') {
      return value;

    }
    value.forEach((a: any) => {
      if (a[propertyname].trim().toLowerCase().includes(filterstring.toLowerCase())) {
        result.push(a);
      }
    });
    return result;
  }

}
