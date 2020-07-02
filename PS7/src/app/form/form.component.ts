import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import { QuesitonService } from './quesiton.service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private provideQuestServ: QuesitonService) { }
  jsonresp: object = null; // pass this up to container which will pass it to quesitons
  numbers: string;

  @Output() jfile = new EventEmitter<object>();

  getQuestions() {
    this.provideQuestServ.getQestions(this.numbers).subscribe(
      response => {
        this.jsonresp = response;
        this.jfile.emit(this.jsonresp);
      }
    );
  }
}
