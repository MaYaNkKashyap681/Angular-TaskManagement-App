import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderserviceService {

  constructor() { }

  getCurrentDate(): Date {
    return new Date();
  }
}
