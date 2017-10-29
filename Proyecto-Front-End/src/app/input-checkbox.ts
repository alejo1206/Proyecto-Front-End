import { InputBase } from './input-base';

export class CheckboxInput extends InputBase<string> {
  controlType = 'checkbox';
  options: {value: string, checked: boolean}[] = [];
  type = "checkbox";

  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}