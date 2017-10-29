import { InputBase } from "./input-base";

export class TimeInput extends InputBase<string> {
  controlType = 'time';
  type = "time";

  constructor(options: {} = {}) {
    super(options);
  }
}