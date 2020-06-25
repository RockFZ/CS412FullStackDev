import { Component } from '@angular/core';
import {QUESTION} from '../data/question';
import {LISTQUESTIONS} from '../data/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
  questions: QUESTION[] = LISTQUESTIONS;
  sq = false;

  showQuestions(): void{
    this.sq = true;
  }

}
