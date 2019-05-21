import { Pipe, PipeTransform } from '@angular/core';
import { Category} from './category';

@Pipe({
  name: "filter"
})

export class FilterPipe implements PipeTransform {
  transform(cat: Category[], searchterm: string): Category[] {
    if (!cat) return [];
    if (!searchterm) return cat;
    return cat.filter(item => item.categoryname.toLowerCase().startsWith(searchterm.toLowerCase()))
   
    }
  }

