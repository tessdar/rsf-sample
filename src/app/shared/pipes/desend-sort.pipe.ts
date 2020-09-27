import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desendSort'
})
export class DesendSortPipe implements PipeTransform {

  transform(value) {
    if (!value) { return; }

    return value.reverse();
  }

}
