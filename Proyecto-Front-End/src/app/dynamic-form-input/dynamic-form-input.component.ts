import { Component, OnInit, Input } from '@angular/core';
import { InputBase } from '../input-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'df-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.scss']
})
export class DynamicFormInputComponent{
  @Input() input: InputBase<any>;
  @Input() form: FormGroup;
  get isValid(){ return this.form.controls[this.input.key].valid;}
}
