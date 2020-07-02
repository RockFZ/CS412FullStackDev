import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  @Input() questions: object;
  @Input() cacho: string;

  constructor() { }

  ngOnInit(): void {
  }

}
