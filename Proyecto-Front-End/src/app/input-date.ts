import { InputBase } from "./input-base";

export class DateInput extends InputBase<string> {
  controlType = 'date';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}