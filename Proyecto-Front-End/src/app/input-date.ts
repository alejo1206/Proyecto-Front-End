import { InputBase } from "./input-base";

export class DateInput extends InputBase<string> {
  controlType = 'date';
  type = "date";

  constructor(options: {} = {}) {
    super(options);
  }
}