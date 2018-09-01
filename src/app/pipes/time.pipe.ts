import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  // seconds come in
  // Xh Ym Zs comes out
  transform(value: any, args?: any): any {
    let min = Math.floor(value / 60);
    let hrs = 0;
    if (min > 59) {
      hrs = Math.floor(min / 60);
      min = min % 60;
    }
    const r = value % 60;
    let out = '' + r + 's';
    out = (min > 0) ? (min + 'm ' + out) : out;
    out = (hrs > 0) ? (hrs + 'h ' + out) : out;

    return out;
  }

}
