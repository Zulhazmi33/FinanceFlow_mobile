import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {
  transform(value: any): string {
    if (!value?.seconds) return '';
    const date = new Date(value.seconds * 1000);
    return date.toLocaleString();
  }
}
