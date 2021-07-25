import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(records: any[], searchValue: string): any[] {
    if (!records || !searchValue) {
      return records;
    }
    return records.filter(record =>
      record.make.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      record.brand.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      record.sleeps.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      record.price.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    )
  }

}
