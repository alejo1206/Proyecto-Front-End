import { InputBase } from "./input-base";

export class NumberInput extends InputBase<string> {
  controlType = 'number';
  type = "number";

  constructor(options: {} = {}) {
    super(options);
  }
}