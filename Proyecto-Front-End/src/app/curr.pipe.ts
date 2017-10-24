import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: "currPipe"})
export class CurrPipe implements PipeTransform {
  transform(value: string): string{
    let str = "$ " + value;
    return str;
  }
}
