import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  loadedQuestions = false;
  questionsRes: object;
  cached: string;
  constructor() { }

  ngOnInit(): void {

  }

  pushtoQuestion(event): void {
    this.questionsRes = JSON.parse(event.response);
    this.cached = event.cached;
    console.log(event);
    this.loadedQuestions = true;
  }
}
