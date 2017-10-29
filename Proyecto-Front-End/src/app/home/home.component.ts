import { Component, OnInit, Input } from '@angular/core';
import { InputBase } from '../input-base';
import { FormGroup } from '@angular/forms';
import { InputService } from '../input.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() inputs: InputBase<any>[] = [];
  form: FormGroup;
  payLoad = "";

  constructor(private service: InputService) { }

  ngOnInit() {
    this.form = this.service.toFormGroup(this.inputs);
  }

  onSubmit(){
    this.payLoad = JSON.stringify(this.form.value);
  }

}
