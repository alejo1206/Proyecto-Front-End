import { InputBase } from "./input-base";

export class TimeInput extends InputBase<string> {
  controlType = 'time';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}