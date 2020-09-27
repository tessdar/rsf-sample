import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  /**
   * 글자 필터링 하는 파이프
   * 입력한 글자가 있는 경우 해당 글자가 포함된 값만 필터링
   */
  public transform(value, keys: string, term: string) {

    if (!term) { return value; }
    return (value || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));

  }

}
