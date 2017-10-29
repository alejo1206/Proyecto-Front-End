import { Component, OnInit } from '@angular/core';
import { InputService } from '../input.service';
import { DropdownInput } from '../input-dropdown';
import { CheckboxInput } from '../input-checkbox';
import { TextboxInput } from '../input-textbox';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  inputs: any[];

  constructor(private service: InputService) {
    this.inputs = [new DropdownInput({
      key: 'brave',
      label: 'Bravery Rating',
      options: [
        {key: 'solid',  value: 'Solid'},
        {key: 'great',  value: 'Great'},
        {key: 'good',   value: 'Good'},
        {key: 'unproven', value: 'Unproven'}
      ],
      order: 3
    }),

    new CheckboxInput({
     key: 'checkbox',
     label: 'Check',
     options: [
       {value: 'Solid', checked: false},
       {value: 'Great', checked: true},
       {value: 'Good', checked: false},
       {value: 'Unproven', checked: false}
     ],
     order: 4
   }),

    new TextboxInput({
      key: 'firstName',
      label: 'First name',
      value: 'Bombasto',
      required: true,
      order: 1
    }),

    new TextboxInput({
      key: 'emailAddress',
      label: 'Email',
      type: 'email',
      order: 2
    })];
    this.service.getInputs("articulos", "3").subscribe(data => console.log(data));
   }

  ngOnInit() {
  }

}
