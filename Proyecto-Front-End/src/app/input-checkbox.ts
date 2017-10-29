import { InputBase } from './input-base';

export class CheckboxInput extends InputBase<string> {
  controlType = 'checkbox';
  options: {value: string, checked: boolean}[] = [];

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}