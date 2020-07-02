import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class QuesitonService {

  constructor(private http: HttpClient) { }

  getQestions(numb: string){
    const body: object = {number: numb};
    return this.http.post( 'http://localhost:3000/ps4', body);
  }
}
