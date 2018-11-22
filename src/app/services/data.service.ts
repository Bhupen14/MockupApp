import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private myHttp:HttpClient) {

   }
   getMyData()
   {
     return this.myHttp.get('assets/Data.json');
   }
}
