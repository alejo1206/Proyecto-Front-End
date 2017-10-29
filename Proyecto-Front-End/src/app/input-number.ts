import { InputBase } from "./input-base";

export class NumberInput extends InputBase<string> {
  controlType = 'number';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }
}